<template>
  <div id="content">
    <ul class="tab_tit">
      <li v-for="(item,index) in lists" :key="index" :class="n==index?'active':''" @click="n=index">{{item.title}}</li>
    </ul>
    <div class="tab_con">
      <div v-for="(v,i) in lists" :key="i" v-show="n==i">
        {{v.con}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'home',
  data(){
    return {
      n:0,
      lists:[
        {title:'首页',con:'内容1'},
        {title:'新闻',con:'内容2'},
        {title:'关于我们',con:'内容3'},
        {title:'联系',con:'内容4'},
      ]
    }
  }
}
</script>
<style>
ul,li{
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