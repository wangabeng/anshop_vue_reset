<template>
  <div class="m-login common-padding-bottom">
      <div class="m-login-inner">
          <h1 class="title">代理登录<span>SIGN IN</span></h1>
           <!-- 登录方式 -->
           <div class="login-way">
              <a href="javascript:;" class='phone-login active'>验证码登录</a>
              <a href="javascript:;" class='password-login'>切换密码登录</a>
           </div>
           <!-- 密码登录 -->
          <form class="login-form-wrapper password-form" @submit.prevent="submit" method='post' style='display: none;'>
              <label for="username" class='each-input'>
                  <img src="./用户名.png" alt="用户名">
                  <input type="text" placeholder="请输入用户名/微信号/手机号" id='username' v-model='userName'>
              </label>
              <label for="password" class='each-input'>
                  <img src="./密码.png" alt="密码">
                  <input type="password" placeholder="请输入密码" id='password' v-model='password'>
              </label>

              <input class='submit-btn' type="submit" value='提交'>

          </form>

           <!-- 手机登录 -->
          <form class="login-form-wrapper phone-form" @click.prevent="submit" method='post' >
              <label for="phone" class='each-input'>
                  <img src="./电话.png" alt="手机">
                  <input type="text" placeholder="请输入手机号" id='phone'>
              </label>
              <label for="certi-code" class='each-input'>
                  <img src="./密码.png" alt="密码">
                  <div class="get-code">
                      <input type="text" class='code-input' placeholder="请输入验证码">
                      <input type="button" class='code-btn' value='获取验证码'>
                  </div>
              </label>
              <input class='submit-btn' type="submit" value='提交'>

          </form>

          <!-- 忘记密码 注册 -->
          <div class="register-forget">
              <a href="javascript:;" >忘记密码？</a>
              <a href="javascript:;">注册</a>
           </div>
      </div>
  </div>
</template>

<script>
// 导入vuex
import {mapActions, mapGetters} from 'vuex';
import axios from 'axios';

export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters([
      'ifShowFooter',
      'token'
    ])
  },
  methods: {
    ...mapActions([
      'changeifShowFooter', // 没有成功获取
      'addToken'
    ]),
    addValue () {
      this.changeifShowFooter(false);
    },
    submit () {
      var _this = this;
      // 改变vuex存储
      this.addToken("ben");
      // this.$router.push('/');
      // console.log('tab');
      // 发送请求
      this.postData();

    },
    postData () {
      var _this = this;
      let formData = {
        userName: this.userName,
        password: this.password,
      };
      console.log(formData);
      axios.post('http://localhost:3000/anshopserve/login', {
        params: formData
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });


    },
  },
  created () {
    // console.log("item created");
    this.changeifShowFooter(false);
  },
  mounted () {
    // 切换登录方式
    !function () {
        $('.password-login').on('click', function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $('.password-form').show();
            $('.phone-form').hide();
        });
        $('.phone-login').on('click', function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $('.password-form').hide();
            $('.phone-form').show();
        });
    }();
  },
  destroyed () {
    // console.log("item destoryed");
    this.changeifShowFooter(true);
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
