<template>
  <div
    class="container"
    :style="{ '--value': 100 - value, '--size': size, '--color': color }"
  >
    <h1 v-if="type == 'percent'" class="variant">{{ value }}%</h1>
    <h1 v-else>
      {{ value }}
      <p>Out of 5</p>
    </h1>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 36">
      <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />

      <circle
        cx="16"
        cy="16"
        r="15.9155"
        class="progress-bar__progress js-progress-bar"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: ["size", "value", "type", "color"],
};
</script>

<style lang="scss" scoped>
$progress-bar-stroke-width: 1.8;
$progress-bar-size: 120px;

svg {
  height: var(--size);
  transform: rotate(-90deg) scale(1, -1);
  width: var(--size);
}

.progress-bar__background {
  fill: none;
  stroke: #e2eff0;
  stroke-width: $progress-bar-stroke-width;
}

.progress-bar__progress {
  fill: none;
  stroke: #e2eff0;
  stroke: var(--color);
  stroke-dasharray: 100;
  stroke-dashoffset: calc(100 - var(--value));
  stroke-dashoffset: var(--value);
  animation-fill-mode: forwards;
  stroke-linecap: round;
  stroke-width: $progress-bar-stroke-width;
  transition: stroke-dashoffset 1s ease-in-out;
  animation: circle 1s linear;
}

.container {
  position: relative;
  // background: red;
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  // width: $progress-bar-size;
  width: var(--size);
  height: var(--size);

  h1 {
    position: absolute;
    margin: 0 auto;

    text-align: center;
    display: block;
    color: currentColor;
    z-index: 2;
    color: var(--color);

    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;

    p {
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: center;
      margin-top: 8px;
      color: #617b83;
      margin-bottom: 0 !important;
    }
  }
}

.variant {
  font-family: Roboto;
  font-size: 14px !important;
  font-style: normal !important;
  font-weight: 500 !important;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
}

@keyframes circle {
  0% {
    stroke-dashoffset: 100;
  }
  100% {
    stroke-dashoffset: 70;
  }
}
</style>