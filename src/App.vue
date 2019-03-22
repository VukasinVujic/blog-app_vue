<template>
  <div id="app">
    <nav-bar/>
    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "app",
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
