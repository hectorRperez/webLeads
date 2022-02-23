<template>
  <section>
    <div class="container">
      <h1>{{ $store.state.language.customers.customerTitle }}</h1>
      <p>
        With more than 100 projects completed since 2016, these are some of the
        clients who work with us.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
section {
  width: 60%;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  .container {
    text-align: center;

    h1 {
      color: white;
      font-size: 40px;
      margin-bottom: 2rem;
    }

    p {
      width: 80%;
      margin: auto;
      color: white;
    }
  }
}
</style>