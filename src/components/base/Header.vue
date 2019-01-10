<template>
    <div class="header">
        <!-- 网站标题 -->
        <div class="title">
            <!-- logo -->
            <h1>hallucination</h1>
        </div>

        <el-menu
            class="el-menu"
            text-color="#fff"
            mode="horizontal"
            @select="handleSelect"
            background-color="#24292e"
            active-text-color="#ffd04b"
            :default-active="activeIndex"
        >
            <el-menu-item
                v-for="(item, key) in config"
                :key="key"
                :index="item.index"
            >{{ item.title }}</el-menu-item>
        </el-menu>

        <div class="user">
            <img src="@/assets/header.jpg" alt="@用户姓名" width="35px" height="35px">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <span class="user-name">子兴的期盼</span>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>设置1</el-dropdown-item>
                    <el-dropdown-item>设置2</el-dropdown-item>
                    <el-dropdown-item>设置3</el-dropdown-item>
                    <el-dropdown-item disabled>设置4</el-dropdown-item>
                    <el-dropdown-item divided>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import config from "@/static/header_menu";

export default {
    data() {
        return {
            // 菜单配置
            config,
            activeIndex: "1"
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            /* eslint-disable no-console */
            console.log(key, keyPath);
            /* eslint-enable no-console */
        }
    }
};
</script>

<style scoped>
.header {
    height: 60px;
    text-align: left;
}

.title {
    width: 200px;
    color: #ffffff;
    margin: 0 100px 0 0;
    text-align: center;
    vertical-align: top;
    display: inline-block;
}

.title h1 {
    margin: 0;
}

.el-menu {
    display: inline-block;
}

.el-menu-item {
    font-size: 1em;
    padding: 0 30px;
}

.user {
    height: 60px;
    float: right;
}

.user img {
    margin: 12.5px 10px 0 0;
}

.user-name {
    color: #ffffff;
}

.el-dropdown {
    vertical-align: top;
}

/* .el-dropdown-menu {
    background-color: darkblue;
} */
</style>
