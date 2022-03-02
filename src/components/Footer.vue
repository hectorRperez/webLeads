<template>
  <footer class="footer">
    <div class="container">
      <div class="column1">
        <img src="@/assets/img/logotipo.png" alt="" />
        <p>
          <strong>
            {{ $store.state.language.footer.column1.weAreWebleads }}
          </strong>
          <br />
          {{ $store.state.language.footer.column1.content }}
        </p>

        <div class="social">
          <a href="#">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="#">
            <i class="bx bxl-facebook-circle"></i>
          </a>
          <a href="#">
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
      </div>

      <div class="column2">
        <h2>{{ $store.state.language.footer.column2.navigation }}</h2>
        <ul>
          <li>
            <a href="#"> {{ $store.state.language.footer.column2.item1 }} </a>
            <a href="#"> {{ $store.state.language.footer.column2.item2 }} </a>
            <a href="#"> {{ $store.state.language.footer.column2.item3 }} </a>
            <a href="#"> {{ $store.state.language.footer.column2.item4 }} </a>
          </li>
        </ul>
      </div>
      <div class="column3">
        <h2>{{ $store.state.language.footer.column3.contact }}</h2>
        <ul>
          <li>
            <i class="bx bx-mail-send" style="color: #ff304a"></i>
            <p>{{ $store.state.language.footer.column3.item1 }}</p>
          </li>
          <li>
            <i class="bx bxs-map" style="color: #feca09"></i>
            <p>
              {{ $store.state.language.footer.column3.item2 }}
            </p>
          </li>
          <li>
            <i class="bx bxs-map" style="color: #2babf0"></i>
            <p>
              {{ $store.state.language.footer.column3.item3 }}
            </p>
          </li>
          <li>
            <i class="bx bxs-map" style="color: #ff304a"></i>
            <p>
              {{ $store.state.language.footer.column3.item4 }}
            </p>
          </li>
        </ul>
      </div>
      <div class="column4">
        <h2>{{ $store.state.language.footer.column4.title }}</h2>
        <input type="text" placeholder="email" />
        <i class="bx bx-send"></i>
      </div>
    </div>
    <div class="derechos">
      <p>{{ $store.state.language.footer.column5.item1 }}</p>
      <div class="derechos__items">
        <a href="#"> {{ $store.state.language.footer.column5.item2 }} </a>
        <small> | </small>
        <a href="#"> {{ $store.state.language.footer.column5.item3 }} </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  color: white;
  background: #0c0c17;
  .container {
    padding: 6rem;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 35px;

    & > * {
      flex: 1 1 250px;
    }

    .column1 {
      display: flex;
      flex-direction: column;
      gap: 30px;

      img {
        width: 150px;
      }

      .social {
        display: flex;
        gap: 18px;
        a {
          font-size: 25px;
          text-decoration: none;
          color: white;
        }
      }
    }

    .column2 {
      h2 {
        margin-bottom: 10px;
      }

      & ul li {
        display: flex;
        flex-direction: column;

        & a {
          text-decoration: none;
          color: white;
          margin: 5px 0;
        }
      }
    }

    .column3 {
      ul {
        margin-top: 20px;
        & li {
          display: flex;
          margin: 15px 0;
          gap: 10px;
          flex-wrap: wrap;
          p {
            width: 85%;
          }

          i {
            font-size: 24px;
          }
        }
      }
    }

    .column4 {
      position: relative;

      input {
        margin-top: 20px;
        padding: 10px;
        border-radius: 8px;
        width: 90%;
        background: rgb(131, 131, 131);
        border: none;
        outline: none;

        &::placeholder {
          color: #d9dbe1;
        }
      }
      i {
        position: absolute;
        top: 60px;
        right: 40px;
        transform: rotate(-40deg);
        cursor: pointer;
      }
    }
  }

  .derechos {
    display: flex;
    position: relative;
    top: -35px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;

    p {
      margin-bottom: 25px;
    }
    text-align: center;

    .derechos__items {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;

      & a {
        text-decoration: none;
        color: white;
      }
    }
  }
}
</style>