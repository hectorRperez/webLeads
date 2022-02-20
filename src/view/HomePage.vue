<template>
  <!-- <Navigation /> -->
  <Navbar />
  <Carousel :slides="slides" />
</template>

<script>
// import Navigation from "../components/Navigation.vue";
import Navbar from "../components/NavBar.vue";
import Carousel from "../components/Carousel.vue";
import item1 from "../components/carousel/Item1.vue";

export default {
  data() {
    return {
      slides: [
        "../assets/img/Frame1.png",
        "https://picsum.photos/id/237/1020/600",
        "https://picsum.photos/id/238/1020/600",
        "https://picsum.photos/id/239/1020/600",
      ],
    };
  },

  components: {
    Navbar,
    Carousel,
    item1,
  },
};
</script>

<style>
</style>