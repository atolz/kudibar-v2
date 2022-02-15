<template>
  <div>
    <modal
      title="The money man"
      :has-footer="true"
      :is-active="mediaPopout"
      @on-close="closeMediaPopout"
    >
      <div style="max-width: 758px">
        <h3 class="kudi-h3">Media</h3>
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
        ><button class="kbtn-1 kbtn-2 me-4">Next</button>
      </template>
    </modal>

    <section class="info-section form-group">
      <h3 class="kudi-h3">Media</h3>
      <p class="kudi-body-1">
        Set the parameters of how people can access your event, either “Paid” or
        “Free”
      </p>
      <div class="upload-box kudi-input" @click="mediaPopout = true">
        <div>
          <i class="icon-image-thumbnail"></i>
          <p class="upload-box__caption">Click to add main event picture</p>
          <p class="upload-box__dim">700px by 1500px JPEG or PNG</p>
          <label for="file"> </label>
          <input class="d-none" type="file" id="file" />
        </div>
      </div>
      <label for="video">Add Youtube or Vimeo link</label>
      <input
        class="kudi-input"
        type="text"
        placeholder="https://"
        value="https://"
      />
      <p style="color: #219653; margin-top: -16px">
        Add Youtube or Vimeo links to explain to your attendees what to expect
        in your event.
      </p>
    </section>

    <section class="form-group">
      <h3 class="kudi-h3">Contact and RSVP</h3>
      <p class="kudi-body-1">
        Add the contacts people should contact for any enquieries.
      </p>
      <div class="row">
        <div class="col-sm-12">
          <label for="event title" class="kudi-label">Email Address</label>
          <input
            id="event title"
            type="text-area"
            class="kudi-input"
            placeholder="graciahills17@gmail.com"
          />
        </div>
        <div class="col-md-6">
          <label for="event title" class="kudi-label">Phone Number</label>
          <input
            id="event title"
            type="text-area"
            class="kudi-input"
            placeholder="Central Park"
          />
        </div>
        <div class="col-md-6">
          <label for="event title" class="kudi-label">Facebook</label>
          <input
            id="event title"
            type="text-area"
            class="kudi-input"
            placeholder="Facebook (optional)"
          />
        </div>
        <div class="col-md-6">
          <label for="event title" class="kudi-label">Twitter</label>
          <input
            id="event title"
            type="text-area"
            class="kudi-input"
            placeholder="Twitter (optional)"
          />
        </div>
        <div class="col-md-6">
          <label for="event title" class="kudi-label">Instagram</label>
          <input
            id="event title"
            type="text-area"
            class="kudi-input"
            placeholder="Instagram (optional)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
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
    modal,
    svgLoader,
  },
};
</script>

<style lang="scss" scoped>
.icon-image-thumbnail {
  font-size: 40px;
  color: rgba(0, 0, 0, 0.349);
  margin-bottom: 20px;
}

.upload-box {
  height: 199px;
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;

  div {
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
  }

  &__caption {
    color: #023e4f;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }

  &__dim {
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #01789a;
  }
}
</style>