<!-- 公司列表页 -->
<template>
  <div>
    <Ul>
      <li v-for="item in companyList" v-bind:key="item.id">
        <a href>{{item.name}}</a>
      </li>
    </Ul>
  </div>
</template>
<script>
export default {
  name: "CompanyList",
  data() {
    return {
      companyList: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.companyList = [
        {
          id: 1,
          name: "广州道本信息科技"
        },
        {
          id: 2,
          name: "广州万红集团"
        },
        {
          id: 3,
          name: "广州青青科技"
        }
      ];
    }, 1000);
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>