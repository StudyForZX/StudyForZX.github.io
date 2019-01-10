<template>
    <div id="app">
        <el-container>
            <el-header><Header/></el-header>
            <el-container>
                <el-aside v-show="true" width="auto"><Aside/></el-aside>
                <el-main><router-view/></el-main>
            </el-container>
            <el-footer><Footer/></el-footer>
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
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
}

#app > .el-container {
    height: 100%;
}

.el-header {
    padding: 0 10px 0 0;
    color: #333;
    line-height: 60px;
    text-align: center;
    background-color: #24292e;
}

.el-aside {
    color: #333;
    text-align: left;
}

.el-main {
    color: #333;
    text-align: center;
}

.el-aside, .el-main {
    background-color: #e9eef3;
}

.el-footer {
    color: #333;
    text-align: center;
    height: 30px !important;
}
</style>
