<template>
  <div class="home__container">
    <div class="h1000"></div>
    <ul class="tv-list">
      <li class="big">
        <vue-lazy-component class="custom-transition">
          <FirstHot />
          <FirstHotSkeleton slot="skeleton" />
        </vue-lazy-component>
      </li>
      <li v-for="item in list1"
        :key="item.url">
        <vue-lazy-component class="custom-transition">
          <OtherBox :tvData="item"></OtherBox>
          <OtherBoxSkeleton slot="skeleton"></OtherBoxSkeleton>
        </vue-lazy-component>
      </li>
    </ul>
    <ul class="tv-list">
      <li class="big">
        <vue-lazy-component class="custom-transition">
          <FirstHot />
          <FirstHotSkeleton slot="skeleton" />
        </vue-lazy-component>
      </li>
      <li v-for="item in list1"
        :key="item.url">
        <vue-lazy-component class="custom-transition">
          <OtherBox :tvData="item"></OtherBox>
          <OtherBoxSkeleton slot="skeleton"></OtherBoxSkeleton>
        </vue-lazy-component>
      </li>
    </ul>
    <ul class="tv-list">
      <li class="big">
        <vue-lazy-component class="custom-transition">
          <FirstHot />
          <FirstHotSkeleton slot="skeleton" />
        </vue-lazy-component>
      </li>
      <li v-for="item in list1"
        :key="item.url">
        <vue-lazy-component class="custom-transition">
          <OtherBox :tvData="item"></OtherBox>
          <OtherBoxSkeleton slot="skeleton"></OtherBoxSkeleton>
        </vue-lazy-component>
      </li>
    </ul>
    <ul class="tv-list">
      <li class="big">
        <vue-lazy-component class="custom-transition">
          <FirstHot />
          <FirstHotSkeleton slot="skeleton" />
        </vue-lazy-component>
      </li>
      <li v-for="item in list1"
        :key="item.url">
        <vue-lazy-component class="custom-transition">
          <OtherBox :tvData="item"></OtherBox>
          <OtherBoxSkeleton slot="skeleton"></OtherBoxSkeleton>
        </vue-lazy-component>
      </li>
    </ul>
  </div>
</template>

<script>
import FirstHot from '../components/FirstHot'
import FirstHotSkeleton from '../components/FirstHotSkeleton'
import OtherBox from '../components/OtherBox'
import OtherBoxSkeleton from '../components/OtherBoxSkeleton'
export default {
  name: 'Home',
  components: {
    FirstHot,
    FirstHotSkeleton,
    OtherBox,
    OtherBoxSkeleton
  },
  data() {
    return {
      list1: [
        /*  {
          url: 'http://photocdn.sohu.com/20161221/vrsa_hor9271114.jpg',
          title: '隔离死城第1季第13集',
          updateTo: 13
        }, */
        {
          url:
            'http://photocdn.sohu.com/20161111/vrsa_hor_1478837546216_9229258.jpg',
          title: '破产姐妹第5季第13集',
          updateTo: 11
        },
        {
          url:
            'http://photocdn.sohu.com/20170310/vrsa_hor_1489115711827_9281609.jpg',
          title: '胡妮搜索第1季第13集',
          updateTo: 11
        },
        {
          url: 'http://photocdn.sohu.com/20170310/vrsa_hor9313039.jpg',
          title: '隔离死城第1季第13集',
          updateTo: 13
        },
        {
          url: 'http://photocdn.sohu.com/20170117/vrsa_hor9291436.jpg',
          title: '亿万富文第1季第13集',
          updateTo: 22
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.h1000 {
  height: 1000px;
  background-image: linear-gradient(#e66465, #9198e5);
}

.tv-list {
  margin-left: -12px;

  li {
    float: left;
    margin: 0 0 12px 12px;
    overflow: hidden;
    position: relative;
    width: 190px;
    height: 139px;

    > div {
      height: 100%;
    }
  }

  li.big {
    width: 392px;
    height: 290px;
  }
}
</style>
