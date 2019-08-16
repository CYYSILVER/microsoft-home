<template>
  <div class>
    <BaseHeader class="width-lg">
      <div class="navbar__section list">
        <ul class="navbar__items">
          <li>
            <BaseButton class="navbar__ele" background="white" color="black" style="font-size: 13px;" fontWeight="normal" iconclass="fal fa-chevron-down">社区</BaseButton>
          </li>
          <li>
            <BaseButton class="navbar__ele" background="white" color="black" style="font-size: 13px;" fontWeight="normal" iconclass="fal fa-chevron-down">游戏</BaseButton>
          </li>
          <li>
            <BaseButton class="navbar__ele" background="white" color="black" style="font-size: 13px;" fontWeight="normal" iconclass="fal fa-chevron-down">在Windows上游戏</BaseButton>
          </li>
          <li>
            <BaseButton class="navbar__ele" background="white" color="black" style="font-size: 13px;" fontWeight="normal" iconclass="fal fa-chevron-down">娱乐</BaseButton>
          </li>
          <li>
            <BaseButton class="navbar__ele" background="white" color="black" style="font-size: 13px;" fontWeight="normal" iconclass="fal fa-chevron-down">Xbox支持</BaseButton>
          </li>
        </ul>
      </div>
    </BaseHeader>
    <BaseCarousel :items="items"></BaseCarousel>

    <div class="container">
      <div class="row justify-content-center logos">
        <div class="col-lg-1 col-sm-3">
          <img src="svg/logo01 (1).svg" alt />
          <a href="李珂睿/复制 firstone.html">主机</a>
        </div>
        <div class="col-lg-1 col-sm-3">
          <img src="svg/logo01 (6).svg" alt />
          <a href="苟佳力/xbox game.html">XBox Game</a>
        </div>
        <div class="col-lg-1 col-sm-3">
          <img src="svg/logo01 (7).svg" alt />
          <a href="李珂睿/firstone.html">配件</a>
        </div>
        <div class="col-lg-1 col-sm-3">
          <img src="svg/logo01 (8).svg" alt />
          <a href="苟佳力/Xbox Live.html">Xbox Live</a>
        </div>
        <div class="col-lg-1 col-sm-3">
          <img src="svg/logo01 (9).svg" alt />
          <p>登录</p>
        </div>
      </div>
    </div>

    <div class="gallery">
      <ul class="row">
        <li class="lt col-xs-12 col-sm-12 col-lg-6 px-0"><img src="/xbox/lt.jpg" alt="" /></li>
        <li class="rt col-xs-12 col-sm-12 col-lg-6 px-0">
          <div class="gallery__center">
            <div>
              <h3 style="font-weight: 100; font-size:34px">
                Bleeding Edge 融入组队战斗玩法。
              </h3>
              <p style="">
                <slot name="content"></slot>
              </p>
              <BaseButton background="none" color="rgb(0, 128, 0)" style="padding-left:0" iconclass="fal fa-chevron-right">
                <slot name="button">了解详情</slot>
              </BaseButton>
            </div>
          </div>
          <div><img src="/xbox/rt.png" alt="" /></div>
        </li>
        <li class="lb col-xs-12 col-sm-12 col-lg-6 px-0">
          <div><img src="/xbox/lb.jpg" alt="" /></div>
          <div class="gallery__center">
            <div>
              <h3 style="font-weight: 100; font-size:34px">
                Minecraft 创作者制作的一款全新游戏
              </h3>
              <BaseButton background="none" color="rgb(0, 128, 0)" style="padding-left:0" iconclass="fal fa-chevron-right">
                <slot name="button">了解详细信息</slot>
              </BaseButton>
            </div>
          </div>
        </li>
        <li class="rb col-xs-12 col-sm-12 col-lg-6 px-0"><img src="/xbox/rb.jpg" alt="" /></li>
      </ul>
    </div>
    <div class="row mx-2">
      <div class="col-lg-7"><img src="/xbox/century.jpg" alt="" style="width: 100%" /></div>
      <div class="col-lg-5 d-flex flex-column justify-content-center ">
        <h3 style="font-size: 46px; font-weight: 100;">
          与 Xbox One 一起跨越时代
        </h3>
        <p style="padding: 25px 0 3px; margin-bottom: 0;">
          通吃新老 1300 多款出色游戏的主机Xbox One S 和 Xbox One X 为 4K 画面而生。
        </p>
        <BaseButton background="none" color="rgb(0, 128, 0)" style="padding-left:0" iconclass="fal fa-chevron-right">
          <slot name="button">了解详细信息</slot>
        </BaseButton>
      </div>
    </div>
    <div class="row mx-2">
      <div class="col-lg-6 col-sm-12" style=" position: relative">
        <img src="/xbox/cold.jpg" alt="" style="object-fit:cover; width: 100%;" />
        <div class="px-5" style="position: absolute; bottom: 25px;">
          <h3 style="font-size: 46px; font-weight: 100; margin-bottom: 0; color: white">
            这是发生在科罗拉多的一场冷战
          </h3>
          <p style="padding: 25px 0 3px;  margin-bottom: 0;"></p>
          <BaseButton background="none" color="white" style="padding-left:0" iconclass="fal fa-chevron-right">
            <slot name="button">了解详细信息</slot>
          </BaseButton>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12" style=" position: relative">
        <img src="/xbox/controller.jpg" alt="" style="object-fit:cover; width: 100%;" />
        <div class="px-5" style="position: absolute; bottom: 25px;">
          <h3 style="font-size: 46px; font-weight: 100; margin-bottom: 0; color: black">
            经典游戏利器
          </h3>
          <p style="padding: 25px 0 3px;  margin-bottom: 0;">从此更进一步 Xbox 配件 微软巨献</p>
          <BaseButton background="none" color="#008000" style="padding-left:0" iconclass="fal fa-chevron-right">
            <slot name="button">立即购买</slot>
          </BaseButton>
        </div>
      </div>
    </div>
    <div id="ContentBlockList_4" class="legal-bottom">
      <div class="container">
        <div class="col-12 pad-12x ">
          <p class="c-caption-1"><i>* 以上所提及各项游戏特性和配置要求仍在开发中，发售前或有所改变。实际发售的游戏受限于中国法律所要求的审批。</i></p>
          <p class="c-caption-1"><i>- 游戏初始下载至主机需要 Xbox Live 及宽带网络。</i></p>
          <p class="c-caption-1"><i>- 需特定应用程序进行 4K 视频流传输，请参阅 Xbox.com。某些应用程序需要向内容提供商进行额外订阅和／或有其它要求，请参阅 xbox.com/live。</i></p>
          <p class="c-caption-1"><i>- HDR 高动态范围功能仅限支持的游戏与电视可使用。</i></p>
        </div>
      </div>
    </div>
    <div class="width-lg" style="background: rgb(242, 242, 242)"><BaseFooter :data="data" /></div>

    <!-- <BaseCarousel :control="false"></BaseCarousel>
    <BaseCarousel :control="false" :imgs="['/xbox/xbox1.jpg']" class="col-6"></BaseCarousel>
    <BaseCarousel :control="false" :imgs="['/xbox/xbox1.jpg']" class="col-6"></BaseCarousel> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: '',
          content: 'Xbox,支援,光敏感性癲癇症警告,管理办法,第三方商标使用的免责声明'.split(',')
        },
        {
          title: '',
          content: '面向开发者,ID@Xbox,Windows 10'.split(',')
        }
      ],
      items: [
        {
          src: '/xbox/01.jpg',
          h1: '士官长将在光环Infinite中回归',
          right: '85px',
          // top: '2px',
          // left: '0',
          btn: {
            background: 'rgb(16, 124, 16)',
            color: 'white',
            text: '了解详情'
          },
          fontColor: 'white'
        },
        {
          src: '/xbox/02.jpg',
          h1: '选择你的伟大之路',
          p: '帝国时代 II：决定版庆祝有史以来最受欢迎的策略游戏之一诞生 20 周年。',
          right: '85px',
          btn: {
            background: 'rgb(16, 124, 16)',
            color: 'white',
            text: '了解详情'
          },
          fontColor: 'white'
        },
        {
          src: '/xbox/03.jpg',
          h1: '开启史诗般的壮丽旅程',
          p: '在这里欣赏绚丽无边的美景，探索神秘莫测的秘境，发现雄伟壮丽的地标',
          left: '85px',
          btn: {
            background: 'rgb(16, 124, 16)',
            color: 'white',
            text: '了解详情'
          },
          fontColor: 'white'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.legal-bottom {
  margin-top: 10px;
  color: #fff;
  background: #000;
  padding: 42px 0;
  .c-caption-1 {
    color: white;
    font-size: 13px;
    line-height: 16px;
  }
}
.logos {
  margin: 28px 0 35px;

  .col-lg-1 {
    box-sizing: content-box;
    padding-right: 50px;
    text-align: center;
    color: #107c10;
    font-size: 12px;
    text-decoration: underline;
    img {
      width: 72px;
    }
    a {
      color: #107c10;
      text-decoration: none;
      display: block;
      width: 100%;
    }
  }
}

.gallery {
  margin: 0px 9px;
  ul {
    list-style-type: none;
    margin: 0;
    &::after {
      display: block;
      content: '';
      clear: both;
    }
  }

  .gallery__center {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3vw;
  }

  .lt,
  .rt,
  .lb,
  .rb {
    // width: 50%;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .lb,
  .rt {
    display: flex;
    height: 28vw;

    > div {
      flex: 1;
    }
  }
  .rb,
  .lt {
    height: 56vw;
  }
  .rb {
    margin-top: -28vw;
  }
  @media (max-width: 992px) {
    .rb {
      margin-top: 0;
      order: 1;
    }
  }
}
</style>
