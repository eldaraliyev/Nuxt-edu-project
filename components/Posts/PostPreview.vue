<template>
  <nuxt-link :to="postLink" class="post-preview">
    <article>
      <div
        class="post-thumbnail"
        :style="{
          backgroundImage: 'url(' + thumbnail + ')',
        }"
      ></div>
      <div class="post-content">
        <h1>{{ title }}</h1>
        <p>{{ preview }}</p>
      </div>
    </article>
  </nuxt-link>
</template>
<script>
export default {
  name: "PostPreview",
  props: {
    id: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? "/admin/" + this.id : "/posts/" + this.id;
    },
  },
};
</script>
<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 1px 10px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 350px;
    height: 320px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}
.post-content p {
  font-size: 1em;
}
a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
  transition: .3s;
}
</style>
