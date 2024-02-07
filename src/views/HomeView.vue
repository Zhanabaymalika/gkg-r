<!-- HomeView.vue -->
<template>
  <div>

    <div class="home-container">
      <SidebarPanel @navigate="navigateToComponent" />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarPanel from '@/components/SidebarPanel.vue';

export default {
  components: {
    SidebarPanel,
  },
  methods: {
    navigateToComponent(componentName) {
      this.$router.push(`/home/${componentName.toLowerCase()}`);
    },
  },
};
</script>

<style scoped>

.home-container {
  display: flex;
}

.content {
  flex-grow: 1;
  padding: 10px;
}
</style>
