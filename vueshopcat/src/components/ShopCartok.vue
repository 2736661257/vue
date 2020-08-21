<template>
    <div class="shop-cart">
        <h1>购物车</h1>
        <span>p</span>
        <table class="shop-list">
            <thead>
                <tr>
                    <!--后来-->
                    <th><input @change="changeAllSelect" type="checkbox" v-model="allselect">商品名称</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>小计</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(shop,index) in shopList" :key="index">
                    <!--其实没有这个值v-model="shop.isSelect"而是通过type="checkbox"这个属性也是可以实现的了前端浏览器的选中状态的
                    而v-model="shop.isSelect"的作用有两点：首先它是一个状态值，布尔值，
                    1.通过它可以实现后端数据控制输出在前端页面显示；
                    2.通过这个状态值来实现总控制选项和下面表中单个选项之间的联系-->
                    <td><input @change="changeSelect" type="checkbox" v-model="shop.isSelect">{{shop.name}}</td>
                    <td>￥{{shop.price}}</td>

                    <td>
                        <button type="button" @click="shop.count++">+</button>
                        <input type="text" v-model="shop.count">
                        <button type="button" @click="shop.count > 1 ? shop.count-- : 1">-</button>
                    </td>

                    <td>￥{{ shop.price * shop.count}}</td>
                    <td><button type="button" @click="del(index)">删除</button></td>
                </tr>
            </tbody>
        </table>
        <h1>总价:{{totalPrice}}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                shopList: [
                    {
                        id: 1,
                        isSelect: true,
                        name: "苹果",
                        price: 15,
                        count: 12
                    },
                    {
                        id: 2,
                        isSelect: false,
                        name: "橘子",
                        price: 5,
                        count: 15
                    },
                    {
                        id: 3,
                        isSelect: false,
                        name: "香蕉",
                        price: 25,
                        count: 10
                    }
                ],
                allselect: true
               
            }
        },
        methods: {
            changeAllSelect() {
                //一会儿看看es6的语法的箭头后面应该是用{}还是（）
                //这里的话箭头后面既可以写()也可以写{},还可以不写
                this.shopList.forEach(v => {v.isSelect = this.allselect})
            },
            changeSelect() {
                //这个意思是this.shopList.every（）对对象数组进行遍历，
                //v => v.isSelect里面的箭头函数看是不是true这个和if(isSelect)判断true是一样的，
                //当对其进行遍历完只有里面的全部为true的时候.every()这个方法才会返回true，整个this.shopList.every(v => v.isSelect)表达式才会是true
               
                this.allselect = this.shopList.every(v => v.isSelect)
            },
            del(index) {
                this.shopList.splice(index,1)
            }
        },
        computed: {
            totalPrice() {
                let total = 0;
                //过滤选中的
                let selectData = this.shopList.filter(v => v.isSelect)
                selectData.forEach(v => {
                    total += (v.price * v.count)
                })
                return total;
            }
        }
    }
</script>

<style lang="less" scoped>
.shop-cart {
    .shop-list {
        width: 500px;
        text-align: center;
        border-collapse: collapse;
        tr,th,td {
            border: 1px solid #ccc;
        }
    }
}
</style>