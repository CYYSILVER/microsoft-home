<template>
  <div class="follow">
    <p class="px-2">关注 Microsoft</p>
    <img class="px-2" src="/weixin.png" alt="" />
    <img class="px-2" src="/weibo.png" alt="" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.follow {
  display: flex;
  justify-content: flex-start;

  img {
    box-sizing: content-box;
    width: 28px;
    height: 28px;
  }
}
</style>
