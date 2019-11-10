<template>
  <a
    :href="href"
    target="_blank"
    class="external-link"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
