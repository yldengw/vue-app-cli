<template>
  <nav class="bar bar-tab easy-bottom-bar">
    <router-link class="tab-item" to="/">
      <span class="icon fa fa-snapchat" :class="{'easy-fa-color': isHome}"></span>
      <span class="tab-label" :class="{'easy-fa-color': isHome}">首页</span>
    </router-link>
    <router-link class="tab-item" to="/upload">
      <span class="icon fa fa-cloud-upload" :class="{'easy-fa-color': isList}"></span>
      <span class="tab-label" :class="{'easy-fa-color': isList}">上传</span>
    </router-link>
    <router-link class="tab-item" to="/option">
      <span class="icon icon-person" :class="{'easy-fa-color': isOption}"></span>
      <span class="tab-label" :class="{'easy-fa-color': isOption}">设置</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  data: () => ({
    isHome: true,
    isList: false,
    isOption: false,
  }),
  mounted: function() {
    this.$nextTick(function() {
      const uri = this.$route.path;
      if (uri === '/') {
        this.isHome = true;
        this.isList = false;
        this.isOption = false;
      }
      if (uri === '/upload') {
        this.isHome = false;
        this.isList = true;
        this.isOption = false;
      }
      if (uri === '/option') {
        this.isHome = false;
        this.isList = false;
        this.isOption = true;
      }
    });
  },
  methods: {

  }
}
</script>

<style>
.easy-bottom-bar {
  background-color: #4A90E2 !important;
  color: #fff;
  border: none;
}
.easy-bottom-bar a {
  color: #cdd !important;
}
.easy-fa-color {
  color: #fff !important;
}
</style>
