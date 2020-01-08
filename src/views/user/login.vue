<template>
  <div>
    <h1>
      <button @click="login">登录</button>
    </h1>
    <!-- <h1>
      <button @click="myCanvas">图形页面</button>
    </h1> -->

  </div>
</template>

<script>
  export default {
    methods: {
      login(){
        this.$router.push('/');
      },
      // myCanvas(){
      //   this.$router.push('/canvas')
      // }
    },
  }
</script>

<style lang="scss" scoped>

</style>