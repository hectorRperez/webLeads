<template>
  <div class="carousel">
    <div class="carousel-inner">
      <carousel-item
        v-for="(slide, index) in slides"
        :slide="slide"
        :key="`item-${index}`"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
      >
        <template v-slot:content>
          <item1 />
        </template>
      </carousel-item>
      <!-- <carousel-control @prev="prev" @next="next"></carousel-control> -->
      <carousel-indicator
        :total="3"
        :currentIndex="currentSlide"
        @witch="witchSlide($event)"
      ></carousel-indicator>
    </div>
  </div>
</template>

<script>
import CarouselItem from "../components/carousel/CarouselItem.vue";
import CarouselControl from "../components/carousel/CarouselControl.vue";
import CarouselIndicator from "../components/carousel/CarouselIndicator.vue";
import item1 from "../components/carousel/Item1.vue";

export default {
  props: ["slides"],

  data() {
    return {
      currentSlide: 0,
      slideInterval: null,
      direction: "right",
    };
  },

  components: {
    CarouselItem,
    CarouselControl,
    CarouselIndicator,
    item1,
  },

  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },

    prev(step = -1) {
      const index =
        this.currentSlide > 0
          ? this.currentSlide + step
          : this.slides.length - 1;
      this.setCurrentSlide(index);
      this.direction = "left";
      this.startSliderTimer();
    },

    _next(step = 1) {
      const index =
        this.currentSlide < this.slides.length - 1
          ? this.currentSlide + step
          : 0;

      this.setCurrentSlide(index);
      this.direction = "right";
    },

    next(step = 1) {
      this._next(step);
      // this.startSliderTimer();
    },

    startSliderTimer() {
      this.stopSlideTimer();
      // this.slideInterval = setInterval(() => {
      //   this._next();
      // }, 5000);
    },

    stopSlideTimer() {
      clearInterval(this.slideInterval);
    },

    witchSlide(index) {
      console.log(index);
      const step = index - this.currentSlide;
      if (step > 0) {
        this.next(step);
      } else {
        this.prev(step);
      }
    },
  },

  mounted() {
    this.startSliderTimer();
  },
  beforeMount() {
    this.stopSlideTimer();
  },
};
</script>

<style  lang="scss" scoped>
.carousel {
  display: flex;
  justify-content: center;

  .carousel-inner {
    position: relative;
    top: 89px;
    width: 100%;
    height: 600px;
    overflow: hidden;
  }
}
</style>