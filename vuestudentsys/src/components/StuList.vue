<template>
    <div class="stu-list">
        <h1>学生列表</h1>
        <button type="button" @click="jump">添加</button>
        <hr>
        <table class="stu-table">
            <!--我的个天呢，竟然把thead写成了head忘记了一个t，，，真是服了自己了-->
            <thead>
                <th>姓名</th>
                <th>性别</th>
                <th>年龄</th>
                <th>电话</th>
                <th>操作</th>
            </thead>
            <tbody>
                <tr v-for="(user,index) in list" :key="index">
                    <td>{{ user.name}}</td>
                    <td>{{ user.sex }}</td>
                    <td>{{ user.age }}</td>
                    <td>{{ user.tel }}</td>
                    <td><button @click="del(index)">删除</button></td>
                    
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [{姓名:"wq",性别:"nv"},{姓名:"fd",性别:'nan'}]
            }
        },
        created() {
            this.list = JSON.parse(window.localStorage.getItem("list"))
            console.log(this.list)
            console.log(window.localStorage.getItem("list"))
        },
        methods: {
            jump() {    
                this.$router.push("/stuadd");
            },
            del(index) {
                this.list.splice(1,1)
                window.localStorage.setItem("list",JSON.stringify(this.list))
            }
        }

    }
</script>

<style lang="less" scoped>
.stu-list {
    .stu-table {
        margin: 0 auto;
        width: 500px;
        text-align: center;
        border-collapse: collapse;
        margin-top: 30px;
        tr,th,td {
            border: purple solid 2px;
        }
    }
}
</style>