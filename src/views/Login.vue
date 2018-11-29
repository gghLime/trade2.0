<template>
  <div class="login_page">
    <van-button type="default" @click="login">{{ $t("basic.login") }}</van-button>
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

      }
    },
    methods: {
      // 登录
      login() {
          this.$router.push('/Sale');
      }
    },
    created() {
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .login_page {
    margin-top: 300px;
  }
</style>
