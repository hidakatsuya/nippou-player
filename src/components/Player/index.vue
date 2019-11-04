<template>
  <div class="window">
    <Toolbar
      :title="formattedDate"
      :next-day="nextDay" :prev-day="prevDay"
      :play="activeItem ? resume : play" :pause="pause" :stop="stop"
    />
    <div class="window-content">
      <transition name="fade" mode="out-in">
        <BeatLoader v-if="loader.loading" :color="'#aaa'" :size="'6px'" />
        <Playlist v-else :items="items" />
      </transition>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import setting from 'stores/Setting'
import BeatLoader from 'vue-spinner/src/BeatLoader'
import Playlist from './Playlist'
import Toolbar from './Toolbar'
import PlaylistItem from 'models/PlaylistItem'
import Speaker from 'services/Speaker'
import SpeakerNoteBuilder from 'presenters/SpeakerNoteBuilder'
import NippouLoader from 'services/NippouLoader'

export default {
  components: {
    Toolbar,
    Playlist,
    BeatLoader
  },
  data () {
    return {
      loader: new NippouLoader(setting),
      date: moment().subtract(1, 'days').toDate(),
      items: [],
      activeItem: null
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
    // Work around that pause() does not work at first.
    Speaker.init()
  },
  methods: {
    load () {
      this.loader.load(this.date).then(nippous => {
        this.items = nippous.map(nippou => new PlaylistItem(nippou))
      })
    },
    play () {
      this.items.forEach(item => {
        const note = SpeakerNoteBuilder.build(item.nippou, setting.listSectinTitles)
        const speaker = new Speaker(note)

        speaker.onStart = () => {
          item.nowPlaying()
          this.activeItem = item
        }
        speaker.onEnd = () => {
          item.nowPending()
          this.activeItem = null
        }
        speaker.onResume = () => item.nowPlaying()
        speaker.onPause = () => item.nowPaused()

        speaker.speak()
      })
    },
    resume () {
      window.speechSynthesis.resume()
    },
    stop () {
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
    }
  },
  watch: {
    date () {
      this.load()
    }
  },
  computed: {
    formattedDate () {
      return moment(this.date).format('YYYY-MM-DD')
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
</style>
