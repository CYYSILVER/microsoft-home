<template>
  <div class="button" :style="{ background }">
    <a class="text" :href="link" :style="{ color, fontWeight }">
      <slot>了解详情</slot>
      <span :style="{ background: color }"></span>
    </a>
    <slot name="icon">
      <span class="icon"><i :style="{ color }" :class="iconclass"></i></span>
    </slot>
  </div>
</template>

<script>
export default {
  props: ['link', 'color', 'background', 'iconclass', 'fontWeight']
}
</script>

<style lang="scss" scoped>
%textUnderline {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background: black;
}
.button {
  box-sizing: border-box;
  vertical-align: middle;
  position: relative;
  padding: 10px 22px 10px 24px;
  display: inline-block;
  font-size: 15px;
  background: black;
  color: white;

  cursor: pointer;
  .text {
    display: inline-block;
    text-decoration: none;
    margin-right: 8px;
    position: relative;
    transition: 0.2s;
    right: 0;
    font-weight: bold;
    span {
      transition: 0.2s;
      @extend %textUnderline;
      opacity: 0;
    }
  }

  .icon {
    display: inline-block;
    transition: 0.2s;
    position: relative;
    left: 0px;
  }
  &:hover .icon {
    left: 5px;
  }
  &:hover .text {
    right: 2px;
  }
  &:hover .text span {
    @extend %textUnderline;
    opacity: 1;
  }
}
</style>
