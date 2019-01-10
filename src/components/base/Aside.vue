<template>
    <div class="aside">
        <!-- 菜单栏 -->
        <el-menu
            class="menu"
            text-color="#fff"
            :collapse="isCollapse"
            background-color="#545c64"
            :default-active="defaultActive"
        >
            <!-- 循环 submenu -->
            <template v-for="(submenu, sKey) in config">
                <el-submenu :key="'sKey' + sKey" :index="submenu.index">
                    <template slot="title">
                        <i :class="submenuIcon" @click="collapseBtn"></i>
                        <!-- <i :class="submenu.icon" @click="collapseBtn"></i> -->
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
                                <el-menu-item
                                    :key="'sIkey' + sIKey"
                                    :index="sItem.index"
                                >{{ sItem.title }}</el-menu-item>
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
            // menu 导航配置文件
            config: config,
            isCollapse: true,
            submenuIcon: "el-icon-d-arrow-right",
            defaultActive: "1-1"
        };
    },
    methods: {
        collapseBtn() {
            // 切换左侧导航
            this.isCollapse = !this.isCollapse;
            // 切换左侧导航图标更改
            this.submenuIcon =
                this.submenuIcon === "el-icon-d-arrow-right"
                    ? "el-icon-d-arrow-left"
                    : "el-icon-d-arrow-right";
        }
    }
};
</script>

<style scoped>
.el-menu {
    margin-top: 200px;
}

.menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: auto;
}
</style>