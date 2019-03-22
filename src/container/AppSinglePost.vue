<template>
  <div>
    <div class="row">
      <div class="card-body">
        <h5 class="card-title">Title: {{ post.title }}</h5>
        <p class="card-text">Text: {{ post.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { posts } from "../services/PostsServices";
import SinglePost from "../components/SinglePost.vue";

export default {
  components: {
    SinglePost
  },
  data() {
    return {
      post: {
        title: "",
        text: ""
      }
    };
  },

  created() {
    this.$route.params.id &&
      posts
        .get(this.$route.params.id)
        .then(response => {
          console.log(response);
          this.post = response.data;
        })
        .catch(error => {
          console.log(error);
        });
  }
};
</script>

<style>
</style>
