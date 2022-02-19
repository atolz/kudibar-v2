<template>
  <div
    class="statCard d-flex justify-content-between align-items-center shadow-sm"
    :style="{ '--color': color }"
  >
    <span>{{ name }}</span>
    <span>{{ count }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
};
</script>


<style  lang="scss" scoped>
.statCard {
  padding: 24px;
  border-radius: 8px;
  box-shadow: var(--kudi-shadow-default) !important;

  span:nth-child(1) {
    // color: #f08800;
    color: var(--color);
    font-weight: bold;
  }
  span:nth-child(2) {
    color: rgba(0, 0, 0, 0.836);
    font-weight: bold;
  }
}
</style>