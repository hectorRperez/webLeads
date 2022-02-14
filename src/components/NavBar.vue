<template>
  <nav>
    <div class="logo">
      <a href="#">
        <img alt="Webleads logo" src="../assets/img/logotipo.png" />
      </a>
    </div>

    <div class="nav__items">
      <div class="nav__item">
        <a href="#">{{ $store.state.language.HOME }}</a>
        <a href="#">{{ $store.state.language.US }}</a>
        <a href="#"> {{ $store.state.language.SERVICE }} </a>
        <a href="#">{{ $store.state.language.CONTACT }}</a>
      </div>

      <div class="nav__buttons">
        <button
          class="button_es"
          @click="$store.dispatch('changeLanguage', 'es')"
        >
          ES
        </button>

        <button
          class="button_en"
          @click="$store.dispatch('changeLanguage', 'en')"
        >
          EN
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
nav {
  color: red;
  display: flex;
  justify-content: space-between;
  padding: 25px 90px;
  background-color: var(--dark-bg-secondary);
  font-weight: 400;
  box-shadow: var(--box-shadow);

  .logo {
    img {
      width: 153px;
      height: 32px;
      cursor: pointer;
    }
  }

  .nav__items {
    display: flex;
    width: 372px;
    justify-content: space-around;
    align-items: center;
    gap: 15px;

    .nav__item {
      display: flex;
      width: 85%;
      justify-content: space-around;
      font-size: 15px;
      a {
        text-decoration: none;
        color: var(--text-color);

        &:hover {
          color: white;
        }
      }

      & > * {
        margin: 5px;
      }
    }

    .nav__buttons {
      width: 120px;

      .button_es {
        background-color: var(--red);
        color: white;
        padding: 5px 12px;
        border: none;
        cursor: pointer;
        border-right: 2px solid white;
      }
      .button_en {
        background-color: var(--red);
        color: white;
        padding: 5px 12px;
        border: none;
        cursor: pointer;
      }
    }
  }
}
</style>