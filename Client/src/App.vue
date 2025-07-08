<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <button @click="router.back()" class="nav-button">&larr;</button>
          <RouterLink class="link" to="/">Home</RouterLink>
          <RouterLink class="link" to="/about">About</RouterLink>
          <button @click="router.forward()" class="nav-button">&rarr;</button>
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

nav {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.link {
  font-size: 1.4rem;
  color: var(--primary-text);
  text-decoration: none;
  padding: 1rem;
  font-weight: bold;
}

.link:hover {
  transition:
    background-color 0.3s,
    color 0.3s;
  color: var(--tertiary-text);
}

.nav-button {
  /* General class for navigation buttons */
  background-color: var(--primary-color);
  color: var(--tertiary-text);
  border-radius: 5px;
  cursor: pointer;
  transition: ease-in-out 0.5s;
  border: none;
  box-shadow: var(--shadow);
  padding: 0.5rem 0.8rem;
  font-weight: bold;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3vh;
  font-size: 1rem;
}

.nav-button:hover {
  background-color: var(--secondary-color);
  color: var(--primary-text);
}
</style>
