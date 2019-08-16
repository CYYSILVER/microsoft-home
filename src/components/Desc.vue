<template>
  <div class="product" :style="{ width: width, height: height }">
    <h3 :style="{ fontSize: sizeh3 }">
      <slot>与 Xbox One 一起跨越时代</slot>
    </h3>
    <p :style="{ fontSize: sizep3 }">
      <slot name="content">通吃新老 1300 多款</slot>
    </p>
    <BaseButton :background="buttonBackground" :color="buttonColor" style="padding-left:0" iconclass="fal fa-chevron-right">
      <slot name="button">了解详细信息</slot>
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'
export default {
  componnets: {
    BaseButton
  },
  props: {
    sizeh3: String,
    sizep3: String,
    imgSrc: {
      type: String,
      default: 'https://dummyimage.com/355x200.png?text=Place%20Img%20Here'
    },
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: 'auto'
    },
    buttonColor: {
      type: String,
      default: '#008000'
    },
    buttonBackground: {
      type: String,
      default: 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  display: inline-block;

  p {
    margin: 0;
  }

  h3 {
    font-size: 20px;
  }
}
</style>
