<style>
  .fade-enter-active {
    transition: opacity .2s
  }
  .fade-enter {
    opacity: 0
  }
  .v-spinner {
    margin: auto;
  }
  .window-content {
    height: 100%;
  }
</style>

<template>
  <div class="window">
    <toolbar
      :title="formattedDate"
      :next-day="nextDay" :prev-day="prevDay"
      :play="activeItem ? resume : play" :pause="pause" :stop="stop"
    ></toolbar>
    <div class="window-content">
      <transition name="fade" mode="out-in">
        <beat-loader v-if="loader.loading" :color="'#aaa'" :size="'6px'"></beat-loader>
        <playlist v-else :items="items"></playlist>
      </transition>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import setting from '../../stores/Setting'
  import BeatLoader from 'vue-spinner/src/BeatLoader'
  import Playlist from './Playlist'
  import Toolbar from './Toolbar'
  import PlaylistItem from '../../models/PlaylistItem'
  import Speaker from '../../services/Speaker'
  import SpeakerNoteBuilder from '../../presenters/SpeakerNoteBuilder'
  import NippouLoader from '../../services/NippouLoader'

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
    beforeCreate () {
      if (!setting.isValid()) this.$router.push({ name: 'setting' })
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
          let note = SpeakerNoteBuilder.build(item.nippou)
          let speaker = new Speaker(note)

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
        this.date = moment(this.date).add(1, 'days').toDate()
      },
      prevDay () {
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
