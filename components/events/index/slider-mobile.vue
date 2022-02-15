<template>
  <section class="hero-mobile hide-scrollbar">
    <div class="event-box">
      <div class="blur"></div>
      <!-- <div class="hero__btnContainer">
          <button class="hero__btn hero__btn--paid me-auto">
            <span>Paid</span>
          </button>
        </div> -->
      <button class="paid">Paid</button>
      <p>12th Dec, 2021</p>
      <h1>
        <span>Davido</span> Live <br />
        concert in Abuja!!!
      </h1>
    </div>
    <div class="event-box">
      <div class="blur"></div>
      <!-- <div class="hero__btnContainer">
          <button class="hero__btn hero__btn--paid me-auto">
            <span>Paid</span>
          </button>
        </div> -->
      <button class="paid">Paid</button>
      <p>12th Dec, 2021</p>
      <h1>
        <span>Davido</span> Live <br />
        concert in Abuja!!!
      </h1>
    </div>
    <div class="event-box">
      <div class="blur"></div>
      <!-- <div class="hero__btnContainer">
          <button class="hero__btn hero__btn--paid me-auto">
            <span>Paid</span>
          </button>
        </div> -->
      <button class="paid">Paid</button>
      <p>12th Dec, 2021</p>
      <h1>
        <span>Davido</span> Live <br />
        concert in Abuja!!!
      </h1>
    </div>
    <div class="event-box">
      <div class="blur"></div>
      <!-- <div class="hero__btnContainer">
          <button class="hero__btn hero__btn--paid me-auto">
            <span>Paid</span>
          </button>
        </div> -->
      <button class="paid">Paid</button>
      <p>12th Dec, 2021</p>
      <h1>
        <span>Davido</span> Live <br />
        concert in Abuja!!!
      </h1>
    </div>
    <div class="event-box">
      <div class="blur"></div>
      <!-- <div class="hero__btnContainer">
          <button class="hero__btn hero__btn--paid me-auto">
            <span>Paid</span>
          </button>
        </div> -->
      <button class="paid">Paid</button>
      <p>12th Dec, 2021</p>
      <h1>
        <span>Davido</span> Live <br />
        concert in Abuja!!!
      </h1>
    </div>
    <div class="event-box">
      <div class="blur"></div>
      <!-- <div class="hero__btnContainer">
          <button class="hero__btn hero__btn--paid me-auto">
            <span>Paid</span>
          </button>
        </div> -->
      <button class="paid">Paid</button>
      <p>12th Dec, 2021</p>
      <h1>
        <span>Davido</span> Live <br />
        concert in Abuja!!!
      </h1>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.hero-mobile {
  overflow: scroll;
  display: none;
  padding: 30px 0;

  @media (max-width: 900px) {
    display: flex;
  }

  .event-box {
    min-width: 146px;
    width: max-content;
    min-height: 150px;
    position: relative;

    .blur {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
    }

    &:not(:last-child) {
      margin-right: 10px;
    }

    padding: 17px 16px;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(/images/section_image_arena.webp);

    overflow: hidden;

    button.paid {
      z-index: 100;
      border: none;
      // margin-left: 10px;
      outline: none;
      border-radius: 50px;
      background-color: rgba(255, 255, 255, 0.973) !important;
      padding: 6px 13px;
      display: inline-grid;
      grid-auto-flow: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      position: relative;
      margin-bottom: 40px;
      // width: 39px;

      color: #219653 !important;
      display: inline-flex;
      font-family: Cairo;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 10px;
      letter-spacing: 0em;
      text-align: center;
    }
    h1 {
      font-family: Segoe UI;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
      position: relative;

      color: white;
      z-index: 1000;
      span {
        color: #f08800;
      }
    }
    p {
      position: relative;
      z-index: 2000;
      font-family: "Righteous", cursive;
      color: #b8e9f8;
      font-family: Righteous;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 6px;
    }
  }
}
</style>