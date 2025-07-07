<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink class="link" to="/">Home</RouterLink>
          <RouterLink class="link" to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.wrapper {
  background-color: var(--secondary-text);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6vh;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.link {
  font-size: 1.4rem;
  color: var(--primary-text);
  text-decoration: none;
  padding: 1rem;
  font-weight: bold;
  margin: 0 auto;
}

.link:hover {
  transition:
    background-color 0.3s,
    color 0.3s;
  color: var(--tertiary-text);
}
</style>
