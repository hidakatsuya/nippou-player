<style>
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
</style>

<template>
  <div class="window">
    <toolbar />
    <div class="window-content">
      <div class="about pane padded-more">
        <img class="app-logo" src="./assets/logo.png" />
        <div class="app-name">{{ productName }}</div>
        <div class="app-version">{{ version }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Toolbar from './Toolbar'

  export default {
    components: {
      Toolbar
    },
    computed: {
      version () {
        return '0.1.0'
      },
      productName () {
        return 'Nippou Player'
      }
    }
  }
</script>
