<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>
<script>
export default {
  middleware: ["check-auth", "auth"],
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch("addPost", postData).then(() => {
        this.$router.push("/admin");
      });
    },
  },
};
</script>
<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
