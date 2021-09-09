<template>
  <header class="toolbar toolbar-header">
    <Message class="info">
      2021-9-17 をもって Nippou Player の提供を終了します。
    </Message>
    <h1 class="title">
      About
    </h1>
    <div class="toolbar-actions">
      <router-link
        :to="{ name: 'player' }"
        tag="button"
        class="btn btn-default"
      >
        <span class="icon icon-left" />
      </router-link>
    </div>
  </header>
</template>

<script>
import Message from 'Message'

export default {
  components: {
    Message
  }
}
</script>

<style scoped>
.info {
  color: red;
}
</style>
