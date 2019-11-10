<template>
  <div class="window">
    <Toolbar />
    <div class="window-content">
      <div class="about pane padded-more">
        <img
          class="app-logo"
          src="../../assets/logo.png"
        >
        <div class="app-name">
          {{ productName }}
        </div>
        <div class="app-version">
          {{ version }}
        </div>
        <div class="app-links">
          <ExternalLink :href="'https://github.com/hidakatsuya/nippou-player'">
            <span class="icon icon-github" />
          </ExternalLink>
          <ExternalLink :href="'https://twitter.com/hidakatsuya'">
            <span class="icon icon-twitter" />
          </ExternalLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from './Toolbar'
import ExternalLink from 'ExternalLink'

export default {
  components: {
    Toolbar,
    ExternalLink
  },
  computed: {
    version () {
      return '1.0.0'
    },
    productName () {
      return 'Nippou Player'
    }
  }
}
</script>

<style scoped>
.about {
  text-align: center;
}
.app-logo {
  width: 80px;
  height: 80px;
}
.app-name {
  margin-top: 10px;
}
.app-version {
  color: #aaa;
  font-size: .9em;
  margin-top: 10px;
}
.app-links {
  margin-top: 5px;
}
.app-links a {
  padding: 0 5px;
}
</style>
