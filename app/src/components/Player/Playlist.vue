<style>
  .item-status {
    width: 30px;
    padding: 2px 0;
    text-align: center;
  }
  .item-title {
    padding: 2px 0;
  }
  .item-title .content {
    width: 245px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .not-found {
    text-align: center;
    color: #bbb;
    font-size: 11px;
    margin: auto;
  }
</style>

<template>
  <table v-if="items.length > 0" class="table-striped">
    <tbody>
      <tr v-for="item in items" v-on:click="open(item.nippou.url)">
        <td class="item-status">
          <span v-if="item.playing" class="icon icon-sound"></span>
          <span v-if="item.paused" class="icon icon-mute"></span>
        </td>
        <td class="item-title">
          <div class="content">{{ item.nippou.title }}</div>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-else class="pane not-found">日報が見つかりません。</div>
</template>

<script>
  import { shell } from 'electron'

  export default {
    props: ['items'],
    methods: {
      open (nippouUrl) {
        shell.openExternal(nippouUrl)
      }
    }
  }
</script>
