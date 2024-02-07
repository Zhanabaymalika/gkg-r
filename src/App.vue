<template>
  <div>
    <h2>Welcome to Home Page</h2>
    <div class="home-container">
      <Sidebar @navigate="navigateToComponent" />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

</style>