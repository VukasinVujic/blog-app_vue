<template>
  <div class="row">
    <div class="card col-md-2" v-for="post in posts" :key="post.id">
      <div class="card-body">
        <h5 class="card-title">Title: {{ post.title }}</h5>
        <p class="card-text">Text: {{ post.text }}</p>

        <router-link :to="{name: 'single' , params: {id:post.id}}">View Post</router-link>
        <br>
        <router-link :to="{name: 'edit' , params: {id:post.id}}">Edit post</router-link>
      </div>
      <!-- <ul class="list-group list-group-flush">
        <li class="list-group-item">Year: {{ car.year }}</li>
        <li class="list-group-item">Number of doors: {{ car.numberOfDoors }}</li>
        <li class="list-group-item">Maximum speed: {{ car.maxSpeed }}</li>
        <li class="list-group-item">{{ car.isAutomatic ? 'Automatic' : 'Manual' }}</li>
        <li class="list-group-item">Engine: {{ capitalize(car.engine) }}</li>
      </ul>-->
      <div class="card-body">
        <a href="#" class="card-link">Holder</a>
        <a href="#" class="card-link">Holder</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array
  }
};
</script>


