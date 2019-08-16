<script>
export default {
  data() {
    return {
      products1: [
        {
          title: 'Surface Book2',
          sub: '性能巨匠',
          btn: '立即购买',
          src: 'RWfbJT.webp'
        },
        {
          title: 'Surface Laptop 2',
          sub: '略显不凡',
          btn: '立即购买',
          src: 'RE2FHD0.webp'
        },
        {
          title: 'Xbox One X',
          sub: '真4k 60帧超高清游戏机',
          btn: '立即购买',
          src: 'RW9wPJ.webp'
        },
        {
          title: 'Windows 电脑',
          sub: '通过新一代电脑亲身体验 Windows 的非凡魅力。',
          btn: '立即购买',
          src: 'RE1zhwB.webp'
        }
      ],
      products2: [
        {
          title: 'Windows 10 企业版',
          sub: '下载适用于 IT 专业人士的 90 天免费评估版。',
          btn: '立即下载',
          src: 'RE1CmIw.webp'
        },
        {
          title: 'Office 365 商业版',
          sub: '无论联机或脱机，均可随时随地访问你的文件。',
          btn: '立即购买 ',
          src: 'RE2mheW.webp'
        },
        {
          title: '全新发布微软HoloLens 2',
          sub: '混合现实商用就绪',
          btn: '探索HOLOLENS',
          src: 'RWtCGG.webp'
        },
        {
          title: 'Microsoft Azure',
          sub: '脱离服务器的束缚 - 无需管理基础结构即可更快地构建应用。',
          btn: '了解更多',
          src: 'RE1LJdE.webp'
        }
      ],
      carouse1: [
        {
          src: 'carousel/01.png',
          h1: '属于你的 365 来了',
          p: '每天使用 Office 365，了解它能实现哪些功能',
          top: '30%',
          left: '85px',
          btn: {
            color: 'white',
            background: 'black',
            text: '立即购买',
            iconclass: 'fal fa-chevron-right'
          }
        },
        {
          src: 'carousel/02.png',
          h1: 'Surface Pro 6',
          p: '百变，耀出众',
          top: '50%',
          left: '85px',
          btn: {
            color: 'black',
            background: 'white',
            text: '立即购买',
            iconclass: 'fal fa-chevron-right'
          }
        }
      ],
      carouse2: [
        {
          src: 'carousel/05.png',
          h1: 'Xbox One S',
          p: '物超所值的游戏和娱乐设备，内置 4K 超高清蓝光和 4K 视频流',
          top: '30%',
          left: '85px',
          btn: {
            color: 'white',
            background: 'black',
            text: '立即购买',
            iconclass: 'fal fa-chevron-right'
          }
        }
      ],
      carouse3: [
        {
          src: 'carousel/03.png',
          h1: 'Modern Desktop 现代云桌面',
          p: '开启最 In 工作模式',
          top: '50%',
          left: '85px',
          btn: {
            color: 'white',
            background: 'black',
            text: '了解更多',
            iconclass: 'fal fa-chevron-right'
          }
        },
        {
          src: 'carousel/04.png',
          h1: '微软中国 Events hub',
          p: '了解更多微软中国市场活动',
          top: '50%',
          left: '85px',
          btn: {
            color: 'white',
            background: 'black',
            text: '了解更多',
            iconclass: 'fal fa-chevron-right'
          }
        }
      ]
    }
  },
  methods: {
    src(product) {
      return `home/${product.src}`
    }
  }
}
</script>

<style lang="scss" scoped>
// .col-lg-3:first-child {
//   padding-left: 0;
// }

.products {
  margin: 50px 0;
}
</style>
<template>
  <div>
    <div class="width-lg">
      <BaseHeader />
      <BaseCarousel :items="carouse1" />
      <div class="products">
        <div class="row">
          <BaseProduct class="col-lg-3 mx-auto" v-for="(product, index) in products1" :key="index" :imgSrc="src(product)">
            <template>{{ product.title }}</template>
            <template v-slot:content>{{ product.sub }}</template>
            <template v-slot:button>{{ product.btn }}</template>
          </BaseProduct>
        </div>
      </div>
      <BaseCarousel :items="carouse2" />
      <div class="products">
        <div class="row">
          <BaseProduct class="col-lg-3 mx-auto" v-for="(product, index) in products2" :key="index" :imgSrc="src(product)">
            <template>{{ product.title }}</template>
            <template v-slot:content>{{ product.sub }}</template>
            <template v-slot:button>{{ product.btn }}</template>
          </BaseProduct>
        </div>
      </div>
      <BaseCarousel :items="carouse3" />
      <BaseFollow style="margin-top:48px;" />
    </div>
    <BaseFooter class="width-lg" style="margin-top:48px; background: rgb(242, 242, 242)"></BaseFooter>
  </div>
</template>
