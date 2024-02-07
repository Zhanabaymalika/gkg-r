<template>
    <div>
      <h3>AppSidebar</h3>
      <ul>
        <li @click="navigateTo('GettingStarted')">Getting Started</li>
        <li @click="navigateTo('Gallery')">Gallery</li>
        <li @click="navigateTo('AboutUs')">About Us</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      navigateTo(componentName) {
       
        this.$emit('navigate', componentName);
      },
    },
  };
  </script>
  
  <style scoped>
  
  ul {
    list-style-type: none;
    padding: 0;
    cursor: pointer;
  }
  
  li {
    margin-bottom: 10px;
  }
  </style>