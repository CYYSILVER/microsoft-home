<template>
  <nav class="navbar__top">
    <div class="navbar__section logo">
      <div class="navbar__logo">
        <a href="/">
          <img class="navbar__logo--img" src="Logo.png" alt />
        </a>
      </div>
    </div>
    <!-- <div class="navbar__section list container-fluid">
      <ul class="navbar__items row">
        <li class="navbar__ele">
          <a>Office</a>
        </li>
        <li class="navbar__ele">
          <a>Windows</a>
        </li>
        <li class="navbar__ele">
          <a>Surface</a>
        </li>
        <li class="navbar__ele">
          <router-link to="/xbox">Xbox</router-link>
        </li>
        <li class="navbar__ele">
          <a>支持</a>
        </li>
      </ul>
    </div>-->
    <slot>
      <div class="navbar__section list">
        <ul class="navbar__items">
          <li>
            <a href=""><BaseButton class="navbar__ele" background="white" color="black" style="font-size: 13px;" fontWeight="normal">Office</BaseButton></a>
          </li>
          <li>
            <a href=""><BaseButton class="navbar__ele" background="white" color="black" style="font-size: 13px;" fontWeight="normal">Windows</BaseButton></a>
          </li>
          <li>
            <a href=""><BaseButton class="navbar__ele" background="white" color="black" style="font-size: 13px;" fontWeight="normal">Surface</BaseButton></a>
          </li>
          <li>
            <router-link to="xbox/">
              <BaseButton class="navbar__ele" background="white" color="black" style="font-size: 13px;" fontWeight="normal">Xbox</BaseButton>
            </router-link>
          </li>
          <li>
            <BaseButton class="navbar__ele" background="white" color="black" style="font-size: 13px;" fontWeight="normal">支持</BaseButton>
          </li>
        </ul>
      </div>
    </slot>
    <div class="navbar__section other">
      <div class="navbar__icon">
        <BaseButton class="navbar__ele" background="white" color="black" style="font-size: 13px;" fontWeight="normal" iconclass="fal fa-chevron-down">所有Microsoft</BaseButton>
      </div>
      <div class="navbar__icon">
        <span>搜索</span>
        <i class="fal fa-search"></i>
      </div>

      <div class="navbar__icon">
        <span>购物车</span>
        <i class="fal fa-shopping-cart"></i>
      </div>

      <div class="navbar__icon">
        <span>登录</span>
        <i class="fal fa-user-plus" id="login-logo"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.fal.fa-user-plus {
  text-align: center;
  color: #ccc;
  $l: 32px;
  box-sizing: border-box;
  // padding: 8px;
  width: $l;
  height: $l;
  line-height: $l;
  border: 1px solid #cccccc;
  border-radius: 50%;
  font-size: 15px;
}

.navbar__top {
  font-size: 13px;

  $height: 54px;
  height: $height;
  display: flex;

  a {
    text-decoration: none;
    color: #262626;
  }
  .navbar__logo {
    width: 137px;
    box-sizing: border-box;
    height: 100%;
    padding: 15px;
    img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
  }
  .navbar__section {
    flex: 0;
  }
  .list {
    flex: 1 1 auto;
  }
  .other {
    display: flex;
    > div {
      flex: 1;
      // display: flex;
    }
  }

  .navbar__items {
    height: 100%;
    list-style-type: none;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    li {
      border: 1px solid transparent;
    }
  }

  $padding-both: 8px;
  $padding-bottom: 10px;
  .navbar__ele {
    margin: 1px;
    box-sizing: border-box;
    // font-size: 20px;
    padding: 16px $padding-both $padding-bottom;
    height: 48px;
    position: relative;
    cursor: pointer;
    // text-decoration: underline;

    &:active {
      outline: 1px dashed black;
    }
  }
  .other {
    .navbar__icon {
      white-space: nowrap;
      margin: 1px;
      margin-left: 15px;
      display: flex;
      box-sizing: border-box;
      // font-size: 20px;
      padding: 16px $padding-both $padding-bottom;
      height: 48px;
      position: relative;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      span {
        // line-height: 1em;
        margin-right: 5px;
        position: relative;
      }

      &:hover span:after {
        position: absolute;
        content: '';
        display: block;
        left: 0;
        right: 0;
        bottom: -3px;
        height: 2px;
        background: #262626;
      }
    }
  }
}
</style>
