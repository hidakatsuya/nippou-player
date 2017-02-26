<template>
  <div class="window">
    <toolbar />
    <div class="window-content">
      <form class="pane padded-more">
        <message v-if="!setting.isValid()">設定してください。</message>
        <div class="form-group">
          <label>Authorization key</label>
          <input type="text" v-model="setting.authorizationKey" class="form-control">
        </div>
        <div class="form-group">
          <label>日報一覧のパス</label>
          <input type="text" v-model="setting.nippouPath" placeholder="in:日報/YYYY/MM/DD" class="form-control">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import setting from '../../stores/Setting'
  import Toolbar from './Toolbar'
  import Message from '../Message'

  export default {
    components: {
      Toolbar,
      Message
    },
    data () {
      return {
        setting: setting
      }
    }
  }
</script>
