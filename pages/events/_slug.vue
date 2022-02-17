

<template>
  <div class="container px-md-2 px-xl-5 pb-5">
    <!-- <div
    class=""
    style="
      max-width: 1400px;
      width: 100%;
      margin: auto;
      padding: 0px 20px !important;
    "
  > -->
    <modal
      :title="activeFilter.title"
      :is-active="modalActive"
      @on-close="modalClose"
    >
      <div style="max-width: 758px">
        <div v-if="filters[0].active">
          <Description />
        </div>
        <div v-if="filters[1].active"><Schedule /></div>
        <div v-if="filters[2].active"><Payments /></div>
        <div v-if="filters[3].active"><Partners /></div>
        <div v-if="filters[4].active">
          <media :event="{}" />
        </div>
        <div v-if="filters[6].active"><RSVP /></div>
        <div v-if="filters[7].active"><Referal /></div>
        <div v-if="filters[8].active"><Speakers /></div>
        <div v-if="filters[9].active"><Team /></div>
        <div v-if="filters[10].active"><Settings /></div>
      </div>

      <!-- <template v-slot:footer
        ><button class="kbtn-1 kbtn-2 me-4">Next</button>
      </template> -->
    </modal>

    <div class="row back align-items-center py-4 py-md-5">
      <div class="col">
        <button class="back__btn">
          <i class="icon-arrow-spear-left"></i>
        </button>
        <h3 class="my-title ms-3" style="display: inline">Spirit lead me</h3>
        <!-- <span class="back__text">Back</span> -->
      </div>
    </div>
    <!-- Pills nav -->
    <nav class="row">
      <div class="col-sm-12">
        <ul class="pul hide-scrollbar" style="padding-left: 0px !important">
          <li class="chip" v-for="(nav, i) in filters" :key="i">
            <a
              href="#"
              class="chip-content"
              @click.prevent="toggleModalScreen(i)"
            >
              <span v-if="nav.icon == undefined" class="chip__text">{{
                nav.title
              }}</span>
              <!-- <i v-if="nav.icon !== undefined" :class="nav.icon"></i> -->
              <svg v-if="nav.icon !== undefined" class="svg-icon">
                <use xlink:href="/images/sprite.svg#icon-Setting"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- publish and unpublish -->
    <div class="d-flex justify-content-start align-items-center">
      <div class="pub shadow-sm m-0">
        <span>Publish and Unpublish</span>
        <div class="form-check form-switch float-end">
          <input class="form-check-input" type="checkbox" />
        </div>
      </div>

      <div class="my-badge ml-auto ms-2">Public event</div>
    </div>

    <!-- stat card -->
    <section class="row" style="margin: 37px 0px">
      <div class="col-md-3">
        <StatCard :count="4" :name="'Visits'" :color="'#F08800'" />
      </div>
      <div class="col-md-3">
        <StatCard :count="4" :name="'Interested'" :color="'#8737ED'" />
      </div>
      <div class="col-md-3">
        <StatCard :count="4" :name="'Subscribers'" :color="'#109CF1'" />
      </div>
      <div class="col-md-3">
        <StatCard :count="4" :name="'Sales'" :color="'#0C8720'" />
      </div>
    </section>

    <!-- main content -->
    <section class="row">
      <!-- Section 1 -->
      <div class="col-md-7">
        <div class="row gap-4">
          <!-- Sale Statistics -->
          <div class="col-12">
            <AnalyticsBox
              text="Created on the 29th Oct 2021"
              title="Sales Statistics"
              icon="icon-Chart"
            >
              <div class="statBox__total d-flex align-items-center">
                <div class="circular-progress">
                  <CircularProgress size="60px" value="60" />
                </div>
                <h4>Total Tickets - 50</h4>
                <p class="ms-auto">Sold - N0</p>
              </div>
              <div class="statBox__linear-progress">
                <div class="d-flex mb-3">
                  <h4>Regular tickets (N0)</h4>
                  <p class="ms-auto">Sold - 0/100</p>
                </div>
                <LinearProgress :color="'#023E4F'" :value="'50'" />
                <div class="d-flex mb-3 mt-5">
                  <h4>Regular tickets (N0)</h4>
                  <p class="ms-auto">Sold - 0/100</p>
                </div>
                <LinearProgress :color="'#F08800'" :value="'50'" />
              </div>
            </AnalyticsBox>
          </div>

          <!-- Recent Subscribers -->
          <div class="col-12">
            <AnalyticsBox
              :btnText="'View All'"
              title="Recent Subscribers"
              icon="icon-Profile"
            >
              <div
                class="
                  subsBox__user
                  d-flex
                  align-items-center
                  justify-content-between
                "
              >
                <div class="subsBox__profile">
                  <img src="/images/user-1.jpg" alt="user image" />
                  <span class="subsBox__username">John Doe</span>
                </div>
                <span class="subsBox__tickets">5 Tickets</span>
                <span class="subsBox__date">23/06/2021</span>
              </div>
              <div
                class="
                  subsBox__user
                  d-flex
                  align-items-center
                  justify-content-between
                "
              >
                <div class="subsBox__profile">
                  <img src="/images/user-1.jpg" alt="user image" />
                  <span class="subsBox__username">John Doe</span>
                </div>
                <span class="subsBox__tickets">5 Tickets</span>
                <span class="subsBox__date">23/06/2021</span>
              </div></AnalyticsBox
            >
          </div>
        </div>
      </div>

      <!-- Section 2 -->
      <div class="col-md-5">
        <div class="row gap-4">
          <!-- Review and Rating -->
          <div class="col-12">
            <AnalyticsBox title="Reviews & Ratings" icon="icon-Star-outline">
              <div
                class="d-flex justify-content-center align-items-center"
                style="margin: 20px 0px 30px"
              >
                <CircularProgress value="60" size="120px" />
              </div>
              <div
                class="
                  rrBox__starRatings
                  d-flex
                  align-items-center
                  justify-content-between
                "
              >
                <div class="rrBox__star">
                  <i class="icon-Star-filled"></i>
                  <i class="icon-Star-filled"></i>
                  <i class="icon-Star-filled"></i>
                  <i class="icon-Star-filled"></i>
                  <i class="icon-Star-filled"></i>
                </div>
                <div class="rrBox__linear-progress">
                  <LinearProgress :color="'#01789A'" :value="'50'" />
                </div>
                <div class="rrBox__rating">5</div>
              </div>
              <div
                class="
                  rrBox__starRatings
                  d-flex
                  align-items-center
                  justify-content-between
                "
              >
                <div class="rrBox__star">
                  <i class="icon-Star-filled"></i>
                  <i class="icon-Star-filled"></i>
                  <i class="icon-Star-filled"></i>
                  <i class="icon-Star-filled"></i>
                  <!-- <i class="icon-Star-filled"></i> -->
                </div>
                <div class="rrBox__linear-progress">
                  <LinearProgress :color="'#01789A'" :value="'50'" />
                </div>
                <div class="rrBox__rating">5</div>
              </div>
              <div
                class="
                  rrBox__starRatings
                  d-flex
                  align-items-center
                  justify-content-between
                "
              >
                <div class="rrBox__star">
                  <i class="icon-Star-filled"></i>
                  <i class="icon-Star-filled"></i>
                  <i class="icon-Star-filled"></i>
                  <!-- <i class="icon-Star-filled"></i> -->
                  <!-- <i class="icon-Star-filled"></i> -->
                </div>
                <div class="rrBox__linear-progress">
                  <LinearProgress :color="'#01789A'" :value="'50'" />
                </div>
                <div class="rrBox__rating">5</div>
              </div>
              <div
                class="
                  rrBox__starRatings
                  d-flex
                  align-items-center
                  justify-content-between
                "
              >
                <div class="rrBox__star">
                  <i class="icon-Star-filled"></i>
                  <i class="icon-Star-filled"></i>
                  <!-- <i class="icon-Star-filled"></i> -->
                  <!-- <i class="icon-Star-filled"></i> -->
                  <!-- <i class="icon-Star-filled"></i> -->
                </div>
                <div class="rrBox__linear-progress">
                  <LinearProgress :color="'#01789A'" :value="'50'" />
                </div>
                <div class="rrBox__rating">5</div>
              </div>
              <div
                class="
                  rrBox__starRatings
                  d-flex
                  align-items-center
                  justify-content-between
                "
              >
                <div class="rrBox__star">
                  <i class="icon-Star-filled"></i>
                  <!-- <i class="icon-Star-filled"></i> -->
                  <!-- <i class="icon-Star-filled"></i> -->
                  <!-- <i class="icon-Star-filled"></i> -->
                  <!-- <i class="icon-Star-filled"></i> -->
                </div>
                <div class="rrBox__linear-progress">
                  <LinearProgress :color="'#01789A'" :value="'50'" />
                </div>
                <div class="rrBox__rating">5</div>
              </div>
              <div class="rrBox__footer d-flex border-top">
                <span>View Reviews</span>
                <i class="icon-Arrow---Down-2 ms-auto"></i>
              </div>
            </AnalyticsBox>
          </div>

          <!-- Pricing Table -->
          <div class="col-12">
            <AnalyticsBox :title="'Pricing Table'" :icon="'icon-Filter'">
              <div
                class="
                  pricingBox__row
                  d-flex
                  align-items-center
                  justify-content-between
                "
              >
                <span class="pricingBox__name">General Admission</span>
                <span class="pricingBox__tickets">5 Ticket(s)</span>
                <span class="pricingBox__status">Paid</span>
              </div>
            </AnalyticsBox>
          </div>

          <!-- Link Box -->
          <div class="col-12">
            <div class="linkBox shadow-sm">
              <h3>Here’s the link to your event</h3>
              <p>
                Copy this link and send it to people that you want to be part of
                your event
              </p>
              <div class="row gy-4">
                <div class="col-lg-6 col-12">
                  <input
                    type="text"
                    placeholder="Kudibar.com/Wx08J6I"
                    value="Kudibar.com/Wx08J6I"
                  />
                </div>
                <div class="col-lg-3 col-6">
                  <div class="linkBox__btn linkBox__btn-share">Share</div>
                </div>
                <div class="col-lg-3 col-6">
                  <div class="linkBox__btn-copy linkBox__btn">Copy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CircularProgress from "@/components/events/slug/CircularProgress.vue";
import StatCard from "@/components/events/slug/StatCard.vue";
import AnalyticsBox from "@/components/events/slug/AnalyticsBox.vue";
import LinearProgress from "@/components/events/slug/LinearProgress.vue";
import svgLoader from "@/components/util/svg-loader";
import modal from "@/components/util/modal";
import Description from "@/components/events/slug/Description.vue";
import Schedule from "@/components/events/slug/Schedule.vue";
import Payments from "@/components/events/slug/Payments.vue";
import RSVP from "@/components/events/slug/RSVP.vue";
import Media from "@/components/events/edit/media.vue";
import Referal from "@/components/events/slug/Referal.vue";
import Speakers from "@/components/events/slug/Speakers.vue";
import Settings from "@/components/events/slug/Settings.vue";
import Partners from "@/components/events/slug/Partners.vue";
import Team from "@/components/events/slug/Team.vue";

export default {
  // layout: "dashboard",
  head() {
    return {
      title: "Kudibar | Event Analytics ",
      meta: [],
    };
  },
  data() {
    return {
      modalActive: false,
      activeFilter: {
        title: "Description",
        active: true,
      },
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
        {
          title: "Settings",
          icon: "fas fa-cog",
          active: false,
        },
      ],
    };
  },

  methods: {
    modalClose(action) {
      this.modalActive = action;
    },

    toggleModalScreen(i) {
      this.filters.map((v) => (v.active = false));
      this.filters[i].active = true;
      this.sIndex = i;
      this.modalActive = this.modalActive ? false : true;
      this.activeFilter = this.filters[i];
    },
  },
  components: {
    CircularProgress,
    StatCard,
    AnalyticsBox,
    LinearProgress,
    modal,
    svgLoader,
    Description,
    Schedule,
    Payments,
    RSVP,
    Media,
    Referal,
    Speakers,
    Settings,
    Partners,
    Team,
  },
};
</script>

<style lang="scss" scoped>
.subs {
}

.statBox {
  border-radius: 8px;
  padding: 24px 36px;

  &__head {
    height: 60px;

    i {
      color: var(--kudi-dark);
      font-size: 17px;
      margin-right: 18px;
    }
    h3 {
      font-family: Cairo;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 0px !important;
    }
    p {
      color: #c1c1c1;
      font-family: Cairo;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 0px !important;
    }
  }

  &__linear-progress {
    background: #f0f3f5;
    border-radius: 8px;
    padding: 26px 32px 53px;
    h4,
    p {
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: right;
      color: #023e4f;
      margin-bottom: 0px !important;
    }

    h4 {
      text-align: left;
    }
  }
  &__footer {
    margin-top: 27px;
  }
  &__total {
    margin: 24px 0px;
    h4 {
      margin-left: 11px;
    }

    h4,
    p {
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: #023e4f;
      margin-bottom: 0px !important;
    }
  }
}

.rrBox {
  border-radius: 8px;
  padding: 24px 36px;
  &__head {
    height: 60px;

    i {
      color: #200e32;
      font-size: 17px;
      margin-right: 18px;
    }
    h3 {
      font-family: Cairo;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 0px !important;
    }
    p {
      color: #c1c1c1;
      font-family: Cairo;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 0px !important;
    }
  }

  &__starRatings {
  }

  &__star {
    white-space: nowrap;
    // margin-right: 20px;
    font-size: 12px;
    color: #dfb300;
    min-width: 100px;
    justify-content: flex-end;
    display: flex;
  }
  &__rating {
    margin-left: 20px;
  }
  &__footer {
    margin-top: 27px;
    padding: 22px 0px 0px;
    color: #023e4f;
    display: flex;
    align-items: center;
    span {
      font-family: Cairo;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
    }
    i {
      font-size: 9px;
      font-weight: bold;
      cursor: pointer;
    }
  }

  &__linear-progress {
    width: 100%;
    max-width: 350px;
    margin-left: 20px;
    // margin: 0 39px;
  }
}

.pricingBox {
  border-radius: 8px;
  padding: 24px 36px;

  &__row {
    padding: 16px 0px;
  }

  &__status {
    padding: 3px 21px;
    border-radius: 50px;
  }
  &__name {
    font-family: Cairo;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;

    color: #192a3e;
  }
  &__tickets {
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #192a3e;
  }
  &__status {
    color: #01789a;
    background: #c8ede9;
    cursor: pointer;
    padding: 3px 21px;
  }
}

.subsBox {
  border-radius: 8px;
  padding: 24px 36px;
  &__head {
    height: 60px;

    i {
      color: #200e32;
      font-size: 17px;
      margin-right: 18px;
    }
    h3 {
      font-family: Cairo;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 0px !important;
    }
    p {
      color: #c1c1c1;
      font-family: Cairo;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 0px !important;
    }
  }
  button {
    background-color: white;
    border-radius: 50px;
    border: 0.7px solid #109cf1;
    color: #109cf1;
    margin-left: auto;
    font-family: Cairo;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;

    padding: 5px 25px;
  }

  &__user {
    padding: 16px 34px;
    border-radius: 8px;
    @media (max-width: 500px) {
      padding: 16px 10px;
    }
    &:nth-child(even) {
      background: #f0f3f5;
    }
    img {
      width: 35px;
      border-radius: 555555px;
      background: #f0f3f5;
      border-radius: 50000px;
    }
  }
  &__username {
    font-family: Cairo;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 13px;

    color: #192a3e;
  }
  &__tickets {
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #192a3e;
  }
  &__date {
    font-family: Cairo;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #acacac;
  }
}

.linkBox {
  border-radius: 8px;
  padding: 24px 36px;
  h3 {
    font-family: Cairo;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 16px !important;
  }
  p {
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #617b83;
  }

  input {
    // max-width: 330px;
    width: 100%;
    padding: 7px 22px;
    background-color: #e2eef9;
    outline: none;
    border: none;
    border-radius: 5px;

    font-family: Cairo;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #023e4f;
  }

  &__btn {
    font-family: Cairo;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    border-radius: 50px;
    outline: none;
    padding: 10px 26px;
    display: grid;
    justify-content: center;
    align-items: center;
    // margin-left: 21px;

    &-share {
      background: var(--kudi-primary-dark);
      color: white;
      border: 1px solid var(--kudi-primary-dark);
    }
    &-copy {
      background: white;
      color: var(--kudi-primary-dark);
      border: 1px solid var(--kudi-primary-dark);
    }
  }
}

.my-badge {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 5px 18px;
  border-radius: 10px;
  color: #01789a;
  background: #aee5f4;
  cursor: pointer;

  margin-left: auto;

  // font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;

  // border-radius: 8px;
}

.my-title {
  // font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #023e4f;
  margin-bottom: 0px;
}

.pub {
  padding: 21px 28px;
  background: #ffffff;
  border-radius: 15px;
  margin-left: 24px;

  span {
    // font-family: Cairo;
    font-size: 15px;
    margin-right: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #023e4f;
  }

  @media (max-width: 767px) {
    margin-left: auto !important;
    margin-top: 15px;
  }
}
</style>

