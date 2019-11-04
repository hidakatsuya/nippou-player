<style scoped>
.help-button {
  color: #aaa;
  padding: 0 1px;
}
.help-button:hover {
  color: #000;
}
</style>

<template>
  <ExternalLink :href="href">
    <span class="icon icon-help-circled"></span>
  </ExternalLink>
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
