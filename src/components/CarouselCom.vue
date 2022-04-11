<template>
  <div class="">
    <!-- <div class="swipe1">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div> -->
    <div class="swipe2" id="swiperIndex">
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :loopFillGroupWithBlank="true"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in state.Banners" :key="index">
          <img :src="item.pic" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { onMounted, reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination } from 'swiper'
import { getBanners } from '@/api/index'

export default {
  data() {
    return {
      result: [],
      results: [],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let state = reactive({ Banners: [] })
    // let data = reactive({})
    // let result = reactive({})

    // let api = 'http://localhost:3000/banner?type=1'
    // let api = `http://localhost:3000/banner?type=1`
    // axios.get(api).then((data) => {
    //   console.log(data)
    //   let results = data.data.banners
    //   console.log(results)
    // })

    // let bannersImg = reactive({})
    // const state = reactive({
    //   BannerImgData: [],
    //   banners: [],
    // })

    // getBanners = async () => {
    //   BannerImgData = await axios
    //     .get('http://localhost:3000/banner?type=1')
    //     .then(() => {
    //       console.log(bannerImgData)
    //     })
    // }

    // async function getImgs() {
    //   state.Banners = await getBanners(1)
    // }
    onMounted(async () => {
      // vue2 写法
      // axios.get('http://localhost:3000/banner?type=1').then((res) => {
      //   console.log(res)
      // })

      // getImgs().then(() => {
      //   console.log('banner pic is ok', data)
      //   state.Banners = data.data.banners
      //   console.log(result)
      // })

      let result = await getBanners(2)
      state.Banners = result.data.banners
      console.log(state.Banners)
      console.log(result)
    })
    return {
      state,
      // imgs,
      // getImgs,
      // bannersImg,
      // data,
      // result,
      // ...toRefs(state),
      modules: [Autoplay, Pagination],
    }
  },
}
</script>
<style scoped lang="scss">
// .my-swipe .van-swipe-item {
//   color: #fff;
//   font-size: 20px;
//   line-height: 150px;
//   text-align: center;
//   background-color: #39a9ed;
// }
// .swipe2 {
//   width: 7.5rem;
//   height: 4.5rem;
//   border: 1px solid #39a9ed;
// }
.swipe2 {
  .swiper {
    width: 7rem;
    height: 3rem;
    border-radius: 0.1rem;
    // border: 1px solid red;
  }
  #swiperIndex .swiper-pagination-bullet-active {
    background-color: pink;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

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
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
