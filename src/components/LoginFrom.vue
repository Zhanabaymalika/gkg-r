<template>
    <div>
      <h2>Login Form</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="login">Login:</label>
          <input type="text" v-model="login" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        login: '',
        password: '',
      };
    },
   
methods: {
  submitForm() {
    const correctCredentials = { login: 'CorrectLogin', password: 'CorrectPassword' };

    if (this.login === correctCredentials.login && this.password === correctCredentials.password) {
     
      console.log('Login successful! Navigating to Home page.');
      
     
      this.$router.push('/home');
    } else {
      alert('Invalid login or password. Please try again.');
    }
  },
},

  };
  </script>
  
  <style scoped>
   
  </style>