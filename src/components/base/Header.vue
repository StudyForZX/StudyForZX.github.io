<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <el-menu-item v-for="(item, key) in config" :key="key" :index="item.index">{{ item.title }}</el-menu-item>
    </el-menu>
</template>

<script>

import config from '@/static/header_menu';

export default {
    data() {
        return {
            activeIndex: "1",
            config,
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style scoped>
.el-menu {
    float: right;
}

.el-menu-item {
    font-size: 1em;
    padding: 0 30px;
}
</style>
