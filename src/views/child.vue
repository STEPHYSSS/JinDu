<template>
  <div id="content">
   <h3>这里是第一件</h3>
   <slot></slot>
   <div class="child">  
    <!-- // 具名插槽   -->
    <slot name="up"></slot>  
  </div>
  <p>这里是子组件下的具名插槽</p>  
    <!-- // 具名插槽   -->
    <slot name="down"></slot>  
  </div>
</template>
<script>
export default {
  name:'home',
  data(){
    return {

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