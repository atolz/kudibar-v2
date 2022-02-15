<template>
  <div class="wrapper">
    <button class="decrement" @click="decrement">-</button>
    <span class="value">{{ value }}</span>
    <button class="increment" @click="increment">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },

  methods: {
    increment() {
      if (this.value < 5) {
        this.value = this.value + 1;
      }
    },
    decrement() {
      if (this.value > 0) {
        this.value = this.value - 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  //   height: 100%;
  //   max-height: 80px;
  //   margin: 0 auto;
  border-radius: 5px;
  width: 142px;
  background-color: #f0f3f5;
  display: flex;
  padding: 17px;
  align-items: center;
  justify-content: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;

  .value {
    color: #585c67;
    margin: auto;
  }
  .increment,
  .decrement {
    border: none;
    outline: none;
    font-size: 26px;
    color: #219653;
    background-color: transparent;
  }

  .decrement {
    font-size: 29px;
    width: 30px;
  }
}
</style>