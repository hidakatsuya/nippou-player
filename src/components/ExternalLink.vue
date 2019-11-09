<template>
  <a :href="href" @click="onClick" target="_blank" class="external-link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ['href'],
  methods: {
    onClick (e) {
      if (process.env.NODE_ENV === 'production') {
        import('electron').then(({ shell }) => {
          shell.openExternal(this.href)
          e.preventDefault()
        })
      }
    }
  }
}
</script>

<style scoped>
</style>
