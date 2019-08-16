<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

[debug],
[debug] * {
  outline: 1px dashed skyblue;
}

#app {
  font-family: 'Segoe UI', SegoeUI, 'Microsoft YaHei', 微软雅黑, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.width-lg {
  padding: 0 10%;
}

@media (max-width: 1440px) {
  .width-lg {
    padding: 0 5%;
  }
}
</style>
