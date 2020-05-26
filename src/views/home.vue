<template>
  <div id="content">
    <ul class="tab_tit">
      <li
        v-for="(item,index) in lists"
        :key="index"
        :class="n==index?'active':''"
        @click="n=index"
      >{{item.title}}</li>
    </ul>
    <div class="tab_con">
      <h3>这里是父组件</h3>
      <child>
        <div class="tmpl">
          <ul class="tab_tit">
            <li
              v-for="(item,index) in lists"
              :key="index"
              :class="n==index?'active':''"
              @click="n=index"
            >{{item.title}}</li>
          </ul>
        </div>
      </child>
      <span>具名插槽与匿名插槽对比</span>
      <child>
        <div class="tmpl" slot="up">
          <span>ipde1</span>
          <span>ipde12</span>
          <span>ipde13</span>
          <span>ipde14</span>
          <span>ipde15</span>
          <span>ipde16</span>
        </div>
        <span>lalal</span>
        <div class="tmpl" slot="down">
          <span>菜单-1</span>
          <span>菜单-2</span>
          <span>菜单-3</span>
          <span>菜单-4</span>
          <span>菜单-5</span>
          <span>菜单-6</span>
        </div>
      </child>
    </div>
    <div>
      <!-- 1 -->
      <childDate>
        <template slot-scope="user">
          <div class="tmpl">
            <li v-for="(item,index) in user.data" :key="index">{{item}}</li>
          </div>
        </template>
      </childDate>
      <!-- 2 -->
      <childDate>
        <template slot-scope="user">
          <div class="tmpl">
            <span v-for="(item,index) in user.data" :key="index">{{item}}</span>
          </div>
        </template>
      </childDate>
      <!-- 3 -->
      <childDate>
        <template slot-scope="user">{{user.data}}</template>
      </childDate>
    </div>
    <!-- 监听 watch -->
    姓名：
    <input type="text" v-model="name" />
    年龄：
    <input type="text" v-model="age" />
    <p>监听姓名的变化：{{nameChange}}</p>
    <input type="text" v-model="user.name" />

    <h1>通过点击查询年龄</h1>
    <p>姓名：{{list.name2}}</p>
    <p>年龄:{{list.age}}</p>
    <button @click="add">查询年龄</button>
  </div>
</template>

<script>
// import child from "./child";//顶部导航
import child from "./child";
import childDate from "./childDate";
export default {
  name: "home",
  data() {
    return {
      n: 0,
      lists: [
        { title: "首页" },
        { title: "新闻" },
        { title: "关于我们" },
        { title: "联系" }
      ],
      user: {
        name: "zhangshan",
        age: 16
      },
      name: "厚本",
      age: 20,
      nameChange: "",

      list: {
        name2: "wangwu"
      }
    };
  },
  components: {
    child,
    childDate
  },
  watch: {
    "user.name"(newV, oldV) {
      console.log("新名字" + newV + "旧名字" + oldV);
      this.nameChange =
        "新名字" + newV + "旧名字" + oldV + "---年龄" + this.age;
    },
    name(newV, oldV) {
      console.log("新名字" + newV + "旧名字" + oldV);
    }
  },
  methods: {
    add() {
      console.log(this.list);
      // 按照常规操作点击了之后，因为这时候list对象中没有age这个字段，视图是没有显示年龄的，这时候就要用到$set
      this.$set(this.list, "age", 45);
    },
    del() {
      // delete this.user.age; //删除页面不会渲染，但是打印的时候是删掉了
      this.$delete(this.list, "age");
    }
  }
};
</script>
<style>
ul,
li {
  padding: 0;
  margin: 0;
}
.tab_tit li {
  padding: 10px 15px;
  text-align: center;
  list-style: none;
  cursor: pointer;
  display: inline-block;
}
.tab_tit .active {
  color: #09f;
  border-bottom: 1px solid #09f;
}
.tab_con div {
  margin: 30px;
}
</style>