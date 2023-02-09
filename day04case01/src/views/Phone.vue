<template>
  <div>
    <list :datalist="arra" />
    <list :datalist="arrb" />
    <list :datalist="arrc" />
    我是phone{{arra}},{{arrb}},{{ arrc }}
  </div>
</template>

<script>
import getapi from "@/apis/getapi.js"
import List from "@/components/List.vue"
export default {
  name:"PhoneOne",
  components:{
    List
  },
  data(){
    return{
        arr:[]
    }
  },
  created(){
      getapi("/xiaoming/xiaohong").then((ok)=>{
        console.log(ok.data.subjects)
        this.arr=ok.data.subjects
      })
  },
  computed:{
    arra(){
        return   this.arr.slice(0,15)
    },
    arrb(){
        return   this.arr.slice(15,30)
    },
    arrc(){
        return   this.arr.slice(30,45)
    },
  }

}
</script>

<style scoped> 
img{
    width: 200px;
    height: 200px;
}
</style>