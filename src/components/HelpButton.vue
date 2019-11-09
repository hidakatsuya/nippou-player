<template>
  <span class="help-button">
    <ExternalLink :href="href">
      <span class="icon icon-help-circled" />
    </ExternalLink>
  </span>
</template>

<script>
import ExternalLink from 'ExternalLink'

export default {
  components: {
    ExternalLink
  },
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>

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
