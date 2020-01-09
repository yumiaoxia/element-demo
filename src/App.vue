<template>
  <div id="app">
    <el-container>
      <el-header class="header" style="height: 100px;">
        <title-header />
      </el-header>
      <el-container>
        <el-aside>
          <el-row>
            <el-col>
              <el-menu class="menu">
                <router-link
                  v-for="(item, index) in menuItems"
                  v-bind:key="index"
                  :to="{ name: item.name }"
                  tag="div"
                >
                  <el-menu-item class="menu-item" style="{text-decoration: none;}">{{ item.title }}</el-menu-item>
                </router-link>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TitleHeader from "./components/TitleHeader.vue";
import router from "./router";

export default {
  name: "app",
  data: function() {
    return {
      menuItems: [
        // "设备管理",
        // "公司管理",
        // "食谱管理",
        // "早教内容",
        // "任务管理",
        // "发育指标",
        // "公告管理",
        // "宣传管理",
        // "日志操作",
        // "积分统计"
        {
          title: "设备管理",
          name: "device"
        },
        {
          title: "公司管理",
          name: "company"
        },
        {
          title: "食谱管理",
          name: "cookbook"
        }
      ]
    };
  },
  components: {
    TitleHeader
  },
  router
};
</script>

<style scoped>
.header {
  font-size: 28px;
  color: #fff;
  background-color: #01ca9e;
  z-index: 1000;
}
.menu {
  background-color: #34495e;
}
.menu-item {
  text-align: center;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
}

.menu-item:hover {
  background-color: #34495e;
}

.menu-item:focus {
  background-color: #01ca9e;
}
</style>
