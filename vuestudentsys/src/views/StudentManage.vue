<template>
    <div class="student-manage">
        <ul class="left-nav">
            <li><router-link to='/stulist'>学籍列表</router-link></li>
            <li><router-link to='/stuadd'>添加学籍</router-link></li>
            
        </ul>
        
        <!--注意这里如果有二级路由的话不但二级路由要在一级路由要有出口的显示（即router-view）
        而且
        还需要有router-link来进行跳转到二级需要显示的组件-->
        <div class="right-content">
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.student-manage {
    height: 100%;
    width: 100%;
    background-color: #f1f1f1;
    display: flex;
    .left-nav {
        flex: 0 0 200px;
        background-color: orange;
        .li {
            text-align: center;
            height: 30px;
            line-height: 30px;
            color: #fff;
        }
        
    }
    .right-content {
        flex: 1;
        background-color: #eee;
    }
}
</style>