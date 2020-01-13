<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="公司列表" name="first">
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="新闻动态" name="second">
        <router-view></router-view>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Company",
  data() {
    return {
      activeName: "first"
    };
  },
  created() {
    this.$router.push({ name: "companyList" });
  },
  methods: {
    handleClick(tab) {
      this.activeName = tab.name;
      if (tab.name === "first") {
        this.$router.push({ name: "companyList" });
      } else if (tab.name === "second") {
        this.$router.push({ name: "news" });
      }
    }
  }
};
</script>