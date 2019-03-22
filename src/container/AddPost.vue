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

  created() {
    this.$router.params.id &&
      posts.get(this.$$router.params.id).then(response => {
        this.post = response.data;
      });
  },

  methods: {
    onSubmit() {
      if (this.post.id) {
        this.editPost();
      } else {
        this.addPost();
      }
    },

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

    editPost() {
        posts.edit(this.post)
        .then(success) => {
            this.redirectToPosts()
        })
        }
    },

    redirectToPosts() {
      this.$router.push({ name: "posts" });
    }
  }
};
</script>

<style>
</style>
