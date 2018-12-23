<template>
    <div id="app">
        <el-container>
            <el-aside><Aside/></el-aside>
            <el-container>
                <el-header><Header/></el-header>
                <el-main><router-view/></el-main>
                <el-footer><Footer/></el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
// Aside侧栏组件
import Aside from "./components/base/Aside";
// Header头组件
import Header from "./components/base/Header";
// Footer尾组件
import Footer from "./components/base/Footer";

export default {
    components: {
        Aside,
        Header,
        Footer
    }
};
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
    padding: 0;
    color: #333;
    line-height: 60px;
    text-align: center;
    background-color: #545c64;
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
