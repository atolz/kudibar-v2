<template>
  <div class="label" :style="{ '--bg-color': bg, '--color': color }">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: ["text", "bg", "color"],
};
</script>

<style lang="scss" scoped>
.label {
  height: 27px;
  padding: 0 24px;
  color: var(--color);
  background-color: var(--bg-color);
  display: inline-grid;
  justify-content: center;
  align-content: center;
  align-items: center;

  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  text-align: left;

  border-radius: 8px;
}
</style>