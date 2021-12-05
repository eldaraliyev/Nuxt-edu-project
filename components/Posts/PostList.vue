<template>
  <section class="featured-posts">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :preview="post.previewText"
    />
    <!-- <PostPreview
      id="103"
      :is-admin="isAdmin"
      thumbnail="https://image.freepik.com/vector-gratis/doodle-redes-sociales-garabatos-sitios-web-internet-comunicacion-redes-sociales-conjunto-iconos-dibujados-mano-web-linea_102902-813.jpg"
      title="Telegram on hype"
      preview="Many users prefer to use safe and freedom environmnet"
    />
    <PostPreview
      id="104"
      :is-admin="isAdmin"
      thumbnail="https://image.freepik.com/vector-gratis/doodle-redes-sociales-garabatos-sitios-web-internet-comunicacion-redes-sociales-conjunto-iconos-dibujados-mano-web-linea_102902-813.jpg"
      title="Facebook changes company name"
      preview="From 1st November Meta is a new brand name for Facebook "
    /> -->
  </section>
</template>
<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: true,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
