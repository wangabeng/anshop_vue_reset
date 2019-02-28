<template>
  <div id="app">
    <!-- <router-view/> --><i class="fa fa-address-book-o" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="scss">
@import "~common/sass/variable.scss";
// @import "~common/sass/awesome.scss";

#app {
  display: flex;
  flex-direction: column;
  width: 6.4rem;
  height: 5rem;
  background-color: $color-sub-red;
}

</style>
