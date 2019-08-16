<template>
  <div class="product" :style="{ width: width, height: height }">
    <div class="product__img">
      <img :src="imgSrc" alt />
    </div>
    <h3 :style="{ fontSize: sizeh3 }">
      <slot>Lorem ipsum</slot>
    </h3>
    <p :style="{ fontSize: sizep3 }">
      <slot name="content">Lorem ipsum dolor</slot>
    </p>
    <BaseButton :background="buttonBackground" :color="buttonColor" style="padding-left:0" iconclass="fal fa-chevron-right">
      <slot name="button">立即购买</slot>
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
      default: '#0067b8'
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
  .product__img {
    width: 100%;
    height: auto;
    object-fit: cover;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h3 {
    margin-top: 37px;
    font-size: 20px;
  }
}
</style>
