<template>
  <div class="hot_container">
    <img :src="tvData.url" :alt="tvData.title" />
    <div class="tv-list-con">
      <div class="jishu">更新到{{tvData.updateTo}}集</div>
      <div class="title">{{tvData.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tvData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="stylus">
.hot_container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  .tv-list-con {
    position: absolute;
    bottom: 10px;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    left: 0;
  }

  img {
    width: 100%;
  }
}

.jishu {
  display: inline-block;
  background: hsla(0, 0%, 100%, 0.6);
  height: 12px;
  line-height: 12px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.8);
  padding: 0 2px;
}

.title {
  font-size: 14px;
  line-height: 14px;
  font-weight: lighter;
  color: #fff;
  font-weight: bold;
}
</style>
