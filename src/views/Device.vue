<template>
  <div>
    <label for="search">
      <el-input name="search" class="search" v-model="search" placeholder="请输入内容" />
      <span>搜索</span>
    </label>
    <h3>这是设备页面</h3>
  </div>
</template>

<script>
export default {
  name: "Device",
  data: function() {
    return {
      search: ""
    };
  }
};
</script>

<style scoped>
.search {
  display: inline-block;
  width: 200px;
}
</style>
