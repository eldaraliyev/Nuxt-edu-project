<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>

    <AppControlInput v-model="editedPost.title">Title</AppControlInput>

    <AppControlInput v-model="editedPost.preview">Preview Text</AppControlInput>

    <AppControlInput v-model="editedPost.thumbnail"
      >Thumbnail Link</AppControlInput
    >

    <AppControlInput control-type="textarea" v-model="editedPost.content"
      >Content</AppControlInput
    >

    <AppButton type="submit">Save</AppButton>

    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</AppButton
    >
  </form>
</template>
<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";
export default {
  components: {
    AppControlInput,
    AppButton,
  },

  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            preview: "",
            thumbnail: "",
            content: "",
          },
    };
  },
  methods: {
    onSave() {
      this.$emit("submit", this.editedPost);
      this.$router.push("/admin");
    },
    onCancel() {
      this.$router.push("/admin");
    },
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
