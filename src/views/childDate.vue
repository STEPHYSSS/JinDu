<template>
  <div id="content">
    作用域插槽和单个插槽和具名插槽的区别，因为单个插槽和具名插槽不绑定数据，所以父组件是提供的模板要既包括样式由包括内容的
    <span>作用域插槽</span>
    <slot :data="data"></slot> 
  </div>
</template>
<script>
export default {
  name:'home',
  data(){
    return {
       data: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']  
    }
  }
}
</script>
<style>
.conLeft ul,.conLeft li{
  padding: 0;
  margin: 0;
}
.tab_tit li{
  padding: 10px 15px;
  text-align: center;
  list-style: none;
  cursor: pointer;
  display: inline-block;
}
.tab_tit .active{
  color: #09f;
  border-bottom: 1px solid #09f;
}
.tab_con div{
  margin:30px
}
</style>