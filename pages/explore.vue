<template>
  <div>
    <!-- Web Slider -->
    <slider-web />

    <main class="my-container">
      <!-- Mobile Slider -->
      <slider-mobile />
      <!-- Filters -->
      <nav class="filter row py-2 py-md-5">
        <div class="col-sm-12 d-flex">
          <ul class="pul" style="padding-left: 0px !important">
            <li class="chip" v-for="(nav, i) in filters" :key="i">
              <a
                href="#"
                class="chip-content"
                @click.prevent="toggleModalScreen(i)"
              >
                <span v-if="nav.icon == undefined" class="chip__text">{{
                  nav.title
                }}</span>
                <i v-if="nav.icon !== undefined" :class="nav.icon"></i>
              </a>
            </li>
          </ul>
          <svg class="svg-icon icon-Cancle ms-3 mt-2" style="cursor: pointer">
            <use xlink:href="/images/sprite.svg#icon-search"></use>
          </svg>
        </div>
      </nav>
      <!-- Events Container -->
      <events-box />

      <div class="my-nav">
        <button class="round-btn-nav active">
          <i class="icon-arr-left-spear"></i>
        </button>
        <button class="round-btn-nav">
          <i class="icon-arr-right-spear"></i>
        </button>
      </div>
      <!-- Get Started -->
      <section class="started mb-5">
        <h2>Getting started is easy!</h2>
        <p>
          Kudibar is your one stop shop for event <br />
          organizing and hosting
        </p>
        <button class="kbtn-1 kbtn">
          Get Sarted <i class="icon-arr-right ms-3"></i>
          <!-- <svg class="svg-icon icon-arr-right" style="color: red">
            <use xlink:href="/images/sprite.svg#icon-arr-right"></use>
          </svg> -->
        </button>
      </section>
    </main>
  </div>
</template>

<script>
import eventsBox from "@/components/events/explore/all";
import sliderMobile from "@/components/events/explore/slider-mobile";
import sliderWeb from "@/components/events/explore/slider-web";

export default {
  data() {
    return {
      filters: [
        {
          title: "Description",
          active: true,
        },
        {
          title: "Schedules",
          active: false,
        },
        {
          title: "Payments",
          active: false,
        },
        {
          title: "Partners",
          active: false,
        },
        {
          title: "Media",
          active: false,
        },
        {
          title: "Payment Voucher",
          active: false,
        },
        {
          title: "Contacts",
          active: false,
        },
        {
          title: "Refferal Link",
          active: false,
        },
        {
          title: "Speakers",
          active: false,
        },
        {
          title: "Team Members",
          active: false,
        },
      ],
    };
  },
  components: {
    eventsBox,
    sliderMobile,
    sliderWeb,
  },
};
</script>

<style scoped lang="scss">
.pul {
  display: flex;
  overflow-x: scroll;
}

.my-container {
  // max-width: 1400px;
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
}
.started {
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
  h2 {
    font-family: Cairo;
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 62px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--kudi-primary-dark);
    @media (max-width: 900px) {
      font-size: 30px;
    }
  }

  p {
    font-family: Segoe UI;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--kudi-primary-dark);

    margin-bottom: 41px !important ;
  }

  button {
    font-family: Cairo;
    font-size: 14px !important;
    font-style: normal;
    font-weight: 400 !important;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #edf6f8 !important;
    background-color: var(--kudi-primary-dark);
  }
}

.my-nav {
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 100px;
  @media (max-width: 900px) {
    margin-bottom: 10px;
  }
}
</style>