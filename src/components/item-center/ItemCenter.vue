<template>
  <div class="hello">
    item center
    <p @click='addValue'>+</p>
    <p>{{ifShowFooter}}</p>
  </div>
</template>

<script>
// 导入vuex
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      msg: -1
    }
  },
  computed: mapGetters([
    'ifShowFooter'
  ]),
  methods: {
    ...mapActions([
      'changeifShowFooter',
    ]),
    addValue () {
      this.changeifShowFooter('aaa');
    }
  },
  created () {
    // console.log("item created");
    this.value = 5;
  },
  destroyed () {
    // console.log("item destoryed");
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
