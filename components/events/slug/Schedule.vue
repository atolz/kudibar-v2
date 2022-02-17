<template>
  <div class="form">
    <p class="kudi-body-1 kudi-text-green py-2 pt-3">
      Help people in the area discover your event and let attendees know where
      to show up.
    </p>
    <div
      class="d-flex justify-content-between my-input-grp"
      v-for="(day, index) of daysAmount"
      :key="day"
    >
      <div class="row">
        <div class="col-md-4">
          <label for="date">Date</label>
          <input
            id="date"
            type="date"
            class="kudi-input kudi-calender"
            placeholder="Title"
          />
        </div>
        <div class="col-md-4">
          <label for="date">Date</label>
          <input
            id="date"
            type="date"
            class="kudi-input kudi-calender"
            placeholder="Title"
          />
        </div>
        <div class="col-md-4">
          <label for="date">Date</label>
          <input
            id="date"
            type="date"
            class="kudi-input kudi-calender"
            placeholder="Title"
          />
        </div>
      </div>
      <div
        class="d-flex"
        @click="
          () => {
            removeDay(index);
          }
        "
      >
        <i class="icon-delete ms-auto d-inline-flex deleteIcon"></i>
      </div>
    </div>

    <div class="d-flex align-items-center py-4 pt-4 border-top">
      <button class="kbtn-1 kbtn-2 me-4">Save</button>
      <span
        @click="addDay"
        class="
          kudi-body-1
          fw-bold
          mb-0
          ms-2
          font-cario
          d-inline-flex
          ms-auto
          pointer
        "
      >
        Add another day +
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      daysAmount: [1],
    };
  },

  methods: {
    addDay() {
      this.daysAmount.push(1);
    },
    removeDay(index) {
      this.daysAmount.splice(index, 1);
    },
  },
};
</script>

<style scoped lang="scss">
.my-input-grp {
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 24px;

  & > div:nth-child(2) {
    margin-left: 16px;
  }
}
.deleteIcon {
  cursor: pointer;
  padding: 15px;
  display: grid;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  background-color: red;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: white;
}
</style>