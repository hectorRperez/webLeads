<template>
  <section>
    <h2>{{ $store.state.language.HowWework.title }}</h2>
    <div class="container">
      <div class="info">
        <p>
          {{ $store.state.language.HowWework.element1 }}
        </p>
      </div>
      <div class="info">
        <p>
          {{ $store.state.language.HowWework.element2 }}
        </p>
      </div>
      <div v-if="$store.state.language.HowWework.img">
        <img src="@/assets/img/Cuadro2.svg" alt="" />
      </div>
      <div v-else>
        <img src="@/assets/img/Cuadro.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  margin-top: 5rem;

  h2 {
    text-align: center;
    font-size: 40px;
    color: white;
  }

  .container {
    margin-top: 25px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    flex-direction: column;

    .info {
      max-width: 680px;
      margin: 25px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        text-align: center;
        width: 80%;
        background: rgba(255, 255, 255, 0.37);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(1.1px);
        -webkit-backdrop-filter: blur(1.1px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 2rem;
        border-radius: 25px;
      }
    }

    img {
      margin-top: 5rem;
      width: 850px;
    }
  }
}
</style>