<template>
  <div id="goodlist">
    <!-- 左边导航栏 -->
    <div class="left">
      <ul class="content">
        <div
          :class="{selected:name==item.name}"
          v-for="(item,i) in data "
          :key="item.name"
          @click="changLeft(item.name,i)"
        >
          <div class="col">
            <img v-show="item.type==1" src="../assets/te.png" />
            <img v-show="item.type==2" src="../assets/zhe.png" alt />
            <span>{{item.name}}</span>
          </div>
        </div>
      </ul>
    </div>
    <!-- 右边对应的内容 -->
    <div class="right">
      <ul class="content">
        <!-- 用index实现左连右联动 -->
        <div v-for="(food,index) in data" :key="food.id" :id="index">
          <div class="title">{{ food.name }}</div>
          <div v-for="v in food.foods" :key="v.id" class="right_content">
            <div class="right_left">
              <img :src="v.icon" alt />
            </div>
            <div class="right_right">
              <div>{{v.name}}</div>
              <div>月销{{v.sellCount}}份 好评率{{v.rating}}%</div>
              <div>{{v.description}}</div>
              <div class="price">
                <div>
                  <label>￥{{v.price}}</label>
                  <label v-show="v.oldPrice==''?'':'true'" class="oldPrice">￥{{v.oldPrice}}</label>
                </div>
                <div>
                  <button v-show="v.num!=0" class="btn" type="button" @click="Add(-1,v.name)">-</button>
                  <span v-show="v.num!=0">{{v.num}}</span>
                  <button class="btn" type="button" @click="Add(1,v.name)">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { getGoods } from "../api/api.js";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      data: [],
      name: "热销榜"
    };
  },
  created() {
    getGoods().then(res => {
      console.log(res.data);
      this.data = res.data.data;
    });
  },
  mounted() {
    //   better-scroll 获取节点
    new BScroll(document.querySelector(".left"), {
      click: true
    });
    this.rightDiv=new BScroll(document.querySelector(".right"), {
      click: true
    });
  },
  methods: {
    //   加减
    Add(val, name) {
      console.log(val, name);
      for (let obj1 of this.data) {
        // console.log(obj1)
        for (let obj2 of obj1.foods) {
          // console.log(obj2)
          if (obj2.name == name) {
            obj2.num += val;
          }
        }
      }
    },
    // 点击改变左边导航的颜色
    changLeft(val,i) {
      this.name = val;
      this.rightDiv.scrollToElement(document.getElementById(i),400)
    }
  }
};
</script>
<style lang="less" scoped>
#goodlist {
  font-size: 13px;
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    height: 600px;
    width: 80px;
    background-color: #f4f5f7;
    border-right: 1px solid #ccc;
    overflow: scroll;
    // 左边导航
    .col {
      width: 60px;
      padding: 18px;
      img {
        width: 16px;
        vertical-align: middle;
      }
    }
  }
  .right {
    //  可能去掉
    width: 100%;
    height: 600px;
    overflow: scroll;
    flex: 1;
    .right_content {
      display: flex;
      height: 135px;
      padding: 18px;
    }
    .right_right {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    // 左边的商品图片
     img {
      width: 120px;
      height: 100%;
      border-radius: 4px;
      margin-right: 15px;
    }
    .title {
      // height: 40px;
      padding: 10px 0 10px 15px;
      //   margin-left:15px;
      background-color: #f4f5f7;
    }
    .oldPrice {
      color: #ccc;
      text-decoration: line-through;
    }
  }
}
.price {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
// 购物车加号
.btn {
  text-align: center;
  font-size: 16px;
  color: #fff;
  height: 20px;
  width: 20px;
  background: #00a0dd;
  border-radius: 50%;
  border: 0;
}
// 选中状态
.selected {
  background-color: #fff;
}
// .active{
//   tex
// }
</style>