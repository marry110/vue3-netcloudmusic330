<template>
  <div class="music-list">
    <div class="musiclist-top">
      <div class="title">发现好歌单</div>
      <div class="more">
        <van-button type="primary" class="btn">查看更多</van-button>
      </div>
    </div>
    <div class="mlist">
      <swiper
        :slidesPerView="3"
        :spaceBetween="10"
        :slidesPerGroup="3"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <!-- @click="goRouter" -->
        <!-- 使用这个也可以实现路由跳转 -->
        <swiper-slide v-for="(item, index) in state.musicdatalist" :key="index">
          <router-link :to="{ path: '/list', query: { id: item.id } }">
            <!-- // 设置在内部 外不起作用 -->
            <img :src="item.picUrl" :alt="item.name" />
            <div class="count">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-24gl-play"></use>
              </svg>
              {{ changeValues(item.playCount) }}
            </div>
            <div class="name">{{ item.name }}</div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { onMounted, reactive } from 'vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'
import { getMusicList } from '@/api/index'
// import { useRouter } from 'vue-router'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // const router = useRouter()

    // const goRouter = () => {
    //   router.push('/list')
    // }
    let state = reactive({ musicdatalist: [] })
    // async function getLimits() {
    //   data = await getMusicList(10)
    // }
    onMounted(async () => {
      // getLimits().then(() => {
      //   console.log('limits pic is ok', data)
      //   let limits = data.data.result
      //   console.log(limits)
      // })

      let result = await getMusicList()
      state.musicdatalist = result.data.result
      console.log(state.musicdatalist)
      console.log(result)
    })

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

    return {
      state,
      changeValues,
      // getLimits,
      modules: [Pagination, Navigation],
      // goRouter,
    }
  },
}
</script>

<style lang="scss" scoped>
.music-list {
  width: 7rem;
  // border: 1px solid red;
  margin-left: 0.2rem;
  .musiclist-top {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.1rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
      padding-left: 0.1rem;
    }
    .btn {
      width: 1.6rem;
      height: 0.5rem;
      border-radius: 0.5rem;
      font-size: 0.1rem;
      background-color: #ccc;
      border: none;
      color: #363c41;
    }
  }
  .mlist {
    position: relative;
    .swiper {
      text-align: center;
      width: 7rem;
      height: 3rem;
      // border: 1px solid red;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      // background: rgb(211, 179, 179);

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      border-radius: 0.2rem;
      height: 2.5rem;
      width: 2.5rem;
      flex-direction: column;
      position: relative;
    }

    .swiper-slide img {
      display: block;
      width: 2rem;
      height: 2rem;
      // border: 1px solid red;
      object-fit: cover;
      border-radius: 0.2rem;
    }
    .name {
      height: 0.6rem;
      width: 100%;
      font-size: 0.24rem;
      line-height: 0.4rem;
      height: 0.4rem;
      color: rgb(12, 11, 11);
      // display: inline-block;
      // border: 1px solid red;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
    }
    .count {
      position: absolute;
      right: 0.3rem;
      top: 0.3rem;
      font-size: 0.1rem;
      color: #ccc;
      display: flex;
      align-items: center;
      .icon {
        top: 0.32rem;
        left: 1.15rem;
        width: 0.2rem;
        height: 0.2rem;
        fill: #ccc;
      }
    }
  }
}
</style>
