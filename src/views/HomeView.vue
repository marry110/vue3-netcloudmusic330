<template>
  <div class="home">
    <top-nav></top-nav>
    <carousel-com></carousel-com>
    <icon-list></icon-list>
    <music-list></music-list>
  </div>
</template>

<script>
// @ is an alias to /src

import topNav from '@/components/topNav.vue'
import CarouselCom from '@/components/CarouselCom.vue'
import IconList from '@/components/IconList.vue'
import MusicList from '@/components/MusicList.vue'
export default {
  name: 'HomeView',
  components: {
    topNav,
    IconList,
    CarouselCom,
    MusicList,
  },
}
</script>
<style scoped lang="scss">
.home {
  position: relative;
}
</style>
