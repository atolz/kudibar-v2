<template>
  <div class="container" :style="{ '--value': value, '--size': size }">
    <h1>{{ value }}%</h1>
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
  props: ["size", "value"],
};
</script>

<style lang="scss" scoped>
$progress-bar-stroke-width: 2.5;
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
  stroke: rgb(1, 120, 154);
  stroke-dasharray: 100;
  stroke-dashoffset: calc(100 - var(--value));
  animation-fill-mode: forwards;
  stroke-linecap: round;
  stroke-width: $progress-bar-stroke-width;
  transition: stroke-dashoffset 1s ease-in-out;
  animation: circle 2s linear;
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
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }
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