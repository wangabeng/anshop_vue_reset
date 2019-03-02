<template>
  <div class="m-footer">
      <ul class='m-footer-nav'>
          <li class='m-footer-aboutus'>
              <router-link tag="a" to="/itemcenter">
                  <img src="./bottom-product.png" alt="产品中心">
                  <p>产品中心</p>                
              </router-link>
          </li>
          <li class='m-footer-promotion'>
              <router-link tag="a" to="/cart">
                  <img src="./bottom-cart.png" alt="购物车">
                  <p>购物车</p>                
              </router-link>
          </li>
          <li class='m-footer-order-center'>
              <a href="./order.html">
                  <img src="./bottom-order-center.png" alt="我的订单">
                  <p>我的订单</p>              
              </a>
          </li>
          <li class='m-footer-member'>
              <a href="./user-center.html">
                  <img src="./bottom-member.png" alt="会员中心">
                  <p>会员中心</p>
              </a>
          </li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="scss">
@import "~common/sass/variable.scss";

.m-footer {
  width: 6.4rem;
  position: fixed;
  left: 50%;
  bottom: 0;
  margin-left: -3.2rem;
  z-index: 100;
  box-sizing:border-box;
  border-top: 1px solid #f1f1f1;
}
.m-footer ul.m-footer-nav {
  height: 1.1rem;
  background-color: #fff;
}
.m-footer ul.m-footer-nav>li {
  float: left;
  text-align: center;
  width: 25%;
  position: relative;
  height: 1.1rem;
  box-sizing:border-box;
}
.m-footer ul.m-footer-nav>li>a {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1.0rem;
  padding-top: .14rem;
  box-sizing:border-box;
  align-items: center;
}
.m-footer ul.m-footer-nav>li img {
  width: .43rem;
  height: .43rem;
  margin-bottom: .1rem;
}
.m-footer ul.m-footer-nav>li p {
  font-size: .23rem;
}
/*底部导航下拉菜单*/
.m-footer ul.m-footer-navlist {
  position: absolute;
  left: .05rem;
  bottom: 100%;
  background: red;
  width: 1.5rem;
  z-index: 100;
  box-sizing:border-box;
  border: 1px solid #f1f1f1;
  border-bottom: none;
  background: #fff;
  text-align: center;
  padding: .1rem .05rem 0;
  border-top-left-radius:.06rem;
  border-top-right-radius:.06rem;
  display: none;
}
.m-footer ul.m-footer-navlist li {
  box-sizing:border-box;
  border-bottom: 1px dashed rgba(219,63,105,.2);
}
.m-footer ul.m-footer-navlist li:last-child {
  border-bottom: none;
}
.m-footer ul.m-footer-navlist li a {
  font-size: .22rem;
  color: #8e9396;
  line-height: .35rem;
  display: block;
  padding: .06rem 0;
}
</style>