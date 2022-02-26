<template>
  <header :class="{ 'scrolled-nav': scrollNav }">
    <nav :class="{ activeMobile: mobile }">
      <a href="#">
        <div v-if="!mobile">
          <img src="../assets/img/logotipo.png" />
        </div>
        <div v-else>
          <img src="../assets/img/logo_mobile.svg" style="width: 70px" />
        </div>
      </a>

      <div class="nav__items">
        <div class="nav__item" v-show="!mobile">
          <a href="#">{{ $store.state.language.HOME }}</a>
          <a href="#">{{ $store.state.language.US }}</a>
          <a href="#service"> {{ $store.state.language.SERVICE }} </a>
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

        <div class="icon">
          <i
            @click="toggleMobileNav"
            class="bx bx-menu"
            v-show="mobile"
            :class="{ 'icon-active': mobileNav }"
          ></i>
        </div>

        <transition
          name="mobile-nav"
          :class="{ 'animate__animated animate__fadeInDown': mobileNav }"
        >
          <ul v-show="mobileNav" class="down-nav">
            <a href="#">{{ $store.state.language.HOME }}</a>
            <a href="#">{{ $store.state.language.US }}</a>
            <a href="#"> {{ $store.state.language.SERVICE }} </a>
            <a href="#">{{ $store.state.language.CONTACT }}</a>
          </ul>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      scrollNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },

  created() {
    this.updateScroll();
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },

  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 650) {
        this.mobile = true;
        return;
      } else {
        this.mobile = false;
        return;
      }
    },

    updateScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        this.scrollNav = true;
        console.log("hey");
        return;
      } else {
        this.scrollNav = false;
        this.mobileNav = false;
      }
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss">
header {
  position: fixed;
  width: 100%;
  transition: 0.5s ease all;
  z-index: 1000;

  &.scrolled-nav {
    transition: 0.5s ease all;
  }

  .activeMobile {
    padding: 10px 30px;
  }

  nav {
    color: red;
    display: flex;
    justify-content: space-between;
    padding: 25px 30px;
    background-color: var(--dark-bg-secondary);
    font-weight: 400;
    box-shadow: var(--box-shadow);
    transition: 0.5s ease all;

    .nav__items {
      display: flex;
      width: 385px;
      justify-content: flex-end;
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
          transition: 0.5s ease all;
          border-bottom: 1px solid transparent;
          cursor: pointer;

          &:hover {
            color: white;
            border-color: var(--red);
          }
        }

        & > * {
          margin: 5px;
        }
      }

      .nav__buttons {
        display: flex;

        .button_es {
          background-color: var(--red);
          color: white;
          padding: 5px 12px;
          border: none;
          cursor: pointer;
          border-right: 2px solid white;
          outline: none;
        }
        .button_en {
          background-color: var(--red);
          color: white;
          padding: 5px 12px;
          border: none;
          cursor: pointer;
          outline: none;
        }
      }

      .icon {
        display: flex;
        color: white;
        align-items: center;
        height: 100%;
        font-size: 30px;
        cursor: pointer;
        transition: 0.5s ease all;
      }
    }
  }

  .down-nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 85px;
    left: 0;
    width: 100%;
    background: var(--red);
    padding: 20px;
    z-index: 100;

    & a {
      margin: 10px 5px;
      text-decoration: none;
      color: white;
    }
  }
}
</style>