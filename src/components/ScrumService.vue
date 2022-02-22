<template>
  <section>
    <h2>How we work</h2>
    <div class="container">
      <div class="ilustracion">
        <img src="./../assets/img/ilustracion_2.png" alt="" />
      </div>
      <div class="info">
        <p>
          {{ $store.state.language.HowWework.element1 }}
          <br />
          <br />
          {{ $store.state.language.HowWework.element2 }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
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

    .ilustracion {
      flex: 1 1 280px;

      img {
        width: 100%;
      }
    }

    .info {
      flex: 1 1 280px;

      display: flex;
      justify-content: center;
      align-items: center;
      p {
        text-align: justify;
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
  }
}
</style>