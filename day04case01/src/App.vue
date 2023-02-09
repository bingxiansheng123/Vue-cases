<template>
  <div id="app">
    <nav>
      <router-link to="/HomeView">HomeViewee</router-link> |
      <router-link to="/AboutView">About</router-link>  |
      <router-link to="/Phone">Phone</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
.router-link-active{
  background-color: pink;
}
</style>
