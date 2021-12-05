<template>
  <div>
    <PostPage
      title="Technical innovations"
      date="20.11.2021"
      author="Eldar Aliyev"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum? Repellat tempora, voluptatum nulla itaque asperiores obcaecati maiores nemo aliquid. Atque aspernatur eveniet facere sequi voluptatibus, alias pariatur iusto. Voluptates."
    />
  </div>
</template>
<script>
import PostPage from "@/components/Posts/PostPage";
export default {
  components: {
    PostPage,
  },
};
</script>
<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
