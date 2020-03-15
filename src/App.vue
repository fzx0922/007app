<template>
  <div id="app">
    <index></index>
  </div>
</template>
<script>
import index from "./views/Index";
export default {
  components: {
    index
  }
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
