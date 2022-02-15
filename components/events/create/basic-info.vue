<template>
  <div>
    <!-- Modal start -->
    <modal
      title="Schedule"
      :has-footer="true"
      :is-active="mediaPopout"
      @on-close="closeMediaPopout"
    >
      <div style="max-width: 483px">
        <div class="row form border-bottom">
          <div class="col-md-12">
            <label for="event title" class="kudi-label">How many days</label>
            <inc-dec class="kudi-input" style="width: 100%" />
          </div>
          <div class="col-md-6 pb-4">
            <!-- radio group start -->
            <div style="margin-bottom: 14px">
              <span class="kudi-label">Same Time</span>
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
            <!-- radio group end -->
          </div>
          <div class="col-md-6">
            <!-- radio group start -->
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
            <!-- radio group end -->
          </div>
        </div>

        <div class="row form" style="margin-top: 25px">
          <div class="col-sm-6">
            <label for="date">Date</label>
            <input
              id="date"
              type="date"
              class="kudi-input kudi-calender"
              placeholder="Title"
            />
          </div>
          <div class="col-sm-6">
            <label for="time" class="">Time</label>
            <input
              id="event title"
              type="time"
              class="kudi-input kudi-calender"
              placeholder="Title"
            />
          </div>
          <div class="col-sm-6">
            <label for="Duration">Duration</label>
            <input
              id="Duration"
              type="text"
              class="kudi-input"
              placeholder="Title"
            />
          </div>
          <div class="col-sm-6">
            <label for="Time Zone">Time Zone</label>
            <select name="choice" id="Time Zone" class="kudi-input kudi-select">
              <option value="first">First Value</option>
              <option value="second" selected>Second Value</option>
              <option value="third">Third Value</option>
            </select>
          </div>
        </div>

        <p class="kudi-body-1 fw-bold mb-3 ms-2 font-cario cursor-pointer">
          Add another day +
        </p>
      </div>

      <template v-slot:footer
        ><button class="kbtn-1 kbtn-2 me-4">Save</button>
      </template>
    </modal>
    <!-- End of modal -->

    <section class="info-section form-group">
      <h3 class="kudi-h3">Basic Info</h3>
      <p class="kudi-body-1">
        Name your event and tell your attendees why they should come. Add
        details that highlight what makes it unique.
      </p>
      <label for="event title" class="kudi-label">Event title</label>
      <input
        id="event title"
        type="text"
        class="kudi-input"
        placeholder="Title"
      />
      <label for="event title" class="kudi-label">Event title</label>
      <textarea
        id="story"
        name="story"
        rows="4"
        cols="33"
        class="kudi-input"
        placeholder="Type here"
      >
      </textarea>
    </section>
    <section class="location form-group">
      <h3 class="kudi-h3">Location</h3>
      <p class="kudi-body-1">
        Help people in the area discover your event and let attendees know where
        to show up.
      </p>
      <div class="d-flex mb-4 mt-2">
        <button class="kbtn-1 me-4">
          <i class="icon-Location"></i>
          <span>Offline event</span>
        </button>
        <button class="kbtn-1 kbtn-1--outlined">
          <i class="icon-Wifi"></i>
          <span>Online event</span>
        </button>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <label for="event title" class="kudi-label">Venue</label>
          <input
            id="event title"
            type="text-area"
            class="kudi-input"
            placeholder="Central Park"
          />
        </div>
        <div class="col-md-6">
          <label for="country" class="kudi-label">Country</label>
          <select name="choice" id="country" class="kudi-input kudi-select">
            <option value="first" selected>Nigeria</option>
            <option value="second">Second Value</option>
            <option value="third">Third Value</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="state" class="kudi-label">State</label>
          <select name="state" id="state" class="kudi-input kudi-select">
            <option value="first" selected>Abuja</option>
            <option value="second">Second Value</option>
            <option value="third">Third Value</option>
          </select>
        </div>
      </div>
    </section>
    <section class="privacy form-group">
      <h3 class="kudi-h3">Select Privacy</h3>
      <p class="kudi-body-1">
        Make your event public or private. If you select private event, your
        event can only be accessed by anyone with your link.
      </p>
      <div class="d-flex mb-4">
        <button class="kbtn-1 kbtn-1--outlined me-4">
          <i class="icon-user-group"></i>
          <span>Offline event</span>
        </button>
        <button class="kbtn-1 kbtn-1--outlined">
          <i class="icon-Lock"></i>
          <span>Online event</span>
        </button>
      </div>
    </section>
    <section class="schedule form-group border-bottom">
      <h3 class="kudi-h3">Schedule</h3>
      <p class="kudi-body-1">
        Tell attendees when your event starts and ends so they can make plans to
        attend.
      </p>
      <div class="row">
        <div class="col-sm-4">
          <label for="date">Date</label>
          <input
            id="date"
            type="date"
            class="kudi-input kudi-calender"
            placeholder="Title"
          />
        </div>
        <div class="col-sm-4">
          <label for="time" class="">Time</label>
          <input
            id="time"
            type="time"
            class="kudi-input kudi-calender"
            placeholder="Title"
          />
        </div>
        <div class="col-sm-4">
          <label for="Duration">Duration</label>
          <input
            id="Duration"
            type="text"
            class="kudi-input"
            placeholder="Title"
          />
        </div>
        <div class="col-sm-4">
          <label for="Time Zone">Time Zone</label>
          <select name="choice" id="Time Zone" class="kudi-input kudi-select">
            <option value="first">First Value</option>
            <option value="second" selected>Second Value</option>
            <option value="third">Third Value</option>
          </select>
        </div>
      </div>
    </section>
    <p
      class="kudi-body-1 fw-bold mb-5 ms-2 font-cario"
      @click="mediaPopout = true"
    >
      Add another day +
    </p>
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