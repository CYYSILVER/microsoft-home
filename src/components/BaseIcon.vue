<template>
  <div class="icon__wrapper" :style="{ width: width, height: height }">
    <slot class="icon__container">
      <img :src="src" />
    </slot>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: [String],
      default: ''
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  }
}
</script>

<style scoped></style>
