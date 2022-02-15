<template>
  <div class="form">
    <p class="kudi-body-1 kudi-text-green py-2">
      Set the parameters of how people can access your event, either “Paid” or
      “Free”
    </p>
    <div class="d-flex mb-4 mt-2">
      <button class="kbtn-1 kbtn-2 kbtn me-4">Paid event</button>
      <button class="kbtn-1 kbtn-2 kbtn kbtn-2--outlined">Free Event</button>
    </div>

    <div class="row">
      <div class="col-md-12">
        <label for="Time Zone">Payment Category</label>
        <select
          name="choice"
          id="Time Zone"
          class="kudi-input kudi-select"
          style="background-position: 97%"
        >
          <option value="first">First Value</option>
          <option value="second" selected>Select One</option>
          <option value="third">Third Value</option>
        </select>
      </div>
      <div class="col-md-4">
        <label for="event title" class="kudi-label">Price</label>
        <input
          id="event title"
          type="text-area"
          class="kudi-input"
          placeholder="Central Park"
        />
      </div>
      <div class="col-md-4 d-flex md-justify-content-center">
        <div>
          <label for="event title" class="kudi-label">Quantity</label>
          <inc-dec class="kudi-input" />
        </div>
      </div>
      <div class="col-md-4">
        <div style="margin-bottom: 14px">
          <span class="kudi-label">Customize Schedule</span>
        </div>
        <div class="kudi-radio-group">
          <input
            id="No"
            class="kudi-radio-input"
            type="radio"
            name="early-bird"
            placeholder="Central Park"
          />
          <label for="No" class="kudi-radio-label">
            <span class="kudi-radio-btn"></span>
            No</label
          >
        </div>
        <div class="kudi-radio-group">
          <input
            id="Yes"
            class="kudi-radio-input"
            type="radio"
            name="early-bird"
            placeholder="Central Park"
          />
          <label for="Yes" class="kudi-radio-label">
            <span class="kudi-radio-btn"></span>
            Yes</label
          >
        </div>
      </div>
    </div>

    <div class="d-flex py-4">
      <span
        class="
          kudi-body-1 kudi-text-default
          fw-bold
          font-cario
          d-inline-flex
          me-auto
        "
        style="margin-bottom: 0px"
      >
        Add payment category +
      </span>
    </div>
    <div class="d-flex align-items-center border-top py-4">
      <button class="kbtn-1 kbtn-2 me-4">Update</button>
    </div>
  </div>
</template>

<script>
import incDec from "@/components/events/inc-dec";
export default {
  components: {
    incDec,
  },
};
</script>

<style>
</style>