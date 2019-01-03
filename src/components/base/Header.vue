<template>
    <div id="header">
        <el-menu
            class="el-menu"
            text-color="#fff"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            active-text-color="#ffd04b"
            :default-active="activeIndex"
        >
            <el-menu-item
                v-for="(item, key) in config"
                :key="key"
                :index="item.index"
            >{{ item.title }}</el-menu-item>
        </el-menu>

        <div id="user">
            <div class="img-wrapper">
                <img class="user-img" src="@/assets/header.jpg" alt="@用户姓名" width="50px" height="50px">
            </div>
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
#header {
    height: 60px;
    text-align: left;
}

.el-menu {
    display: inline-block;
}

#user {
    width: 60px;
    float: right;
    text-align: center;
    background-color: green;
}

.img-wrapper {
    height: 60px;
    background-color: green;
}

.user-img {
    padding-top: 5px;
    border-radius: 30%;
}

.el-menu-item {
    font-size: 1em;
    padding: 0 30px;
}
</style>
