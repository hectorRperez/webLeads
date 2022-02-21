<template>
  <section>
    <div class="service__info">
      <div class="service__title">
        <h2>{{ $store.state.language.ourServices.OurService }}</h2>
      </div>
      <p>
        {{ $store.state.language.ourServices.InfoOurServices }}
      </p>
    </div>
    <div class="box">
      <div class="item">
        <img src="./../assets/img/Icon.png" alt="" />
        <h3>{{ $store.state.language.ourServices.DigitalSolution }}</h3>
        <p>{{ $store.state.language.ourServices.DigitalSolutionInfo }}</p>
        <button class="btnBlue">
          {{ $store.state.language.ourServices.btnKnowMore }}
        </button>
      </div>

      <div class="item">
        <img src="./../assets/img/Icon_2.png" alt="" />
        <h3>{{ $store.state.language.ourServices.UIDesign }}</h3>
        <p>{{ $store.state.language.ourServices.UIDesignInfo }}</p>
        <button class="btnRed">
          {{ $store.state.language.ourServices.btnKnowMore }}
        </button>
      </div>

      <div class="item">
        <img src="./../assets/img/Icon_3.png" alt="" />
        <h3>{{ $store.state.language.ourServices.Automatizacion }}</h3>
        <p>{{ $store.state.language.ourServices.AutomatizacionInfo }}</p>
        <button class="btnYellow">
          {{ $store.state.language.ourServices.btnKnowMore }}
        </button>
      </div>

      <div class="item">
        <img src="./../assets/img/Icon_4.png" alt="" />
        <h3>{{ $store.state.language.ourServices.DedicatedTeam }}</h3>
        <p>{{ $store.state.language.ourServices.DedicatedTeamInfo }}</p>
        <button class="btnYellow">
          {{ $store.state.language.ourServices.btnKnowMore }}
        </button>
      </div>

      <div class="item">
        <img src="./../assets/img/Icon_5.png" alt="" />
        <h3>{{ $store.state.language.ourServices.Operations }}</h3>
        <p>{{ $store.state.language.ourServices.OperationsInfo }}</p>
        <button class="btnBlue">
          {{ $store.state.language.ourServices.btnKnowMore }}
        </button>
      </div>

      <div class="item">
        <img src="./../assets/img/Icon_6.png" alt="" />
        <h3>{{ $store.state.language.ourServices.BusinessIntelligence }}</h3>
        <p>{{ $store.state.language.ourServices.BusinessIntelligenceInfo }}</p>
        <button class="btnRed">
          {{ $store.state.language.ourServices.btnKnowMore }}
        </button>
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