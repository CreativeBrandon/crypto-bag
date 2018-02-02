<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import 'styles/theme.css';

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: var(--primary-font-color);
}

#nav a.router-link-exact-active {
  color: var(--main-color);
}
</style>
