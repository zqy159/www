<template>
  <div id="app" @mouseup="showPwd">
      <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    showPwd(type) {
      this.$center.$emit("change");
    }
  }
};
</script>

<style scoped>
.content{
  position: absolute;
  top:0;
  left:0;
  z-index:2;
  background:#000;
  widows: 100%;
  height: 100%;
}
</style>
