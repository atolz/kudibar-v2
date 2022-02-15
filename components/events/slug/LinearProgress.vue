<template>
  <div class="my-progress">
    <div
      class="my-progress__indicator"
      :style="{ backgroundColor: color, width: `${value}%` }"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["value", "color"],
};
</script>

<style lang="scss" scoped>
.my-progress {
  width: 100%;
  height: 7px;
  position: relative;
  border-radius: 3px;
  background-color: #cfdbe4;
  overflow: hidden;
  &__indicator {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 500px;
    height: 100%;
    z-index: 1000;
  }
}
</style>