<template>
  <div id="app">
    <el-container>
      <el-aside><Aside /></el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main><Main /></el-main>
        <el-footer><Footer /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// Main组件
import Main from './components/base/Main';
// Aside侧栏组件
import Aside from './components/base/Aside';
// Header头组件
import Header from './components/base/Header';
// Footer尾组件
import Footer from './components/base/Footer';

export default {
  components: {
    Main,
    Aside,
    Header,
    Footer,
  }
}
</script>

<style scoped>
#app {
  height: 100%;
  color: #2c3e50;
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

#app > .el-container {
  height: 100%;
}


.el-header,
.el-footer {
  color: #333;
  line-height: 60px;
  text-align: center;
  background-color: #b3c0d1;
}

.el-aside {
  color: #333;
  width: "200px";
  line-height: 200px;
  text-align: center;
  background-color: #d3dce6;
}

.el-main {
  color: #333;
  line-height: 160px;
  text-align: center;
  background-color: #e9eef3;
}
</style>
