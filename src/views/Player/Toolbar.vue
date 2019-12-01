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
          :disabled="disableOperations"
          @click="playPrev"
        >
          <span class="icon icon-fast-backward" />
        </button>
        <button
          class="btn btn-default"
          :disabled="disableOperations"
          @click="play"
        >
          <span class="icon icon-play" />
        </button>
        <button
          class="btn btn-default"
          :disabled="disableOperations"
          @click="playNext"
        >
          <span class="icon icon-fast-forward" />
        </button>
        <button
          class="btn btn-default"
          :disabled="disableOperations"
          @click="stop"
        >
          <span class="icon icon-stop" />
        </button>
        <button
          class="btn btn-default"
          :disabled="disableOperations"
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
          <span class="icon icon-info" />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    disableOperations: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      required: true
    },
    play: {
      type: Function,
      required: true
    },
    playNext: {
      type: Function,
      required: true
    },
    playPrev: {
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
.btn:disabled .icon {
  color: #bbbbbb;
}
</style>
