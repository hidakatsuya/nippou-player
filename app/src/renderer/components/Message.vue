<style>
  .message {
    padding: 5px;
    border-radius: 2px;
    border: 0;
    color: #888;
    text-align: center;
    margin-bottom: 10px;
    font-size: 11px;
  }
</style>

<template>
  <div class="message">
    <span class="icon icon-attention"></span>
    <slot></slot>
  </div>
</template>

<script>
  export default {
  }
</script>
