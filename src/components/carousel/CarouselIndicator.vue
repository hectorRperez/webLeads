<template>
  <div class="carousel-indicators">
    <button
      class="carousel-indicator-item"
      v-for="(item, index) in total"
      :class="{ active: currentIndex === index }"
      :key="index"
      @click="$emit('witch', index)"
    ></button>
  </div>
</template>

<script>
export default {
  emits: ["witch"],
  props: ["total", "currentIndex"],
};
</script>

<style lang="scss" scoped>
.carousel-indicators {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1.5rem;
  z-index: 2;

  .carousel-indicator-item {
    width: 50px;
    height: 5px;
    border: none;
    cursor: pointer;
    margin: 0 5px;
    background: #f4fafa;
    outline: none;
    opacity: 0.5;
  }

  .active {
    opacity: 1;
  }
}
</style>