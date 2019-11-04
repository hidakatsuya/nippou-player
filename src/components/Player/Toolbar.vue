<template>
  <header class="toolbar toolbar-header">
    <h1 class="title">{{ title }}</h1>
    <div class="toolbar-actions">
      <div class="btn-group">
        <button v-on:click="prevDay" class="btn btn-default">
          <span class="icon icon-left-open"></span>
        </button>
        <button v-on:click="nextDay" class="btn btn-default">
          <span class="icon icon-right-open"></span>
        </button>
      </div>
      <div class="btn-group">
        <button v-on:click="play" class="btn btn-default">
          <span class="icon icon-play"></span>
        </button>
        <button v-on:click="stop" class="btn btn-default">
          <span class="icon icon-stop"></span>
        </button>
        <button v-on:click="pause" class="btn btn-default">
          <span class="icon icon-pause"></span>
        </button>
      </div>
      <router-link :to="{ name: 'setting' }" tag="button" class="btn btn-default">
        <span class="icon icon-cog"></span>
      </router-link>
      <router-link :to="{ name: 'about' }" tag="button" class="btn btn-default pull-right">
        <span class="icon icon-info-circled"></span>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  props: ['title', 'play', 'stop', 'pause', 'nextDay', 'prevDay']
}
</script>
