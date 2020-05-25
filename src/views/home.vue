<template>
  <div id="content">
    <el-container>
        <el-aside width="200px">
            <ul>
                <router-link to="/right"><li v-for="(v,i) in leftList" :key="i">{{v.name}}</li></router-link>
            </ul>
        </el-aside>
    <router-view/>
    </el-container>
  </div>
</template>
<script>
export default {
    name:'home',
    data(){
        return {
            leftList:[{
                name:'首页'            
            },{
                name:'服装'            
            },{
                name:'生鲜'            
            },{
                name:'电器'            
            }]
        }
    }
}
</script>
<style>
ul{
    margin: 0;
    padding: 0;
}
ul>li{
    list-style: none;
    background-color:skyblue;
    border-bottom: 1px solid sienna;
    width: 100%;
}
ul>li:hover{
    cursor: pointer;
}
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 50px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>