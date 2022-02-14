<template>
  <Navbar />

  <!-- <button @click="$store.dispatch('changeLanguage', 'es')">ES</button> -->
  <!-- <button @click="$store.dispatch('changeLanguage', 'en')">EN</button> -->
</template>

<script>
import HelloWord from "./components/HelloWorld.vue";
import Navbar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    HelloWord,
    Navbar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap");

:root {
  --dark-bg-primary: #1b1e28;
  --dark-bg-secondary: #272b39;
  --red: #ff5072;
  --text-color: #b8becd;
  --box-shadow: 0px 5px 9px -1px rgba(0, 0, 0, 0.79);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "DM Sans", sans-serif;
}

body {
  background: var(--dark-bg-primary);
  height: 200vh;
}
</style>
