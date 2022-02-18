<template>
  <div class="box">
    <div class="box__head d-flex align-items-center">
      <i :class="icon"></i>
      <h3 class="me-auto">{{ title }}</h3>
      <p v-if="text">{{ text }}</p>
      <button v-if="btnText">{{ btnText }}</button>
    </div>
    <div class="box__body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    btnText: String,
    title: String,
    text: String,
    icon: { type: Object, required: true },
  },
};
</script>

<style lang="scss" scoped>
// @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700&family=Lato:ital,wght@0,300;0,400;0,700;1,700&family=Noto+Sans:wght@400;700&display=swap");
.box {
  border-radius: 8px;
  padding: 17px 0 24px;
  box-shadow: var(--kudi-shadow-default) !important;

  & > * {
    padding: 0 30px;
    @media (max-width: 400px) {
      padding: 0 20px;
    }
  }

  // &__body > * {
  //   margin: 0 30px;
  //   @media (max-width: 400px) {
  //     padding: 0 20px;
  //   }
  // }

  .rrBox__footer {
    padding: 0px !important;
  }

  &__head {
    // height: 60px;
    padding-bottom: 14px;
    color: var(--kudi-primary-light);
    border-bottom: var(--kudi-border-primary);
    flex-wrap: wrap;
    display: flex;

    i {
      color: currentColor;
      font-size: 20px;
      margin-right: 18px;
    }
    h3 {
      color: var(--kudi-primary-dark);
      font-family: Cairo;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 0px !important;
    }
    p {
      color: #c1c1c1;
      font-family: Cairo;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 0px !important;
    }
    button {
      background-color: white;
      border-radius: 50px;
      border: 0.7px solid #023e4f;
      color: #023e4f;
      // margin-left: auto;
      font-family: Cairo;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: center;

      padding: 5px 25px;
    }
  }

  &__footer {
  }
}
</style>