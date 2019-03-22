<template>
  <posts-list :posts="posts"></posts-list>
</template>

<script>
import PostsList from "../components/PostsList";
import { posts } from "../services/PostsServices";

export default {
  components: {
    PostsList
  },
  data() {
    return {
      posts: []
    };
  }
};
</script>

<style>
</style>



