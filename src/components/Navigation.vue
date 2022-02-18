<template>
  <header :class="{ 'scrolled-nav': scrollNav }">
    <nav>
      <div class="branding">
        <img src="../assets/img/logotipo.png" alt="" />
      </div>

      <ul v-show="!mobile" class="navigation">
        <li class="link">Home</li>
        <li class="link">About</li>
        <li class="link">Porfolio</li>
        <li class="link">Contact</li>
      </ul>

      <div class="icon">
        <i
          @click="toggleMobileNav"
          class="bx bx-menu"
          v-show="mobile"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>

      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="drowndown-nav">
          <li class="link">Home</li>
          <li class="link">About</li>
          <li class="link">Porfolio</li>
          <li class="link">Contact</li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      scrollNav: null,
      mobile: false,
      mobileNav: null,
      windowWidth: null,
    };
  },

  created() {
    this.updateScroll();
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrollNav = true;
        return;
      }
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      } else {
        this.mobile = false;
        return;
      }
    },
  },
};
</script>

<style lang="scss">
header {
  justify-content: space-between;
  padding: 10px 90px;
  background-color: var(--dark-bg-secondary);
  font-weight: 400;
  box-shadow: var(--box-shadow);
  position: fixed;
  width: 100%;
  transition: 0.5s ease all;

  nav {
    position: relative;
    display: flex;
    padding: 5px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;

    //screen > 1140
    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    ul,
    .link {
      color: var(--text-color);
      list-style-type: none;
      text-decoration: none;
    }
    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link {
      transition: 0.5s ease all;
      border-bottom: 1px solid transparent;
      cursor: pointer;

      &:hover {
        color: white;
        border-color: var(--red);
      }
    }

    .branding {
      display: flex;
      align-items: center;
      transition: 0.5s ease all;
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon {
      display: flex;
      color: white;
      position: absolute;
      top: 0;
      right: 24px;
      align-items: center;
      height: 100%;

      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }

      .icon-active {
        transform: rotate(180deg);
      }
    }

    .drowndown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      max-width: 250px;
      background-color: var(--red);
      li {
        color: white;
        &:hover {
          color: var(--text-color);
        }
      }
    }
  }
}

.scrolled-nav {
  background: red;
}
</style>
