<template>
  <div id="app">
    <!-- 登陆界面 -->
    <div v-if="$route.path === '/' || $route.path === '/Login'">
      <router-view/>
    </div>

    <!-- 销售 仓储 财务 我的 -->
    <div v-else>
      <!-- head 导航栏 -->
      <van-nav-bar title="标题" left-text="返回" left-arrow  @click-right="onClickRight" @click-left="onClickLeft">
        <van-icon name="search" slot="right"/>
      </van-nav-bar>
      <!-- 内容 -->
      <router-view/>

      <!-- 底部导航 -->
      <van-tabbar v-model="active">
        <van-tabbar-item icon="points-mall">销售</van-tabbar-item>
        <van-tabbar-item icon="exchange">仓储</van-tabbar-item>
        <van-tabbar-item icon="after-sale">财务</van-tabbar-item>
        <van-tabbar-item icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    
  </div>
</template>

<script>
  // eslint-disable-next-line
  // @ is an alias to /src
  /* eslint-disable */

  export default {
    name: '',
    components: {
    },
    data() {
      return {
        active: 0
      }
    },
    watch: {
      active: function() {
        //console.log(this.active);
        if(this.active === 0) {
          this.$router.push('/Sale')
        }else if(this.active === 1) {
          this.$router.push('/warehousein')
        }else if(this.active === 2) {
          this.$router.push('/Finance')
        }else if(this.active === 3) {
          this.$router.push('/Me')
        }
      }
    },
    methods: {
      onClickLeft() {
        window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/');
          console.log(this.$route);
      },
      onClickRight() {

      }
    },
    created() {
    },
    mounted() {
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
