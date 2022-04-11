<template>
  <div>
    <div class="iconList">
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-songlist-01"></use>
        </svg>
        <span>每日歌单</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-tupianyihuifu-15"></use>
        </svg>
        <span>私人FM</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-diantai1"></use>
        </svg>
        <span>歌单</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paihangbang1"></use>
        </svg>
        <span>排行榜</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhibo"></use>
        </svg>
        <span>直播</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-diantaishezhi"></use>
        </svg>
        <span>电台</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.iconList {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  .iconItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      height: 0.8rem;
      width: 0.8rem;
    }
    span {
      padding-top: 0.1rem;
      font-size: 0.26rem;
    }
  }
}
.iconList div {
  justify-content: space-around;
}
</style>
