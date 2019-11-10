<template>
  <table
    v-if="items.length > 0"
    class="table-striped"
  >
    <tbody>
      <tr
        v-for="item in items"
        :key="item.id"
      >
        <td class="item-status">
          <span
            v-if="item.playing"
            class="icon icon-sound"
          />
          <span
            v-if="item.paused"
            class="icon icon-mute"
          />
        </td>
        <td class="item-title">
          <ExternalLink :href="item.nippou.url">
            {{ item.nippou.title }}
          </ExternalLink>
        </td>
      </tr>
    </tbody>
  </table>
  <div
    v-else
    class="pane not-found"
  >
    日報が見つかりません。
  </div>
</template>

<script>
import ExternalLink from 'ExternalLink'

export default {
  components: {
    ExternalLink
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.item-status {
  width: 30px;
  padding: 2px 0;
  text-align: center;
}
.item-title {
  padding: 2px 0;
}
.item-title a {
  width: 245px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000;
  text-decoration: none;
}
.not-found {
  text-align: center;
  color: #bbb;
  font-size: 11px;
  margin: auto;
}
</style>
