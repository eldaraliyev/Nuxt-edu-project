<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on: {{ date }}</div>
        <div class="post-detail">Post creator: {{ author }}</div>
      </div>
      <p class="post-content">{{ content }}</p>
    </section>
    <section class="post-feedback">
      Please let me your feedback to
      <a href="mailto:goodmail@awesome-domain.com"
        >goodmail@awesome-domain.com</a
      >.
    </section>
  </div>
</template>
<script>
export default {
  name: "PostPage",
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>
