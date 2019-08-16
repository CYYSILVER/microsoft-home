<template>
  <div class="carousel">
    <div class="carousel__container">
      <img :src="itemSrc" alt />
    </div>
    <template v-if="control && items && items.length > 1">
      <div class="carousel__control">
        <button class="carousel__arrow --left" @click="prevPhoto">
          <i class="fal fa-chevron-left"></i>
        </button>
        <button class="carousel__arrow --right" @click="nextPhoto">
          <i class="fal fa-chevron-right"></i>
        </button>
        <div class="carousel__indicator">
          <template v-for="(item, i) in items">
            <div :key="i" style="display: inline-block;">
              <button class="carousel__radio" :class="[i == index ? radioStyle : null]" :data-n="i" @click="getPhoto"></button>
            </div>
          </template>

          <button @click="toggle">
            <i :class="'fal fa-' + (isPlaying ? 'pause' : 'play')"></i>
          </button>
        </div>
      </div>
    </template>
    <template v-if="itemBtn">
      <div class="carousel__text" :style="{ top: itemPosT, color: itemFontColor ? itemFontColor : itemBtn.background, left: itemPosL, right: itemPosR, bottom: itemPosB }">
        <h1>
          <slot name="h1">{{ itemH1 }}</slot>
        </h1>
        <p>
          <slot name="p">{{ itemP }}</slot>
        </p>
        <slot name="button">
          <BaseButton :iconclass="itemBtn.iconclass" class="button" :background="itemBtn.background" :color="itemBtn.color">
            <slot>{{ itemBtn.text }}</slot>
          </BaseButton>
        </slot>
      </div>
    </template>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import { setTimeout, clearTimeout } from 'timers'

function debounce(callback, delay) {
  let timer = null
  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.call(this, ...arguments)
    }, delay)
  }
}
export default {
  props: {
    control: {
      type: Boolean,
      default: true
    },
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    BaseButton
  },
  data() {
    return {
      index: 0,
      isPlaying: false,
      timer: null,
      delay: 4000,
      radioStyle: {
        '--highlight': true
      }
    }
  },
  computed: {
    itemSrc() {
      let { index, items } = this
      return items[index] && items[index].src
    },
    getItem() {
      let { index, items } = this
      return items[index]
    },
    itemH1() {
      let { index, items } = this
      return items[index] && items[index].h1
    },
    itemP() {
      let { index, items } = this
      return items[index] && items[index].p
    },
    itemBtn() {
      let { index, items } = this
      let a = items[index] && items[index].btn

      return items[index] && items[index].btn
    },
    itemPosT() {
      let { index, items } = this
      return items[index] && items[index].top
    },
    itemPosL() {
      let { index, items } = this
      return items[index] && items[index].left
    },
    itemPosR() {
      let { index, items } = this
      return items[index] && items[index].right
    },
    itemPosB() {
      let { index, items } = this
      return items[index] && items[index].bottom
    },
    itemNumber() {
      return this.items.length
    },
    itemFontColor() {
      return this.items[this.index].fontColor
    }
  },
  created() {
    if (this.items.length != 0) {
      this.loopForward(this.delay)
    }
  },
  methods: {
    isHighlight(index) {
      index == this.index ? true : false
    },
    loopForward(delay) {
      this.isPlaying = true
      this.timer = setInterval(() => {
        this.index++
      }, delay)
    },
    prevPhoto(event) {
      clearInterval(this.timer)
      this.index--
      this.loopForward(this.delay)
    },
    nextPhoto(event) {
      clearInterval(this.timer)
      this.index++
      this.loopForward(this.delay)
    },
    getPhoto(event) {
      clearInterval(this.timer)
      this.index = event.target.dataset.n
      this.loopForward(this.delay)
    },
    toggle(event) {
      if (this.isPlaying) {
        clearInterval(this.timer)
        this.isPlaying = false
      } else {
        this.loopForward(this.delay)
      }
    }
  },
  watch: {
    index: function(val) {
      let { itemNumber } = this
      if (val < 0) {
        this.index = itemNumber - 1
      }
      if (val >= itemNumber) {
        this.index = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  overflow: hidden;
  width: 100%;
  padding-bottom: 37%;
  position: relative;
  // cursor: pointer;

  &:hover {
    .carousel__control {
      opacity: 1;
    }
  }
}
.carousel__text {
  color: white;
  position: absolute;
  max-width: 520px;
  top: 50%;
  transform: translateY(-50%);
  // left: 85px;
  h1 {
    font-size: 46px;
  }
  p {
    margin-top: 12px;
  }
  .button {
    margin-top: 24px;
  }
}

.carousel__container {
  position: absolute;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.carousel__control {
  transition: 0.5s;
  opacity: 0;
  %button {
    border: none;
    background: #ffffff86;
    outline: none;
    color: black;
    text-align: center;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      color: #222;
      background: #ffffff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
    }
    &:hover.carousel__radio {
      border-radius: 0;
      border: 3px solid white;
    }
  }
  .carousel__arrow {
    position: absolute;
    width: 42px;
    height: 42px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    @extend %button;
    cursor: pointer;
    &.--left {
      left: 0;
    }
    &.--right {
      right: 0;
    }
  }
  .carousel__indicator {
    $height: 41px;
    position: absolute;
    border-radius: 50%;
    bottom: 15px;
    height: $height;
    width: 100%;
    text-align: center;

    .carousel__radio {
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 0 6px;
      &.--highlight {
        border-radius: 0;
        border: 3px solid white;
        background: #ffffff;
      }
    }

    button {
      @extend %button;
      text-align: center;
      margin: 0 10px;
      vertical-align: middle;
      width: $height;
      height: $height;
      color: rgb(145, 145, 145);
      background: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
