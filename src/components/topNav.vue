<template>
  <div>
    <div class="topNav">
      <div class="topLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao2"></use>
        </svg>
      </div>
      <div class="topCenter">
        <span class="navBtn">我的</span>
        <span class="navBtn active">发现</span>
        <span class="navBtn">运存</span>
        <span class="navBtn">视频</span>
      </div>
      <div class="topRight">
        <svg class="icon icon-search" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.topNav {
  width: 7.5rem;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  .topLeft {
    padding-top: 0.3rem;
  }
  .topRight {
    padding-top: 0.3rem;
  }
  .icon {
    width: 0.5rem;
    height: 0.5rem;
  }
  .icon-search {
    width: 0.45rem;
    height: 0.45rem;
  }
}
.topCenter {
  width: 4.5rem;
  display: flex;
  justify-content: space-around;
  .active {
    font-weight: 900;
  }
}
</style>
