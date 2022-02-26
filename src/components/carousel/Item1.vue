<template>
  <div class="container animate__animated animate__zoomInDown">
    <div class="row">
      <div class="column-1">
        <small> {{ $store.state.language.header.WeAre }} </small>
        <h1>{{ $store.state.language.header.WeAreACreative }}</h1>
        <p>
          {{ $store.state.language.header.WeCreateIncredible }}
        </p>
        <button>
          {{ $store.state.language.header.btnContacto }}
          <i class="bx bx-right-arrow-alt"></i>
        </button>
      </div>
      <div class="column-2">
        <img src="../../assets/img/ilustracion_1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  color: white;
  position: relative;

  .row {
    display: flex;
    justify-content: center;
    height: 100%;

    .column-1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 40%;

      small {
        font-size: 25px;
      }

      & > * {
        margin: 8px 5px;
      }

      h1 {
        font-size: 75px;
      }

      button {
        width: 80px;
        background: #ff5072;
        width: 205px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 17px;
        cursor: pointer;
        transition: all ease 0.5s;

        &:hover {
          box-shadow: 5px 5px 10px -5px #000000;
        }

        & i {
          transform: rotate(-40deg);
          font-size: 25px;
        }
      }
    }

    .column-2 {
      height: 100%;
      display: flex;
    }
  }
}
</style>