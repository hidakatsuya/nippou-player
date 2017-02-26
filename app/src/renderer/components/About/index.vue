<style>
  .pane {
    text-align: center;
  }
  .app-logo {
    width: 100px;
    height: 100px;
  }
  .app-name {
    font-weight: bold;
  }
  .app-version {
    color: #aaa;
  }
</style>

<template>
  <div class="window">
    <toolbar />
    <div class="window-content">
      <div class="pane padded-more">
        <img class="app-logo" src="./assets/logo.png" />
        <div class="app-name">{{ productName }}</div>
        <div class="app-version">{{ version }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { productName, version } from '../../../../package'
  import Toolbar from './Toolbar'

  export default {
    components: {
      Toolbar
    },
    computed: {
      version () {
        return version
      },
      productName () {
        return productName
      }
    }
  }
</script>
