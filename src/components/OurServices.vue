<template>
  <section>
    <div class="service__info">
      <div class="service__title">
        <h2>Nuestro servicios</h2>
      </div>
      <p>
        WebLeads te ayudamos a adaptar los procesos de negocio de tu empresa
        para que tu puedas dedicarte a lo que realmente te importa, facilitando
        de este modo la consecución de tus objetivos, aportando valor añadido a
        tus clientes, y aumentando la productividad de tus recursos
      </p>
    </div>
    <div class="box">
      <div class="item">
        <img src="./../assets/img/Icon.png" alt="" />
        <h3>Solución Digital</h3>
        <p>Adaptar los procesos de negocio de las empresas a la era digita</p>
        <button class="btnBlue">Saber más</button>
      </div>

      <div class="item">
        <img src="./../assets/img/Icon_2.png" alt="" />
        <h3>Diseño UI/UX</h3>
        <p>Brindamos servicios de Diseño UI/UX, y por supuesto con</p>
        <button class="btnRed">Saber más</button>
      </div>

      <div class="item">
        <img src="./../assets/img/Icon_3.png" alt="" />
        <h3>Automatizacion de procesos de negocios</h3>
        <p>We provide Graphic Design services, with the best designers</p>
        <button class="btnYellow">Saber más</button>
      </div>

      <div class="item">
        <img src="./../assets/img/Icon_4.png" alt="" />
        <h3>Equipo dedidca y Team augmenting</h3>
        <p>Create a platform with the best and coolest quality from us.</p>
        <button class="btnYellow">Saber más</button>
      </div>

      <div class="item">
        <img src="./../assets/img/Icon_5.png" alt="" />
        <h3>Consultoría de operaciones y procesos</h3>
        <p>We provide Photography services, and of course with the best</p>
        <button class="btnBlue">Saber más</button>
      </div>

      <div class="item">
        <img src="./../assets/img/Icon_6.png" alt="" />
        <h3>Soluciones de Business Intelligence</h3>
        <p>Create a platform with the best and coolest quality from us.</p>
        <button class="btnRed">Saber más</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@mixin buttonServiceBlue() {
  margin-top: 20px;
  background-color: transparent;
  border-color: #2babf0;
  padding: 5px 25px;
  border-radius: 5px;
  color: #2babf0;
  cursor: pointer;
}

@mixin buttonServiceRed() {
  margin-top: 20px;
  background-color: transparent;
  border-color: #ff304a;
  padding: 5px 25px;
  border-radius: 5px;
  color: #ff304a;
  cursor: pointer;
}

@mixin buttonServiceYellow() {
  margin-top: 20px;
  background-color: transparent;
  border-color: #ffcc01;
  padding: 5px 25px;
  border-radius: 5px;
  color: #ffcc01;
  cursor: pointer;
}

section {
  position: relative;
  top: 120px;
  padding: 1rem 10%;

  .service__info {
    width: 100%;
    margin: auto;

    .service__title {
      font-size: 30px;
      color: white;
      text-align: center;
      margin-bottom: 10px;
    }

    p {
      width: 80%;
      margin: auto;
      font-size: 20px;
      color: white;
      text-align: center;
      font-weight: 200;
    }
  }

  .box {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    text-align: center;

    .item {
      flex: 1 1 30%;
      padding: 1rem;
      margin: 25px 10px;

      h3 {
        color: white;
        margin-bottom: 2rem;
      }

      p {
        color: #ffffff;
      }

      .btnBlue {
        @include buttonServiceBlue();
      }

      .btnRed {
        @include buttonServiceRed();
      }

      .btnYellow {
        @include buttonServiceYellow();
      }
    }
  }
}
</style>