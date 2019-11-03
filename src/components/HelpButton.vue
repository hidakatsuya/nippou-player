<style>
  .help-button {
    color: #aaa;
    padding: 0 1px;
  }
  .help-button:hover {
    color: #000;
  }
</style>

<template>
  <a href="#" v-on:click.prevent="onClick" class="help-button">
    <span class="icon icon-help-circled"></span>
  </a>
</template>

<script>
  import { shell } from 'electron'

  export default {
    props: ['href'],
    methods: {
      onClick () {
        shell.openExternal(this.href)
      }
    }
  }
</script>
