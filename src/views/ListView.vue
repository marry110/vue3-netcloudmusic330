<template>
  <div class="list">
    <list-top :msg="list"> </list-top>
    <div v-for="(item, index) in list" :key="index">
      <img :src="item.coverImgUrl" alt="" />
    </div>
    <img :src="list.coverImgUrl" alt="" />
    <span>{{ list.name }}</span>
  </div>
</template>

<script>
import { getPlayListDetail } from '@/api/index'
import { reactive, onMounted, provide, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import ListTop from '@/components/ListTop.vue'
export default {
  components: {
    ListTop,
  },
  setup() {
    const route = useRoute()
    const state = reactive({ list: '' })
    const getListData = async () => {
      const res = await getPlayListDetail(route.query.id)
      console.log(route.query.id)
      state.list = res.data.list
      console.log(res.data.list)
      console.log(state.list)
    }
    onMounted(async () => {
      getListData()
      // let id = route.query.id
      // let result = await getPlayListDetail(id)
      // state.list = result.data.list

      // console.log(result)
      // console.log(state.list)

      // console.log(route.query.id)
      // console.log(id)
    })
    provide('list', state.list)
    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss" scoped>
.list {
  border: 1px solid black;
  img {
    width: 0.4rem;
    height: 0.4rem;
  }
}
</style>
