<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/productos">Productos</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
nav {
  display: flex;
  gap: 1rem;
  background: #333;
  padding: 1rem;
}
nav a {
  color: white;
  text-decoration: none;
}
nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
