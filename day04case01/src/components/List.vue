<template>
  <div class="container"> 
    <div class="item" v-for="(v,i) in datalist " :key="i">
        <img src="https://img2.baidu.com/it/u=3202947311,1179654885&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="">
        <img :src="v.images.medium" alt="">
     <br>
     <span>
        我是内容:{{v.title|xiaoming}}
     </span>
    </div>

  </div>
</template>

<script>
export default {
  name:"ListOne",
  props:["datalist"],
  filters:{
        xiaoming(val){
            if(val.length>6){
                return val.substr(0,5)+".."
            }else{
                return val
            }
            
        }
    }
}
</script>

<style scoped> 
.container{
    display: flex;
    overflow-x: auto;
}
img{
    width: 200px;
    height: 100px;
}
</style>