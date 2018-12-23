<template>
    <div>
        <!-- 网站标题 -->
        <div id="title">
            <!-- logo -->
            <span>hallucination</span>
        </div>
        <!-- 折叠按钮 -->
        <el-button v-model="isCollapse" :icon="btnIcon" @click="collapseBtn"></el-button>
        <!-- 菜单栏 -->
        <el-menu
            class="menu"
            text-color="#fff"
            :default-active="defaultActive"
            :collapse="isCollapse"
            background-color="#545c64"
        >
            <!-- 循环 submenu -->
            <template v-for="(submenu, sKey) in config">
                <el-submenu :key="'sKey' + sKey" :index="submenu.index">
                    <template slot="title">
                        <i :class="submenu.icon"></i>
                        <span slot="title">{{ submenu.title }}</span>
                    </template>
                    <!-- 循环 submenu下的 el-menu-item -->
                    <template v-for="(item, iKey) in submenu.items">
                        <el-menu-item :key="'iKey' + iKey" :index="item.index">{{ item.title }}</el-menu-item>
                    </template>
                    <!-- 循环 submenu下的 submenu -->
                    <template v-for="(sSubmenu, sSKey) in submenu.submenus">
                        <el-submenu :key="'sSKey' + sSKey" :index="sSubmenu.index">
                            <template slot="title">{{ sSubmenu.title }}</template>
                            <template v-for="(sItem, sIKey) in sSubmenu.items">
                                <el-menu-item :key="'sIkey' + sIKey" :index="sItem.index">{{ sItem.title }}</el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                </el-submenu>
            </template>
            <!-- 循环 el-menu-item-group  暂时用不到 -->
            <!-- 循环 el-menu-item 暂时用不到 -->
        </el-menu>
    </div>
</template>

<script>
import config from "@/static/aside_menu";

export default {
    data() {
        return {
            btnIcon: "el-icon-arrow-right",
            isCollapse: true,
            defaultActive: "1-1",
            config: config // menu 导航配置文件
        };
    },
    methods: {
        collapseBtn() {
            this.btnIcon = this.isCollapse
                ? "el-icon-arrow-left"
                : "el-icon-arrow-right";

            this.isCollapse = !this.isCollapse;
        }
    }
};
</script>

<style scoped>
.menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

#title {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: red;
}

.el-button {
    position: relative;
    top: 80px;
    left: -120px;
    width: 70px;
}
</style>