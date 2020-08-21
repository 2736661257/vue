<template>
<div>
    <div>
        <h1>走马灯</h1>
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="300px" :interval="5000">
            <el-carousel-item v-for="(item , index) in listPs" :key="index">
                <!--<h3 class="small">{{ item.src }}</h3>-->
                <img :src = "item.src" class="image">
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="block">
    <span class="demonstration">Click 指示器触发</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>

<script>
    export default {
        data() {
            //写在data里面的路径只会当成一个字符串，当使用：src=""来绑定的时候不能达到预期的效果，
            //解决的办法有url: require（'.assert/1.jpm'）手动把图片引入，否则配置的loader是不会根据图片路径把图片找出来
            return {
                listPs: [{src:require('../assets/banner1.jpg')}, {src:require('../assets/banner2.jpg')},{src:require('../assets/banner3.jpg')}]
            }
        }
    }
</script>

<style lang="less" scoped>
  .el-carousel__item .image {
    height: 200px;
    width: 500px;
  }

    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }


</style>