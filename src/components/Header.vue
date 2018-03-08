<template>
  <header class="header">
    
    <router-link class="logo-container" to="/"><img class="logo" src="../assets/logo.png"></router-link>

    <nav id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<style scoped>
@import '../styles/vars.css';

.header {
    border-bottom: solid thin var(--border-color);
    display: flex;
    align-items: center;
    padding: 15px 20px;
}

.logo {
  height: 40px;
  width: auto;
}

.logo-container {
  display: flex;
  margin-right: 20px;
}

nav a {
    margin: 0 10px;
}
</style>
