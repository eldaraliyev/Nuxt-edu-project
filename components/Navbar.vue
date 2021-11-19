<template>
  <div class="container">
    <div class="nav-bar">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/users">Users</nuxt-link>
      <nuxt-link to="">About</nuxt-link>
      <nuxt-link to="">Contacs</nuxt-link>
    </div>
  </div>
</template>
<style scoped>
.nav-bar {
  display: flex;
  justify-content: right;
}
.nav-bar a {
  padding: 1em;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #333;
}
.nav-bar a:hover{
 color: #8d8d8d;}
</style>
