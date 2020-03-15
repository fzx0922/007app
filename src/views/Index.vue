<template>
  <div id="index">
    <div>
      <div class="top_box" :style="{backgroundImage:'url('+data.avatar+')'}"></div>
      <div class="top">
        <div class="header">
          <div>
            <img class="logo" :src="data.avatar" alt />
          </div>
          <div class="index-header">
            <p class="brand">
              <img src="../assets/brand@2x.png" alt />
              {{data.name}}
            </p>
            <p>{{data.description}}/38分钟送达</p>
            <p>
              <img class="discount" src="../assets/icon1.png" alt />在线支付满28元减5，满50减10
            </p>
          </div>
        </div>
        <div class="advertise">
          {{data.bulletin}}
          <span class="btn">></span>
        </div>
      </div>
      <!-- 导航 -->
      <div class="nav">
        <div @click="click1(0)" >
          <router-link class="nav-text" :class="{active:currend==0}" to="/">商品</router-link>
        </div>
        <div @click="click1(1)">
          <router-link class="nav-text" :class="{active:currend==1}" to="/pingjia">评价</router-link>
        </div>
        <div @click="click1(2)">
          <router-link class="nav-text" :class="{active:currend==2}" to="/shangjia">商家</router-link>
        </div>
      </div>
    </div>
    <!-- 动态信息 -->
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="shopcar">
      <div class="shopcar_left">
        <div class="addSum">￥0</div>
        <div class="xf">另需配送费￥4元</div>
      </div>
      <div class="shopcar_right">￥20起送</div>
    </div>
    <div class="shopIcon">
      <img src="../assets/购物车 (2).png" alt="">
    </div>
  </div>
</template>

<script>
import { getSeller } from "../api/api";
export default {
  data() {
    return {
      data: [],
      // 选中导航栏，文字变红色
      currend:0
    };
  },
  created() {
    getSeller().then(res => {
      // console.log(res.data);
      this.data = res.data.data;
    });
  },
  methods: {
    click1(n) {
      this.currend=n
    }
  }
};
</script>
<style lang="less" scoped>
.active{
  color: red !important;
}
// 布局
#index {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .top_box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 170px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.8;
  }
  .top {
    width: 100%;
    height: 170px;
    position: relative;
  }
  .main {
    width: 100%;
    flex: 1;
  }
}
//
.header {
  padding-top: 6%;
  padding-left: 6%;
  display: flex;
  .logo {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }
  .brand {
    font-size: 18px;
    // color: #fff;
    img {
      vertical-align: middle;
      width: 40px;
    }
  }
  .discount {
    width: 20px;
    vertical-align: middle;
  }
  .index-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
// 公告
.advertise {
  position: absolute;
  left: 0;
  bottom: -17%;
  font-size: 14px;
  color: #fff;
  background: #3e3f43;
  opacity: 0.65;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 8px;
  position: relative;
  .btn {
    position: absolute;
    right: 5px;
  }
}
// 导航
.nav {
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  // 导航字体颜色
  .nav-text {
    color: #4b5258;
    text-decoration: none;
  }
}
// 购物车
.shopcar{
  color: #909196;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 60px;
  background-color:#131D26;
  display: flex;
}
.shopcar_left{
  width: 75%;
  display: flex;
  align-items: center;
  .addSum{
    width: 45%;
    font-size: 22px;
    padding-right: 8px;
    font-weight: bold;
    display: flex;
    justify-content: flex-end;
    border-right:1px solid #909196;
  }
  .xf{
    padding-left: 8px;
  }
}
.shopcar_right{
  width: 25%;
  background-color:#2B343B;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.shopIcon{
  width: 55px;
  height: 55px;
  background-color:#2B343D;
  border: 8px solid #131D26;
  text-align: center;
  line-height: 70px;
  border-radius: 50%;
  position: fixed;
  bottom: 0;
  left: 10px;
  img{
    width: 30px;
    height: 30px;
    
  }
}
</style>