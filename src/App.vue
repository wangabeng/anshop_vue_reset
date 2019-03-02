<template>
  <div id="app">
    <router-view></router-view>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MFooter from 'base/m-footer/m-footer.vue'
import sexb  from 'common/js/test.js'

export default {
  name: 'App',
  components: {
    MFooter,
  },
  watch: {
    $route(to, from, next){
      // console.log('gaibian to', to);
      // console.log(this.$route.path);
    }
  },
  created () {
    // console.log("sexb", sexb);
  }
}
</script>

<style scoped lang="scss">
@import "~common/sass/variable.scss";

#app {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 6.4rem;
  min-height: 100%;
  background-color: $color-sub-red;
}

</style>
