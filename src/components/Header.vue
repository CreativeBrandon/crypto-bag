<template>
  <header class="header">
    
    <img class="header-logo" src="../assets/logo.png">

    <nav id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
    border-bottom: solid thin #ccc;
    display: flex;
    align-items: center;
    padding: 15px 20px;
}
.header-logo {
  height: 40px;
  margin-right: 20px;
  width: auto;
}

#nav a {
    margin: 0 10px;
}

#nav a.router-link-exact-active {
    color: var(--main-color);
}
</style>