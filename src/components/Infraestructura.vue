<template>
  <section>
    <h2>{{ $store.state.language.infraestructura.title }}</h2>
    <div class="container">
      <div class="box">
        <img src="@/assets/img/infra_1.jpg" alt="" />
        <figcaption>
          <h3>{{ $store.state.language.infraestructura.item1 }}</h3>
        </figcaption>
      </div>
      <div class="box">
        <img src="@/assets/img/infra_3.jpg" alt="" />
        <figcaption>
          <h3>{{ $store.state.language.infraestructura.item2 }}</h3>
        </figcaption>
      </div>
      <div class="box">
        <img src="@/assets/img/infra_2.jpg" alt="" />
        <figcaption>
          <h3>{{ $store.state.language.infraestructura.item3 }}</h3>
        </figcaption>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px 0;

  h2 {
    text-align: center;
    color: white;
    font-size: 42px;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .box {
      text-align: center;
      img {
        height: 380px;
        max-width: 300px;
        object-fit: cover;
        filter: grayscale(95%);
        cursor: pointer;

        &:hover {
          filter: grayscale(0%);
        }
      }

      figcaption {
        font-size: 18px;
        width: 60%;
        margin: 15px auto;
        color: white;
      }
    }
  }
}
</style>