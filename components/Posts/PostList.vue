<template>
  <section class="featured-posts">
    <PostPreview
      id="102"
      :is-admin="!isAdmin"
      thumbnail="https://image.freepik.com/vector-gratis/doodle-redes-sociales-garabatos-sitios-web-internet-comunicacion-redes-sociales-conjunto-iconos-dibujados-mano-web-linea_102902-813.jpg"
      title="Social Media Records"
      preview="Why so many people need socials?"
    />
    <PostPreview
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
    />
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
