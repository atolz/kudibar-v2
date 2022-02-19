<template>
  <div>
    <section class="form-group">
      <!-- First section. Header -->
      <section class="header">
        <kudi-label
          :text="'Public Event'"
          :color="'#023E4F'"
          :bg="'#B4E1FD'"
          style="margin-right: 10px"
        />
        <kudi-label
          :text="'Public Event'"
          :color="'#01789A'"
          bg="#C4E9F3
"
        />
        <h3 class="kudi-h5 fw-600 mt-4 mb-3">
          Business Development Tactics for Startups, SME’s and Top Businesses
        </h3>
        <div class="d-inline-flex me-4">
          <img src="/images/icons/Calendar.svg" class="my-icon" alt="" /><span
            class="body-default"
            >Thursday, January 2021</span
          >
        </div>
        <div class="d-inline-flex align-items-center">
          <img
            src="/images/icons/Time-Circle.svg"
            class="my-icon"
            alt=""
          /><span class="body-default">10:00 AM - 12:00 PM WAT</span>
        </div>
      </section>

      <section class="visual-preview">
        <div class="row align-items-center">
          <div class="col-md-4">
            <img
              class="w-100"
              src="/images/party-girls.png"
              alt="girls-party"
              style="object-fit: cover"
            />
          </div>
          <div class="col-md-8">
            <img
              class="mt-4 mt-md-0"
              src="/images/party-girls.png"
              alt="girls-party"
              style="object-fit: cover; height: 155px"
            />
          </div>
        </div>
      </section>

      <!-- Description -->
      <section class="description">
        <div class="kudi-h4">Description</div>
        <!-- <div class="title big dark">Description</div> -->
        <p class="body-default">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames tortor
          enim nisl, cras risus magna arcu. Nibh nec ornare commodo fringilla et
          turpis in sem. Leo nisl, lacinia dolor vel tempus ac. Tortor habitasse
          gravida morbi ipsum eros. Velit eu tellus sit donec tristique. Auctor
          nunc, in rhoncus pellentesque pharetra. Interdum sed a vestibulum, sed
          quam. Diam interdum tempus laoreet feugiat turpis sit. Quis magna
          euismod mollis diam pulvinar arcu lacus. Diam laoreet elit enim,
          ullamcorper. Fringilla in in varius facilisis. Mattis purus at diam
          nullam. Lectus proin cum ligula viverra est. eleifend morbi sed
          pretium.
        </p>
      </section>

      <!-- Address -->
      <section class="address">
        <div class="address d-flex gap-5 mb-4">
          <div>
            <div class="kudi-h6">Country</div>
            <span class="body-default">Nigeria</span>
          </div>
          <div>
            <div class="kudi-h6">State</div>
            <span class="body-default">Abuja</span>
          </div>
          <div>
            <div class="kudi-h6">Address</div>
            <span class="body-default">Nigeria</span>
          </div>
        </div>
        <div class="card">
          <div class="card__head">
            <i class="icon-Ticket" style="color: #f08800; font-size: 20px"></i>
            <span>General Admission</span>
          </div>
          <div class="card__body">
            <p>Normal Price</p>
            <span>Amount - N1000</span>
            <span>No. of Tickets - 50</span>
            <br />
            <p>Early Bird Price</p>
            <span>Discount - 15%</span>
            <span>No. of Tickets - 50</span>
            <span>Expiry Date - 22/01/2022</span>
          </div>
        </div>
      </section>

      <!-- RSVP -->
      <section class="rsvp">
        <h4 class="kudi-h4">Contact & RSVP.</h4>

        <div>
          <i class="icon-Message mr-4" style="color: gray"></i
          ><span>Ebuka@kudibar.com</span>
        </div>
        <div>
          <i class="icon-Call mr-4" style="color: gray"></i
          ><span>081234567890</span>
        </div>
        <div>
          <i class="icon-Twt mr-4" style="color: gray"></i
          ><span>@kudibar_Live</span>
        </div>
        <div>
          <i class="icon-Insta mr-4" style="color: gray"></i
          ><span>@kudibar_Live</span>
        </div>
        <!-- <div><i class="icon-Fb mr-4"></i><span>Ebuka@kudibar.com</span></div> -->
      </section>
    </section>
  </div>
</template>

<script>
import kudiLabel from "@/components/events/label.vue";
export default {
  components: {
    kudiLabel,
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 32px;
}
section.rsvp {
  div {
    display: inline-flex;
    margin-right: 82px;
    align-items: center;
    margin-bottom: 27px;

    i {
      margin-right: 14px;
      font-size: 18px;
    }

    span {
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: left;
      color: #023e4f;
    }
  }
}

.my-icon {
  width: 34px;
  height: 22px;
  -o-object-fit: contain;
  object-fit: contain;
}
.card {
  border: 1px solid #e9e9e9;
  border-radius: 10px;

  & > * {
    padding: 0 33px;
  }

  &__head {
    border-bottom: 1px solid #e9e9e9;
    padding-top: 26px;
    padding-bottom: 16px;
    display: flex;
    align-items: center;

    i {
      margin-right: 18px;
    }

    span {
      color: #023e4f;
      font-family: Cairo;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

  &__body {
    padding-top: 30px;
    padding-bottom: 26px;
    p {
      display: inline-flex;
      min-width: 150px;
      color: #01789a;
      font-family: Cairo;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 24px;
    }
    span {
      margin-bottom: 24px;

      margin-right: 24px;
      display: inline-flex;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: left;
      color: #617b83;
    }
  }
}
</style>