<template>
    <div>
        <h1>学生添加</h1>
        <form>
            <p>姓名：<input type="text" v-model="userInfo.name"></p>
            <p>性别：<input type="text" v-model="userInfo.sex"></p>
            <p>年龄：<input type="text" v-model="userInfo.age"></p>
            <p>电话：<input type="text" v-model="userInfo.tel"></p>
            <button type="button" @click="save">保存按钮</button>
        </form>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //那么对 b 的改动将不会触发任何视图的更新。
                //如果你知道你会在晚些时候需要一个 property，但是一开始它为空或不存在，那么你仅需要设置一些初始值。
                //这个就是所谓的先占位
                userInfo: {
                    name: 'we',
                    sex: '',
                    age: '',
                    tel: ''


                }
            }
        },
        // created() {
        //     console.log(this.userInfo)
        // },
        methods: {
            save() {
            //本地数据很多要放到数组里的，所以放到数组然后列表才会渲染
            let list = []; // 准备数组
            //JSON的一个常见用途是与Web服务器交换数据。从Web服务器接收数据时，数据始终是字符串。使用JSON.parse()解析数据，数据成为JavaScript对象。 
            //这里还需要注意的一个点就是获得数据的时候里面的参数是字符串，不能写成变量，不然的话也是不行的
            //而且这里的JSON需要全部大写，不然就是未定义报错
            let oldList = JSON.parse(window.localStorage.getItem("list"));// 获取本地数据
            // 判断有没有
            if (oldList && oldList.length) {
                // 如果有 先赋值给list
                list = oldList;
                //list = [];  这里做的操作是如果有就清空数组
            }
            //在每次将数据添加到数组里的时候要先进行上面的两部操作先获取然后进行判断有没有，如果不进行上面两次的操作的话下面的将this.userInfo放进去的
            //的时候就会覆盖住本地的数据，所以前面的两个步骤也是必须要操作的
            list.unshift(this.userInfo); // 把数据添加进入数组
            this.userInfo = { name: "", sex: "", age: "", tel: "" }; // 清空表单
            //JSON的一个常见用途是与Web服务器交换数据。将数据发送到Web服务器时，数据必须是字符串。JSON.stringify()将JavaScript对象转换为字符串。 
            //自己理解的这个key是因为本地存储是一个数组来进行存储的，因此肯定要有一个key值，而后面的value就是数组的数组名字，因为它本身是一个变量==对象
            //所以要进行一个转换，转换为字符串，因为我们的代码中都是js对象，而服务器端都是字符串，所以代码和服务器进行数据交换的时候是需要进行转换类型的
            window.localStorage.setItem("list", JSON.stringify(list)); // 存入本地存储,存入本地服务器必须是字符串
            console.log(list)
            // 跳转到账号列表
            this.$router.push('/stulist')
            }
        }
        
    }
</script>

<style lang="less" scoped>

</style>