<template>
  <header class="toolbar toolbar-header">
    <h1 class="title">
      {{ title }}
    </h1>
    <div class="toolbar-actions">
      <div class="btn-group">
        <button
          class="btn btn-default"
          @click="prevDay"
        >
          <span class="icon icon-left-open" />
        </button>
        <button
          class="btn btn-default"
          @click="nextDay"
        >
          <span class="icon icon-right-open" />
        </button>
      </div>
      <div class="btn-group">
        <button
          class="btn btn-default"
          @click="play"
        >
          <span class="icon icon-play" />
        </button>
        <button
          class="btn btn-default"
          @click="stop"
        >
          <span class="icon icon-stop" />
        </button>
        <button
          class="btn btn-default"
          @click="pause"
        >
          <span class="icon icon-pause" />
        </button>
      </div>
      <div class="btn-group">
        <router-link
          :to="{ name: 'setting' }"
          tag="button"
          class="btn btn-default"
        >
          <span class="icon icon-cog" />
        </router-link>
        <router-link
          :to="{ name: 'about' }"
          tag="button"
          class="btn btn-default pull-right"
        >
          <span class="icon icon-info-circled" />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    play: {
      type: Function,
      required: true
    },
    stop: {
      type: Function,
      required: true
    },
    pause: {
      type: Function,
      required: true
    },
    nextDay: {
      type: Function,
      required: true
    },
    prevDay: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
.toolbar-actions {
  text-align: center;
}
</style>
