<template>
  <div>
    <el-button type="primary" v-model="isCollapse" icon="el-icon-arrow-left"></el-button>
    <el-menu
      class="menu"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      :default-active="defaultActive"
      :collapse="isCollapse"
      background-color="#545c64"
    >
      <!-- 循环 submenu -->
      <template v-for="(submenu, csKey) in config.submenus">
        <el-submenu :key="csKey" :index="submenu.index">
          <template slot="title">
            <i :class="submenu.icon"></i>
            <span slot="title">{{ submenu.title }}</span>
          </template>
          <!-- 循环 submenu下的 el-menu-item 这个应该放在组上边才能分清楚 -->
          <template v-for="(item, siKey) in submenu.items">
            <el-menu-item :key="siKey" :index="item.index">{{ item.title }}</el-menu-item>
          </template>
          <!-- 循环 submenu下的 el-menu-item-group -->
          <template v-for="(group, sgKey) in submenu.groups">
            <el-menu-item-group :key="sgKey">
              <span slot="title">{{ group.title }}</span>
              <!-- 循环 group下的 el-menu-item -->
              <template v-for="(item, giKey) in group.items">
                <el-menu-item :key="giKey" :index="item.index">{{ item.title }}</el-menu-item>
              </template>
            </el-menu-item-group>
          </template>
        </el-submenu>
      </template>
      <!-- 循环 el-menu-item-group  暂时用不到 -->
      <!-- 循环 el-menu-item 暂时用不到 -->
    </el-menu>
  </div>
</template>

<script>
import config from "@/plugins/menu";

export default {
  data() {
    return {
      isCollapse: true,
      defaultActive: "1-1",
      config: config // menu 导航配置文件
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.i {
    background-color: red;
}
</style>