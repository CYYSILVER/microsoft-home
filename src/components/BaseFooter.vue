<template>
  <div class="">
    <div class="row">
      <div v-for="(item, index) in data" :key="index" class="col-lg-2 col-sm-4 col-xs-12">
        <h4>{{ item.title }}</h4>
        <ul>
          <li v-for="(text, index) in item.content" :key="index">
            <a href>{{ text }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="bottom">
      <div class="left"><i class="fa fa-globe"></i>中文(中国)</div>
      <div class="right">
        <ul>
          <li>
            <a href>与 Microsoft 联系</a>
          </li>
          <li>
            <a href>隐私与 Cookie</a>
          </li>
          <li>
            <a href>使用条款</a>
          </li>
          <li>
            <a href>商标</a>
          </li>
          <li>
            <a href>关于我们的广告</a>
          </li>
          <li>
            <a href>京ICP备09042378号-6</a>
          </li>
          <li>
            <a href>京公网安备 11010802023178</a>
          </li>
          <li>
            <a>© Microsoft 2019</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [
          {
            title: '新增内容',
            content: 'Surface Pro 6,Surface Laptop 2,Surface Go,Xbox One X,Xbox One S,Windows 10 应用程序'.split(',')
          },
          {
            title: 'Microsoft Store',
            content: '帐户个人资料,下载中心,订单跟踪'.split(',')
          },
          {
            title: '教育',
            content: 'Microsoft 教育领域,适合学生的 Office,适用于学校的 Office 365,Microsoft Azure 教育领域'.split(',')
          },
          {
            title: '企业',
            content: 'Azure,AppSource,汽车,政府机构,医疗保健,制造业,金融服务,零售业'.split(',')
          },
          {
            title: '开发人员',
            content: 'Microsoft Visual Studio,Windows 开发人员中心,开发人员网络,TechNet,Microsoft 开发人员计划,第9频道,Office 开发人员中心'.split(',')
          },
          {
            title: '公司',
            content: '招贤纳士,关于,Microsoft,公司新闻,Microsoft,隐私,投资人,安全性'.split(',')
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.row div {
  h4 {
    margin: 0;
    font-weight: bold;
    font-size: 15px;
    color: #616161;
    padding: 36px 0 4px;
  }
  ul {
    list-style: none;
    li {
      font-size: 14px;
      padding: 8px 0;
    }
    a {
      color: #616161;
    }
  }
  flex-direction: column;
}

.bottom {
  padding: 30px 0 16px;
  display: flex;
  .left {
    flex: 110px;
  }
  .right {
    flex: 1;

    ul {
      list-style: none;
      display: flex;
      a {
        padding-right: 24px;
        color: #616161;
        font-size: 12px;
        white-space: nowrap;
      }
    }
  }
}
</style>
