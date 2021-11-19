<template>
  <div class="container">
    <p>Yes, it's me</p>
    <input type="text" v-model="userId" />
    <button @click="onloadUser">Save</button>

  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    onloadUser() {
      this.$router.push("/users/" + this.userId);
    },
  },
};
</script>
