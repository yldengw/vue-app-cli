<template>
  <header class="bar bar-nav bar-easy-vue">
    <a class="icon icon-refresh pull-left" v-if="showRefeshIcon" @click="refresh"></a>
    <a class="icon icon-left-nav pull-left" v-if="showReturnIcon" @click="goBack"></a>
    <a class="icon icon-compose pull-right" v-if="showWriteIcon" @click="writeSome"></a>
  </header>
</template>

<script>
export default {
  props: {
    showRefeshIcon: {
      default: true
    },
    showReturnIcon: {
      default: false
    },
    showWriteIcon: {
      default: true
    },
  },
  methods:{
    writeSome: function() {
      this.$store.commit('isShowAlert', true);
    },
    refresh: function() {
      this.$store.dispatch('getData', {
        progress: this,
        refresh: true
      });
    },
    goBack: function() {
      this.$router.back();
    }
  }
}
</script>

<style>
  .bar-easy-vue {
    background-color: #4A90E2 !important;
  }
  .bar-easy-vue a, h1 {
    color: #fff !important;
  }
</style>
