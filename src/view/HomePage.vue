<template>
  <!-- <Navigation /> -->
  <Navbar />
  <Carousel :slides="slides" />
  <our-services></our-services>
</template>

<script>
// import Navigation from "../components/Navigation.vue";
import Navbar from "../components/NavBar.vue";
import Carousel from "../components/Carousel.vue";
import item1 from "../components/carousel/Item1.vue";
import OurServices from "../components/OurServices.vue";

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
    OurServices,
    item1,
  },
};
</script>

<style>
</style>