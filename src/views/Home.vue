<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/img/logo.png">
    <button @click="handleClick">返回上一页</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    handleClick () {
      this.$router.go(-1)
      console.log(this.$router)
    }
  }
}
</script>
