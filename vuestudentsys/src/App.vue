<template>
  <div id="app">
    <div class="firstRouter">
      <ul>
        <li><router-link to='/carousel'>跑马灯</router-link></li>
        <li><router-link to='/studentmanage'>学生管理系统</router-link></li>
      </ul>
    </div>

    <router-view/>
  </div>
</template>

<style lang="less">


#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.firstRouter {
  display:flex;
}

</style>
