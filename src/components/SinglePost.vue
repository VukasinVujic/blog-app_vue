<template>
  <div class="row">
    <div class="card-body">
      <h5 class="card-title">Title: {{ posts.title }}</h5>
      <p class="card-text">Text: {{ posts.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: Object
  }
};
</script>

<style>
</style>
