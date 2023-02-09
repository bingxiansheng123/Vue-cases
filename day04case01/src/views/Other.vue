<template>
  <div>
    404
    <button v-on:click="fun()">点我去首页</button>
  </div>
</template>

<script>
export default {
    name:"OtherOne",
    methods:{
        fun(){
            // 编程式导航
            this.$router.push("/HomeView")
        }
    }
}
</script>

<style>

</style>