<template>
  <section>
    <div class="container">
      <h2>{{ $store.state.language.stack.stackTitle }}</h2>
      <p>
        {{ $store.state.language.stack.stackInfo }}
      </p>
      <div class="stack__container">
        <div class="stack__item">
          <img src="@/assets/img/Laravel.png" alt="" />
          <h3>Laravel</h3>
        </div>

        <div class="stack__item">
          <img src="@/assets/img/veus.png" alt="" />
          <h3>VueJs</h3>
        </div>

        <div class="stack__item">
          <img src="@/assets/img/aws.png" alt="" />
          <h3>Amazon Web Services</h3>
        </div>

        <div class="stack__item">
          <img src="@/assets/img/Docker.png" alt="" />
          <h3>Docker</h3>
        </div>

        <div class="stack__item">
          <img src="@/assets/img/React.png" alt="" />
          <h3>ReactJs</h3>
        </div>

        <div class="stack__item">
          <img src="@/assets/img/symfony.png" alt="" />
          <h3>Symfony</h3>
        </div>
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
  }
}

.stack__container {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .stack__item {
    text-align: center;
    flex: 1 1 250px;
    margin: 10px 5px;

    h3 {
      margin: 15px 5px;
      color: white;
    }

    img {
      height: 55%;
    }
  }
}
</style>