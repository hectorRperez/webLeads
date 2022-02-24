<template>
  <!-- <Navigation /> -->

  <img class="gradient-1" src="../assets/img/Gradient01.svg" alt="" />
  <Navbar />
  <Carousel :slides="slides" />
  <our-services></our-services>
  <img class="gradient-2" src="../assets/img/Gradient02.svg" alt="" />

  <who-trust-us></who-trust-us>
  <scrum-service></scrum-service>
  <img class="gradient-3" src="../assets/img/Gradient03.svg" alt="" />

  <stack></stack>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import Carousel from "../components/Carousel.vue";
import item1 from "../components/carousel/Item1.vue";
import OurServices from "../components/OurServices.vue";
import ScrumService from "../components/ScrumService.vue";
import whoTrustUs from "@/components/whoTrustUs.vue";
import Stack from "@/components/Stack.vue";

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
    ScrumService,
    whoTrustUs,
    Stack,
  },
};
</script>

<style scoped>
.gradient-1 {
  max-width: 650px;
  height: 1200px;
  position: absolute;
  z-index: -1000;
  left: 0;
}

.gradient-2 {
  width: 650px;
  height: 1200px;
  position: absolute;
  z-index: -100;
  right: 0;
}

.gradient-3 {
  width: 650px;
  height: 1200px;
  position: absolute;
  z-index: -100;
  left: 0;
}
</style>