<template>
  <div class="content-box" style="background: #f5f5f7">
    <!-- Experience Virtual Events  -->
    <section class="container-fluid first-bg-img py-5 section--hero">
      <div class="container">
        <div class="col-md-7 text-white text-left text-md-start">
          <h1 class="fw-bold animate__fadeInDown">
            Experience virtual events like never before
          </h1>

          <p class="my-4 text-white text-left">
            From small meeting-boxes to supersized virtual arenas, every event
            now has a venue.
          </p>

          <nuxt-link class="btn kbtn stroke text-uppercase" to="/explore">
            Come into the Arena
          </nuxt-link>
        </div>
      </div>
    </section>

    <!-- Host Your -->

    <hero-display></hero-display>

    <!-- Arena of Events -->
    <section
      class="bg-black d-flex flex-column justify-content-center section--arena"
      id="arena"
    >
      <div class="row gy-32 px-2 ps-md-5 align-items-center">
        <div class="col-lg-6 pe-md-0 arena">
          <h2 class="sub-heading text-white text-center text-md-start">
            Arena of events
          </h2>
          <p
            class="
              col-lg-10
              my-4 my-md-32
              fw-light
              text-white text-center text-md-start
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta in
            in mauris molestie turpis.
          </p>
          <div class="d-none d-md-block">
            <nuxt-link to="/signin" class="btn kbtn w-stroke text-uppercase">
              Let's begin
            </nuxt-link>
          </div>
        </div>

        <div class="col-lg-6">
          <section class="arena-img-first">
            <div
              class="
                arena-img-first
                d-flex
                justify-content-end
                align-items-center
                mb-2
              "
            >
              <img
                class="pe-2"
                src="~/assets/images/home/a1.svg"
                alt=""
                width="40%"
              />
              <img
                class="pe-2"
                src="~/assets/images/home/a2.svg"
                alt=""
                width="40%"
              />
              <img src="~/assets/images/home/a3.svg" alt="" width="13%" />
            </div>

            <div
              class="
                arena-img-second
                d-flex
                justify-content-end
                align-items-center
                mb-2
              "
            >
              <img
                class="pe-2"
                src="~/assets/images/home/a4.svg"
                alt=""
                width="40%"
              />
              <img src="~/assets/images/home/a5.svg" alt="" width="33%" />
            </div>

            <div
              class="
                arena-img-third
                d-flex
                justify-content-end
                align-items-center
              "
            >
              <img
                class="pe-2"
                src="~/assets/images/home/a6.svg"
                alt=""
                width="40%"
              />
              <img
                class="pe-2"
                src="~/assets/images/home/a7.svg"
                alt=""
                width="40%"
              />
              <img src="~/assets/images/home/a8.svg" alt="" width="25%" />
            </div>
          </section>
        </div>
      </div>
    </section>

    <!-- Experience Arena -->
    <section
      class="
        d-flex
        flex-column
        justify-content-center
        bg-custom
        py-5
        container
        section--experience
      "
    >
      <div class="row gy-32 px-md-5 justify-content-between align-items-center">
        <div class="col pe-md-0 device">
          <h2 class="sub-heading fw-bold text-center text-md-start">
            Experience the Arena effect on any device
          </h2>

          <p class="col-lg-10 fw-light text-center text-md-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta in
            in mauris molestie turpis.
          </p>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-12">
          <img src="~/assets/images/home/macbook.svg" alt="" width="100%" />
        </div>
      </div>
    </section>

    <!-- Start / Join Event -->
    <section class="d-flex flex-column justify-content-center">
      <div class="container-fluid bg-black">
        <div class="row g-0 align-items-center">
          <!-- Start Creating -->
          <div
            class="
              col-md-6
              d-flex
              align-items-center
              justify-content-center
              py-5 py-md-72 py-lg-100
              bg-start
              start-creating
            "
          >
            <nuxt-link
              class="fs-1 fw-bold mt-1 start-title text-white py-5"
              to="/signin"
            >
              Start Creating

              <img class="ps-5" src="~/assets/images/home/arrow.svg" alt="" />
            </nuxt-link>
          </div>

          <!-- Join an event -->
          <div
            class="
              col-md-6
              d-flex
              align-items-center
              justify-content-center
              py-5 py-md-72 py-lg-100
              bg-join
              join-event
            "
          >
            <nuxt-link
              class="fs-1 fw-bold mt-1 start-title text-white py-5"
              to="/explore"
            >
              Join an event

              <img class="ps-5" src="~/assets/images/home/arrow.svg" alt="" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Virtual Event -->
    <div
      class="container-fluid virtual-events section--virtual"
      style="padding: 122px 0 186.7px"
    >
      <h2 class="text-center col-lg-6 fw-bold mx-auto">
        Virtual events on steroids
      </h2>

      <p class="col-lg-5 mx-auto text-center" style="margin: 40px 0 32px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta in in
        mauris molestie turpis.
      </p>
      <marquee behavior="scroll" direction="right" scrollamount="5">
        <div class="scroll-img container-fluid">
          <!-- <img src="~/assets/images/home/v1.svg" alt="" /> -->
          <img src="~/assets/images/home/v5.svg" alt="" />
          <img src="~/assets/images/home/v2.svg" alt="" />
          <img src="~/assets/images/home/v3.svg" alt="" />
          <img src="~/assets/images/home/v4.svg" alt="" />
          <img src="~/assets/images/home/v5.svg" alt="" />
          <img src="~/assets/images/home/v2.svg" alt="" />

          <!-- <img src="~/assets/images/home/v6.svg" alt="" /> -->
        </div>
      </marquee>
    </div>
  </div>
</template>

<script>
import svgLoader from "@/components/util/svg-loader";
import oneSlider from "@/components/util/one-slider";
// import heroDisplay from "@/components/home";
import HeroDisplay from "./hero-display.vue";

export default {
  // layout: "no-footer",

  data() {
    return {
      filters: [
        {
          title: "Masterclass",
          active: true,
        },
        {
          title: "Conference",
          active: false,
        },
        {
          title: "Parties",
          active: false,
        },
        {
          title: "Trainings",
          active: false,
        },
      ],
      activeScreen: 0,
    };
  },

  methods: {
    filterNav(i) {
      this.filters.map((v) => (v.active = false));
      this.filters[i].active = true;
      this.activeScreen = i;
    },
  },

  mounted() {},

  components: {
    svgLoader,
    oneSlider,
    HeroDisplay,
  },
};
</script>


<style lang="scss" scoped>
// Sections

.section {
  h2 {
    font-size: 24px !important;
  }
  &--hero {
    padding: 60px 0 120px 0 !important;
    @media (max-width: 700px) {
      text-align: center;
      padding: 80px 12px !important;
    }
    h1 {
      @media (max-width: 700px) {
        font-size: 34px !important;
        text-align: center;
        line-height: 1.2 !important;
      }
    }
    p {
      @media (max-width: 700px) {
        font-family: "Segoe UI", sans-serif;
        font-size: 20px;
        text-align: center;
      }
    }
  }

  &--arena {
    padding-top: 20px;
    padding-bottom: 20px;
    @media (max-width: 765px) {
      padding-top: 60px;
      padding-bottom: 20px;

      h2 {
        font-size: 40px !important;
      }
      p {
        font-size: 20px !important;
      }
    }
    .arena {
      padding-left: 142px;
      @media (max-width: 765px) {
        padding-left: 10px;
      }
    }
  }

  &--experience {
    @media (max-width: 756px) {
      h2 {
        font-size: 40px !important;
        line-height: 1.2 !important;
        // color: #57586e !important;
      }

      p {
        font-size: 20px !important;
        letter-spacing: -0.02em !important;
        color: #57586e !important;
      }
    }
  }

  &--virtual {
    padding: 122px 0px 186.7px !important;

    @media (max-width: 756px) {
      padding: 60px 15px 70px !important;
      h2 {
        font-size: 40px !important;
        line-height: 1.2 !important;
        // color: #57586e !important;
      }

      p {
        font-size: 20px !important;
        letter-spacing: -0.02em !important;
        color: #57586e !important;
      }
    }
  }
}
h1 {
  font-family: "Mark Pro", sans-serif;
}

h2 {
  font-family: "Cairo";
}

p {
  font-family: "Segeo UI", sans-serif;
}

nuxt-link,
a {
  text-decoration: none;
  font-family: "Mark Pro", sans-serif;
}

.first-bg-img {
  background: url(~assets/images/home/experience-bg.svg) no-repeat;
  background-color: #191818;
  background-size: cover;
  background-position: center bottom;

  h1 {
    font-size: 90px;
    line-height: 100%;
  }
  p {
    font-size: 24px;
    line-height: 32px;
  }
}

.host {
  h2 {
    font-family: "Cairo", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 100%;
    color: #023e4f;
  }
  h3 {
    font-family: "Mark Pro", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 100%;
  }
}

.arena {
  h2 {
    font-family: "Mark Pro", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 56px;
    line-height: 100%;
  }
  p {
    font-family: "Segoe UI", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
  }
}

.device {
  h2 {
    font-family: "Mark Pro", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 68px;
    line-height: 100%;
  }
  p {
    font-family: "Segoe UI", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    color: #272525;
  }
}

.start-title {
  font-family: "Mark Pro", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 100%;
}

.virtual-events {
  h2 {
    font-family: "Mark Pro", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 90px;
    line-height: 100%;
    color: #272525;
  }
  p {
    font-family: "Segoe UI", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    color: #272525;
  }
}

.start-creating {
  background: url(~/assets/images/home/sc.png) no-repeat;
  background-size: cover;
  background-position: center;
}

.start-creating:hover {
  transform: scale(1.1);
  transition: transform 0.5s ease;
}

.join-event {
  background: url(~/assets/images/home/je.png) no-repeat;
  /* height: 100%; */
  background-size: cover;
  background-position: center;
}

.join-event:hover {
  transform: scale(1.1);
  transition: transform 0.5s ease;
}

.arena-img-first img:hover {
  transform: scale(1.1);
  transition: transform 0.5s ease;
}

.arena-img-second img:hover {
  transform: scale(1.1);
  transition: transform 0.5s ease;
}

.arena-img-third img:hover {
  transform: scale(1.1);
  transition: transform 0.5s ease;
}

.scroll-img img:hover {
  transform: scale(1.1);
  transition: transform 0.5s ease;
}

.scroll-img {
  @media (max-width: 756px) {
    img {
      width: 130px;
    }
  }
}
</style>
