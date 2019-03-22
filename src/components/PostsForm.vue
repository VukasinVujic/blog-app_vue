<<template>
  <form @submit.prevent="onSubmit" class="jumbotron">
    
    
    <div class="form-group row">
      <label for="title" class="col-4 col-form-label"> title</label> 
      <div class="col-8">
        <input id="title" name="title" type="text" class="form-control here" required="required" v-model="post.title">
      </div>
    </div>

    <div class="form-group row">
      <label for="text" class="col-4 col-form-label"> text</label> 
      <div class="col-8">
        <input id="text" name="text" type="text" class="form-control here" required="required" v-model="post.text">
      </div>
    </div>


    
     
    <div class="form-group row">
      <div class="offset-4 col-8">
        <button name="submit" type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</template>


<script>
export default {
  props: {
    post: Object
  },

  methods: {
    onSubmit() {
      this.$emit("onSubmit");
    }
  }
};
</script>

<style>
</style>
