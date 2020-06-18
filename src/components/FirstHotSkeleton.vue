<template>
  <div class="hot_container">
    <div class="tv-list-con">
      <div class="jishu"></div>
      <div class="title"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
.hot_container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;

  .tv-list-con {
    position: absolute;
    bottom: 15px;
    width: 100%;
    padding: 0 13px;
    box-sizing: border-box;
    left: 0;
  }
}

.jishu {
  display: inline-block;
  background-color: #d9e5ef;
  height: 16px;
  line-height: 16px;
  padding: 0 2px;
  width: 30%;
}

.title {
  height: 22px;
  margin-top: 5px;
  background-color: #d9e5ef;
  width: 50%;
}
</style>
