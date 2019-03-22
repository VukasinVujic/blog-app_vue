<template>
  <div>
    <posts-form :post="post" @onSubmit="addPost"></posts-form>
  </div>
</template>

<script>
import PostsForm from "../components/PostsForm.vue";
import { posts } from "../services/PostsServices";

export default {
  components: {
    PostsForm
  },
  data() {
    return {
      post: {
        title: "",
        text: ""
      }
    };
  },

  methods: {
    addPost() {
      posts
        .add(this.post)
        .then(success => {
          this.redirectToPosts();
        })
        .catch(error => {
          console.log(error);
        });
    },
    redirectToPosts() {
      this.$router.push({ name: "posts" });
    }
  }
};
</script>

<style>
</style>
