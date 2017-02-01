<template>
  <header class="toolbar toolbar-header">
    <h1 class="title">Setting</h1>
    <div class="toolbar-actions">
      <router-link :to="{ name: 'player' }" tag="button" class="btn btn-default">
        <span class="icon icon-left"></span>
      </button>
    </div>
  </header>
</template>

<script>
  export default {
    props: ['title']
  }
</script>
