<style scoped>
.help-button {
  padding: 0 1px;
}
.help-button a {
  color: #aaa;
}
.help-button:hover a {
  color: #000;
}
</style>

<template>
  <span class="help-button">
    <ExternalLink :href="href">
      <span class="icon icon-help-circled"></span>
    </ExternalLink>
  </span>
</template>

<script>
import ExternalLink from 'ExternalLink'

export default {
  components: {
    ExternalLink
  },
  props: ['href']
}
</script>
