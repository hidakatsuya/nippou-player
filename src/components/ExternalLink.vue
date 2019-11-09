<template>
  <a
    :href="href"
    target="_blank"
    class="external-link"
    @click="onClick"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: ['href'],
  methods: {
    onClick (e) {
      if (process.env.NODE_ENV === 'production') {
        require('electron').shell.openExternal(this.href)
        e.preventDefault()
      }
    }
  }
}
</script>

<style scoped>
</style>
