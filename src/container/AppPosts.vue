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
  },

  beforeRouteEnter(to, from, next) {
    posts
      .getAll()
      .then(response => {
        next(vm => {
          vm.posts = response.data;
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>



