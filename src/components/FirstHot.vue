<template>
  <div class="hot_container">
    <img src="http://photocdn.sohu.com/20161221/vrsa_hor9271114.jpg" alt />
    <div class="tv-list-con">
      <div class="jishu">更新到14集</div>
      <div class="title">我也不知道叫什么第一季第1集</div>
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

  .tv-list-con {
    position: absolute;
    bottom: 15px;
    width: 100%;
    padding: 0 13px;
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
  height: 16px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.8);
  padding: 0 2px;
}

.title {
  font-size: 22px;
  line-height: 32px;
  font-weight: lighter;
  color: #fff;
}
</style>
