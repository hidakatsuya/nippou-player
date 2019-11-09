<template>
  <div class="message">
    <span class="icon icon-attention" />
    <slot />
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.message {
  padding: 5px;
  border: 0;
  color: #888;
  text-align: center;
  font-size: 11px;
}
.message .icon {
  margin-right: 3px;
}
</style>
