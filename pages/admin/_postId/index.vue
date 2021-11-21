<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>
<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  components: {
    AdminPostForm,
  },
  data() {
    return {
      loadedPost: {
        author: "ELmir Ismayilzade",
        title: "This awesome title",
        thumbnail:
          "https://h2.hqtexture.com/102/10117/1458543057-shutterstock-157522712.jpg",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, pariatur laudantium hic consequatur mollitia soluta dolor aperiam doloremque tempora exercitationem?",
      },
    };
  },
};
</script>
 <style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
