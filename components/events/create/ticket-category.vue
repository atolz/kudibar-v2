<template>
  <div>
    <modal
      title="Early Bird Price"
      :has-footer="true"
      :is-active="mediaPopout"
      @on-close="closeMediaPopout"
    >
      <div style="max-width: 758px">
        <p class="kudi-body-1 kudi-text-green">
          Set the parameters of how people can access your event, either “Paid”
          or “Free”
        </p>
        <div class="row form">
          <div class="col-md-4">
            <label for="event title" class="kudi-label">Discount</label>
            <input
              id="event title"
              type="text-area"
              class="kudi-input"
              placeholder="%0.00"
            />
          </div>
          <div class="col-md-4">
            <label for="event title" class="kudi-label">Ticket</label>
            <input
              id="event title"
              type="text-area"
              class="kudi-input"
              placeholder="0"
            />
          </div>
          <div class="col-md-4">
            <label for="date">Date</label>
            <input id="date" type="date" class="kudi-input kudi-calender" />
          </div>
        </div>
      </div>

      <template v-slot:footer
        ><button class="kbtn-1 kbtn-2 me-4">Save</button>
      </template>
    </modal>
    <section class="info-section form-group">
      <h3 class="kudi-h3">Ticket Categories</h3>
      <p class="kudi-body-1">
        Set the parameters of how people can access your event, either “Paid” or
        “Free”
      </p>

      <div class="d-flex mb-4 mt-2">
        <button class="kbtn-1 me-4">
          <span>Paid Event</span>
        </button>
        <button class="kbtn-1 kbtn-1--outlined">
          <span>Free Event</span>
        </button>
      </div>

      <div class="row">
        <div class="col-md-7 col-lg-8">
          <label for="country" class="kudi-label">Payment Category</label>
          <select name="choice" id="country" class="kudi-input kudi-select">
            <option value="first" selected>Select One</option>
            <option value="second">Second Value</option>
            <option value="third">Third Value</option>
          </select>
        </div>
        <div class="col-md-5 col-lg-4">
          <label for="country" class="kudi-label">Currency</label>
          <select name="choice" id="country" class="kudi-input kudi-select">
            <option value="first" selected>NGN</option>
            <option value="second">Second Value</option>
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
        <div class="col-md-4 d-flex-col align-items-center">
          <span class="kudi-label mt-2">Early Bird</span>
          <div class="mt-3 mb-3">
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
            <div class="kudi-radio-group" @click="mediaPopout = true">
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
        <div class="col-sm-12">
          <label for="event title" class="kudi-label"
            >Ticket Description (optional)</label
          >
          <textarea
            id="story"
            name="story"
            rows="4"
            cols="33"
            class="kudi-input"
            placeholder="Type here"
          >
          </textarea>
        </div>
      </div>

      <p class="kudi-body-1 fw-bold mb-5 ms-2 font-cario">
        Add payment category +
      </p>
    </section>
  </div>
</template>

<script>
import incDec from "@/components/events/inc-dec.vue";
import svgLoader from "@/components/util/svg-loader";
import modal from "@/components/util/modal";

export default {
  data() {
    return {
      mediaPopout: false,
    };
  },

  methods: {
    closeMediaPopout(action) {
      this.mediaPopout = action;
    },
  },

  components: {
    incDec,
    modal,
    svgLoader,
  },
};
</script>


<style>
</style>