<template>
  <section>
    <div class="container">
      <h2>{{ $store.state.language.stack.stackTitle }}</h2>
      <p>
        {{ $store.state.language.stack.stackInfo }}
      </p>
      <div class="stack__container">
        <img src="@/assets/img/Laravel.png" alt="" />
        <img src="@/assets/img/veus.png" alt="" />
        <img src="@/assets/img/aws.png" alt="" />
        <img src="@/assets/img/Docker.png" alt="" />
        <img src="@/assets/img/React.png" alt="" />
        <img src="@/assets/img/symfony.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10rem;

  .container {
    margin-top: 5rem;
    width: 65%;

    h2 {
      text-align: center;
      font-size: 40px;
      color: white;
    }

    p {
      margin-top: 2rem;
      color: white;
      text-align: center;
    }

    .stack__container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      img {
        flex: 1 1 250px;
        height: 180px;
        object-fit: none;
      }
    }
  }
}
</style>