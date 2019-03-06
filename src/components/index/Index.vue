<template>
  <div class="index">this is index
  </div>
</template>

<script>
// 导入vuex
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
    'ifShowFooter'
    ])
  },
  methods: {
    ...mapActions([
      'changeifShowFooter',
    ]),
    addValue () {
      this.changeifShowFooter(false);
    }
  },
  created () {
  },
  mounted () {

  },
  destroyed () {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~common/sass/variable.scss";
.m-login {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 .3rem;
  box-sizing: border-box;
  font-size: $font-size-medium;

  .m-login-inner {
    border-radius: $border-radius-large;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    margin: .3rem 0;
    padding: .2rem .5rem .5rem;

    h1.title {
      font-size: .4rem;
      color: $color-sub-pink;
      text-align: center;
      padding: .5rem 0 .4rem 0;
      span {
        display: block;
        font-size: .25rem;
        color: $color-text-d;
        padding-top: .1rem;
      }
    }

    /*登录方式*/
    .login-way {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      a {
        font-size: $font-size-medium;
        color: $color-sub-pink-light;
        box-sizing: border-box;
        padding-bottom: .1rem;
        font-size: .25rem;
        color: $color-text-d;
        &.password-login {
          /*border-left: 1px solid $color-sub-pink;*/
        }

        &.active {
          color: $color-sub-pink;
          font-weight: bold;
          border-bottom: 1px solid $color-sub-pink;
        }
      }
    }

    .login-form-wrapper {
      display: flex;
      width: 100%;
      margin-top: .3rem;
      flex-direction: column;
      align-items: center;
      font-size: $font-size-medium;

      label.each-input {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        margin-bottom: .4rem;

        img {
          width: .4rem;
          height: .4rem;
          padding-right: .2rem;
        }
        >input {
          font-size: $font-size-medium;
          flex: 1;
          box-sizing: border-box;
          height: .5rem;
          border-bottom: 1px solid $color-sub-pink;
        }
        input::-webkit-input-placeholder {
          /* placeholder颜色  */
          color: $color-text-d;
          /* placeholder字体大小  */
          font-size: $font-size-medium;
        }

        .get-code {
          display: flex;
          flex: 1;
          box-sizing: border-box;
          height: .6rem;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid $color-sub-pink;

          input.code-input {
            font-size: $font-size-medium;
            box-sizing: border-box;
            width: 2.5rem;
          }
          input.code-btn {
            font-size: .22rem;
            background-color: $color-sub-pink;
            color: #fff;
            line-height: .4rem;
            height: .4rem;
            box-sizing: border-box;
            padding: 0 .2rem;
            border-radius: 1em;
          } 

        }
      }

      .submit-btn {
        display: flex;
        text-align: center;
        justify-content: center;
        width: 4rem;
        margin-top: .5rem;
        height: .6rem;
        color: #fff;
        background-color: $color-sub-pink;
        font-size: $font-size-medium-x;
        border-radius: 2rem;
      }
    }
    
    /*忘记密码 注册*/
    .register-forget {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 .3rem;
      margin: .3rem 0;

      a {
        font-size: $font-size-medium-x;
        color: $color-sub-pink;
      }
    }
  }
}
</style>
