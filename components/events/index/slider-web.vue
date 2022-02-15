<template>
  <section class="hero">
    <div class="box-1">
      <div class="blur"></div>
      <div class="hero__btnContainer">
        <button class="hero__btn hero__btn--paid me-auto">
          <span>Paid</span>
        </button>
        <!-- <button class="hero__btn hero__btn--share ms-auto">
            <i class="icon-Share"></i>
          </button>
          <button class="hero__btn hero__btn--like">
            <svg class="svg-icon">
              <use xlink:href="/images/sprite.svg#icon-love-card"></use>
            </svg>
          </button> -->
      </div>
      <p>12th Dec, 2021</p>
      <h1>
        <span>Davido</span> Live <br />
        concert in Abuja!!!
      </h1>
      <button class="hero__button">More Details</button>
    </div>
    <div class="box-2">
      <div class="blur"></div>
      <div class="hero__btnContainer">
        <button class="hero__btn hero__btn--paid me-auto">
          <span>Paid</span>
        </button>
        <!-- <button class="hero__btn hero__btn--share ms-auto">
            <i class="icon-Share"></i>
          </button>
          <button class="hero__btn hero__btn--like">
            <svg class="svg-icon">
              <use xlink:href="/images/sprite.svg#icon-love-card"></use>
            </svg>
          </button> -->
      </div>
      <p>12th Dec, 2021</p>
      <h1>
        Lagos<span> Fashion</span> <br />
        Fair
      </h1>
      <button class="hero__button">More Details</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.hero {
  // height: 60vh;
  display: none;
  flex-wrap: wrap;

  @media (min-width: 900px) {
    display: flex;
  }

  .blur {
    background-color: rgba(0, 0, 0, 0.274);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
  }

  &__btn {
    border: none;
    // margin-left: 10px;
    outline: none;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.973) !important;
    padding: 10px 10px;
    height: 38px;
    display: inline-grid;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: relative;
    color: #023e4f !important;

    &Container {
      position: absolute;
      top: 35px;
      padding: 0 32px;
      display: flex;
      // right: 24px;
      // margin-left: auto;
      width: 100%;
      z-index: 1000;
    }

    span {
      // margin-left: 16px;
    }

    &--paid {
      color: #219653 !important;
      display: inline-flex;
      width: 71px;
      font-family: Cairo;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 10px;
      letter-spacing: 0em;
      text-align: center;
    }
    &--like {
      color: #f08800 !important;
      margin-left: 15px;
      width: 38px;
      height: 38px;
    }
    &--share {
      color: #023e4f !important;
      width: 38px;
      height: 38px;
      margin-left: auto;
    }
  }

  & > div {
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
    position: relative;
    flex: 1 1;
    // min-width: max-content;
    padding: 214px 50px 148px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 768px) {
      padding: 120px 50px 87px;
    }

    &:first-child {
      background-image: url(/images/section_image_arena.webp),
        linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    }
    &:nth-child(2) {
      background-image: url(/images/section_image_arena.webp),
        linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    }
  }

  h1 {
    font-family: "Permanent Marker", cursive;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 49px;
    color: white;
    z-index: 1000;
    span {
      color: #f08800;
    }
  }
  p {
    z-index: 2000;
    font-family: "Righteous", cursive;
    color: #b8e9f8;
    font-family: Righteous;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 16px;
  }

  &__button {
    z-index: 10000;
    white-space: nowrap;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    /* Note: backdrop-filter has minimal browser support */
    height: 51.38px;
    padding: 15px 61px;
    display: grid;
    justify-content: center;
    align-content: center;
    border-radius: 50px;
    border: none;
    outline: none;
    color: #edf6f8;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
  }
}
</style>