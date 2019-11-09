<template>
  <div class="window">
    <Toolbar />
    <div class="window-content">
      <form class="pane padded-more">
        <Message v-if="!setting.isValid()">
          設定してください。
        </Message>
        <div class="form-group">
          <label>
            esa API のアクセストークン
            <HelpButton :href="'https://docs.esa.io/posts/102#3-0-0'" />
          </label>
          <input
            v-model="setting.authorizationKey"
            type="text"
            class="form-control"
          >
        </div>
        <div class="form-group">
          <label>
            日報一覧のパス
            <HelpButton :href="'https://docs.esa.io/posts/104#2-0-0'" />
          </label>
          <input
            v-model="setting.nippouPath"
            type="text"
            placeholder="in:日報/YYYY/MM/DD"
            class="form-control"
          >
        </div>
        <div class="form-group">
          <label>
            スピーチするセクション (Optional)
          </label>
          <textarea
            v-model="setting.sectionTitles"
            placeholder="# セクション1"
            class="form-control"
            rows="4"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import setting from 'stores/Setting'
import Toolbar from './Toolbar'
import Message from 'Message'
import HelpButton from 'HelpButton'

export default {
  components: {
    Toolbar,
    Message,
    HelpButton
  },
  data () {
    return {
      setting: setting
    }
  }
}
</script>

<style scoped>
</style>
