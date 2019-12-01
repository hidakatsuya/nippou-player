<template>
  <div class="window">
    <Toolbar
      :title="formattedDate"
      :next-day="nextDay"
      :prev-day="prevDay"
      :play="playOrResume"
      :play-next="playNext"
      :play-prev="playPrev"
      :pause="pause"
      :stop="stop"
      :disable-operations="items.length == 0"
    />
    <div class="window-content">
      <transition
        name="fade"
        mode="out-in"
      >
        <template v-if="loader.state === 'loading'">
          <BeatLoader
            :color="'#aaa'"
            :size="'6px'"
          />
        </template>
        <template v-else-if="loader.state === 'error'">
          <div class="pane padded-more error-message">
            <Message>日報の取得に失敗しました。</Message>
            <div class="error-details">
              {{ loader.error_message }}
            </div>
          </div>
        </template>
        <template v-else-if="loader.state === 'loaded'">
          <Playlist :items="items" />
        </template>
      </transition>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import setting from 'stores/Setting'
import BeatLoader from 'vue-spinner/src/BeatLoader'
import Message from 'Message'
import Playlist from './Playlist'
import Toolbar from './Toolbar'
import PlaylistItem from 'models/PlaylistItem'
import Speaker from 'services/Speaker'
import SpeakerNoteBuilder from 'presenters/SpeakerNoteBuilder'
import NippouLoader from 'services/NippouLoader'

export default {
  components: {
    Toolbar,
    Message,
    Playlist,
    BeatLoader
  },
  data () {
    return {
      loader: new NippouLoader(setting),
      date: moment().subtract(1, 'days').toDate(),
      items: [],
      queueIndex: {
        current: null,
        next: null
      }
    }
  },
  computed: {
    formattedDate () {
      return moment(this.date).format('YYYY-MM-DD')
    },
    isPlaying () {
      return this.currentItem && this.currentItem.playing
    },
    isPaused () {
      return this.currentItem && this.currentItem.paused
    },
    nextItemIndex () {
      if (this.queueIndex.current === null) {
        return 0
      } else if (this.queueIndex.current === this.lastItemIndex) {
        return null
      } else {
        return this.queueIndex.current + 1
      }
    },
    prevItemIndex () {
      if (this.queueIndex.current === null) {
        return 0
      } else if (this.queueIndex.current === 0) {
        return 0
      } else {
        return this.queueIndex.current - 1
      }
    },
    lastItemIndex () {
      return this.items.length
    },
    currentItem () {
      return this.items[this.queueIndex.current]
    }
  },
  watch: {
    date () {
      this.load()
    }
  },
  beforeMount () {
    if (!setting.isValid()) {
      this.$router.push({ name: 'setting' })
    }
  },
  beforeRouteLeave (_to, _from, next) {
    this.stop()
    next(true)
  },
  mounted () {
    this.load()
  },
  methods: {
    async load () {
      const nippous = await this.loader.load(this.date)
      this.items = nippous.map(nippou => new PlaylistItem(nippou))
    },
    playOrResume () {
      if (this.isPaused) {
        this.resume()
      } else if (!this.isPlaying) {
        this.startPlaybackAtFirst()
      }
    },
    playNext () {
      // When it performs canceling, playback automatically starts at queueIndex.next
      window.speechSynthesis.cancel()
    },
    playPrev () {
      // When it performs canceling, playback automatically starts at queueIndex.next
      this.queueIndex.next = this.prevItemIndex
      window.speechSynthesis.cancel()
    },
    resume () {
      window.speechSynthesis.resume()
    },
    stop () {
      this.queueIndex = {
        current: null,
        next: null
      }
      window.speechSynthesis.cancel()
    },
    pause () {
      window.speechSynthesis.pause()
    },
    nextDay () {
      this.stop()
      this.date = moment(this.date).add(1, 'days').toDate()
    },
    prevDay () {
      this.stop()
      this.date = moment(this.date).subtract(1, 'days').toDate()
    },

    // Internals
    startPlaybackAtFirst () {
      this.queueIndex.next = 0
      this.startPlaybackAtNextQueueIndex()
    },
    startPlaybackAtNextQueueIndex () {
      // Exit if there is not next playback
      if (this.queueIndex.next === null) {
        return
      }
      this.queueIndex.current = this.queueIndex.next
      this.queueIndex.next = this.nextItemIndex

      const item = this.currentItem
      const note = SpeakerNoteBuilder.build(item.nippou, setting.listSectinTitles)
      const speaker = new Speaker(note, window.speechSynthesis)

      speaker.onStart = () => item.nowPlaying()
      speaker.onResume = () => item.nowPlaying()
      speaker.onPause = () => item.nowPaused()
      speaker.onEnd = () => {
        item.nowPending()
        this.startPlaybackAtNextQueueIndex()
      }
      speaker.speak()
    }
  }
}
</script>

<style scoped>
.fade-enter-active {
  transition: opacity .2s;
}
.fade-enter {
  opacity: 0;
}
.v-spinner {
  margin: auto;
}
.window-content {
  height: 100%;
}
.error-message {
  margin: auto;
}
.error-message .error-details {
  text-align: center;
  color: #aaa;
}
</style>
