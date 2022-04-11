<template>
  <div>
    <div class="listTop">
      <img :src="listData.coverImgUrl" class="bg" />
      <div class="topNav">
        <div class="back">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrowLeft"></use>
          </svg>
          <div class="title">歌单</div>
        </div>
        <div class="right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sangedian1"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="contentleft">
        <img :src="listData.coverImgUrl" alt="" />
        <span>{{ changeValues(list.playCount) }}</span>
      </div>
      <div class="contentRight">
        <h3>{{ listData.name }}</h3>
        <div class="author">
          <img :src="listData.creater" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  props: {
    msg: Object,
  },
  setup(props) {
    // let $list = inject('list')
    // console.log($list)
    // const state = reactive({
    //   listData: inject('list'),
    // })

    const listData = ref(props.msg.list)

    onMounted(() => {})
    function changeValues(num) {
      let res = 0
      if (num >= 100000000) {
        res = num / 10000000
        res = res.toFixed(2) + '亿'
      } else if (num > 10000) {
        res = num / 10000000
        res = res.toFixed(2) + '万'
      }
      return res
    }
    return { changeValues, listData }
  },
}
</script>

<style lang="scss" scoped>
.listTop {
  width: 7.5rem;
  padding: 0 0.1rem;
  height: 6rem;
  border: 1px solid red;
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: auto;
    z-index: -1;
    filter: blur(20px);
  }
  .topNav {
    display: flex;
    justify-content: space-between;
    height: 0.8rem;
    align-items: center;
    font-size: 0.26rem;
    border: 1px solid red;
    .icon {
      width: 0.4rem;
      height: 0.4rem;
      // color: #fff;
    }
  }
  .back,
  .right {
    display: flex;
    justify-content: space-between;
  }
}
.content {
  border: 1px solid green;
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
  .contentleft {
    border: 1px solid green;
    position: relative;
    img {
      widows: 2.5rem;
      height: 2.5rem;
      border-radius: 0.1rem;
    }
    span {
      position: absolute;
      right: 0.1rem;
      top: 0.1rem;
      font-size: 0.24rem;
      color: #ccc;
      display: flex;
      align-items: center;
      .icon {
        fill: #ccc;
      }
    }
  }
  .contentRight {
    border: 1px solid green;
    width: 2.5rem;
  }
}
</style>
