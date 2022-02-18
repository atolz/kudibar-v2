<template>
  <div class="container" style="padding-bottom: 120px">
    <modal
      :title="'Ticket Details'"
      :is-active="modalActive"
      @on-close="modalClose"
    >
      <div class="details" style="max-width: 450px">
        <h4 class="kudi-h4">Music Festival Jam Africa Concert</h4>
        <p>Hosted By - Arthur Ibik</p>
        <div class="details__box">
          <div class="d-flex justify-content-between align-items-center">
            <span class="">Regular</span>
            <span class="d-flex align-items-center"
              ><i
                data-v-f3ab142c=""
                class="icon-Ticket"
                style="color: rgb(240, 136, 0); font-size: 20px"
              ></i
              ><span class="ms-3 mb-0" style="margin-bottom: 0px"
                >Regular</span
              ></span
            >
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
            tristique nunc lectus eget sagittis, risus mi orci.
          </p>
        </div>
        <div class="details__box">
          <div class="d-flex justify-content-between align-items-center">
            <span class="">VIP</span>
            <span class="d-flex align-items-center"
              ><i
                data-v-f3ab142c=""
                class="icon-Ticket"
                style="color: rgb(240, 136, 0); font-size: 20px"
              ></i
              ><span class="ms-3 mb-0" style="margin-bottom: 0px"
                >VIP - 24 left</span
              ></span
            >
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
            tristique nunc lectus eget sagittis, risus mi orci.
          </p>
        </div>
      </div>
    </modal>
    <modal
      :title="'Share'"
      :is-active="shareModalActive"
      @on-close="modalClose"
    >
      <div class="share" style="max-width: 450px">
        <!-- <h4 class="kudi-h4">Share</h4> -->
        <p>Gift tickets to your friends & loved ones.</p>
        <div class="share__media">
          <a class="share__box"><img src="/Fb.svg" alt="" /></a>
          <a class="share__box"><img src="/WA.svg" alt="" /></a>
          <a class="share__box"><img src="/Twt.svg" alt="" /></a>
          <a class="share__box"><img src="/Msg.svg" alt="" /></a>
        </div>
      </div>
    </modal>

    <div class="row back align-items-center py-4 mb-3">
      <div class="col d-flex align-items-center">
        <button class="back__btn">
          <i class="icon-arrow-spear-left"></i>
        </button>
        <span class="back__text"
          ><h3 class="kudi-h3 mb-0" style="margin-bottom: 0px">
            Block Party Vol. 2
          </h3></span
        >
      </div>
    </div>

    <div class="row info align-items-center">
      <div class="col-6">
        <span>20 January, 2022</span>
      </div>
      <div class="col-6 d-flex align-items-center justify-content-end">
        <div class="row">
          <div class="col-md-6 justify-content-end">
            <div style="cursor: default">
              <!-- <svg
                class="svg-icon"
                style="width: 24px; height: 24px; margin-right: 6px"
              >
                <use xlink:href="/images/sprite.svg#icon-Love"></use>
              </svg> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style="
                  width: 27px;
                  height: 27px;
                  margin-right: 5px;
                  color: #023e4f;
                  stroke-width: 3px;
                "
                :style="{ fill: like ? '#023e4f' : 'none' }"
                @click="toggleLike"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <!-- <svg
                class="svg-icon"
                style="
                  width: 20px;
                  height: 24px;
                  margin-right: 6px;
                  color: #023e4f;
                "
              >
                <use xlink:href="/images/sprite.svg#icon-love-card"></use>
              </svg> -->
              <span>120k</span>
            </div>
          </div>
          <div class="col-md-6 justify-content-end">
            <div @click="toggleShareActive" style="cursor: pointer">
              <!-- <i class="icon-Share" style="color: #023e4f"></i> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style="
                  width: 27px;
                  height: 24px;
                  margin-right: 5px;
                  color: #023e4f;
                "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-lg-7">
        <div class="row gap-4">
          <!-- Kudi video -->
          <div class="col-12">
            <div class="kudi-video">
              <img
                class="w-100"
                src="/images/party-people.jpg"
                alt="party-people"
              />
              <button class="glass">
                <img src="/images/play-circle.svg" alt="" />
              </button>
              <button class="glass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style="width: 27px; height: 24px; color: white"
                >
                  <!-- transform: scale(-1, 1) -->
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <!-- Location -->
          <div class="col-12">
            <analytict-box
              class="location"
              :icon="'icon-Location'"
              title="Location"
            >
              <p>
                No. 40 Sam Adeyemi Street, Paloma Drive, Lekki Phase 1, Lagos
                State, LOS 105102, Nigeria
              </p>
            </analytict-box>
          </div>
          <!-- Event description -->
          <div class="col-12">
            <analytict-box
              class="location"
              :icon="'icon-schedule'"
              title="Event Description"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                tristique nunc lectus eget sagittis, risus mi orci. Nulla cursus
                sociis suspendisse eu nunc blandit sed sed. Pellentesque justo
                elementum in pretium nunc eget dolor. Maecenas nisi, ac
                consequat sodales id. Viverra dignissim justo, aliquam, nunc,
                eget quam accumsan, viverra aenean. Leo, turpis quam diam lacus,
                commodo magna. Varius proin aliquet nisi, nisl. Consequat
                iaculis commodo non aliquam, cursus nisi, diam. Volutpat
                pellentesque faucibus condimentum leo id. Ultrices a senectus
                adipiscing non. Faucibus nec facilisi fusce urna sit turpis.
                Aliquam tincidunt duis enim habitasse euismod gravida cursus
                tempus. At arcu eu vulputate imperdiet. A varius in elementum
                turpis. Sollicitudin nulla enim dignissim ut et. Est augue sed
                nisi, consectetur ultricies eu sed leo, vitae. Vitae nunc,
                habitasse odio morbi et, dolor eros nunc. Accumsan, tortor amet
                posuere enim in quis. Vestibulum eu pretium nibh sit. Ac vivamus
                consequat commodo nec in nec ultricies sit risus. Facilisi
                gravida in et ultricies nisl nibh urna, urna. Faucibus erat diam
                sed non faucibus urna. Natoque mattis nisl nisl quam
                sollicitudin vestibulum venenatis purus viverra. Eu congue
                ultrices posuere consequat arcu.
              </p>
            </analytict-box>
          </div>
          <!-- Schedule -->
          <div class="col-12">
            <analytict-box
              class="location schedule"
              :icon="'icon-schedule'"
              title="Schedule"
            >
              <div class="schedule">
                <nav>
                  <div>
                    <button class="active">
                      <i class="icon-arr-left-spear"></i>
                    </button>
                    <button><i class="icon-arr-right-spear"></i></button>
                  </div>
                </nav>
                <table>
                  <thead>
                    <tr>
                      <th><span>Day</span></th>
                      <th><span>Date</span></th>
                      <th><span>Time</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span>Day 1</span></td>
                      <td><span>23/01/2022</span></td>
                      <td><span>11:00am - 12:00pm</span></td>
                    </tr>
                    <tr>
                      <td><span>Day 1</span></td>
                      <td><span>23/01/2022</span></td>
                      <td><span>11:00am - 12:00pm</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </analytict-box>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="row gap-4">
          <!-- Ticket -->
          <div class="col-12">
            <div class="ticket">
              <div class="ticket__head">
                <i class="icon-ticket-money"></i>
                <h3>Tickets</h3>
                <span>Ticket limit is 10</span>
              </div>
              <div class="ticket__body">
                <div class="regular">
                  <div class="type">
                    <p>Regular</p>
                    <span class="strike">N4000</span>
                    <span>N3500</span>
                  </div>
                  <div class="amount">
                    <span>How many tickets?</span>
                    <inc-dec />
                  </div>
                </div>
                <div class="vip">
                  <div class="type">
                    <p>VIP</p>
                    <span>N4000</span>
                  </div>
                  <div class="amount">
                    <span>How many tickets?</span>
                    <inc-dec />
                  </div>
                </div>
                <div class="details">
                  <div
                    @click="toggleActive"
                    class="d-flex align-items-center pointer"
                  >
                    <i class="icon-info-circle"></i>
                    <span>Ticket Details</span>
                    <span class="ms-auto d-flex-col"
                      >Total
                      <p>N4,130</p>
                    </span>
                  </div>
                </div>
              </div>
              <div class="ticket__footer pay row">
                <div class="col-md-4 justify-content-md-start">
                  <p>Pay with</p>
                </div>
                <div class="col-md-8">
                  <div>
                    <button>
                      <img src="/images/Flutter wave.svg" alt="" />
                    </button>
                    <button><img src="/images/paystack.svg" alt="" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Enter passcode -->
          <div class="col-12">
            <div class="passcode form">
              <div class="row d-flex justify-content-center">
                <label class="" for=""
                  >Enter Passcode to view tickets & buy</label
                >
                <input class="" type="text" />
                <input class="" type="text" />
                <input class="" type="text" />
                <input class="" type="text" />
                <input class="" type="text" />
                <input class="" type="text" />
              </div>
            </div>
          </div>

          <!-- Intrested -->
          <div class="col-12">
            <div class="intrested">
              <p class="me-3">Tap if interested in this event</p>
              <button
                v-if="intrested"
                class="kbtn kbtn-1"
                @click="toggleIntrest()"
              >
                <svg class="svg-icon icon-arr-right" style="margin-right: 11px">
                  <use
                    xlink:href="/images/sprite.svg#icon-smile-face"
                  ></use></svg
                >Intrested
              </button>
              <button
                v-if="!intrested"
                class="kbtn kbtn-1--outlined"
                @click="toggleIntrest()"
              >
                <svg class="svg-icon icon-arr-right" style="margin-right: 11px">
                  <use
                    xlink:href="/images/sprite.svg#icon-un-happy-face"
                  ></use></svg
                >Unintrested
              </button>
            </div>
          </div>

          <!-- Host -->
          <div class="col-12">
            <div class="host">
              <div class="host__head">
                <img src="/images/faces/avatar.jpg" alt="" />
                <div class="name">
                  <span>Hosted by</span>
                  <p>Thor Odinson</p>
                </div>
                <button class="kbtn kbtn-1--outlined ms-auto">Follow</button>
              </div>
              <div class="host__body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dignissim in velit dolor nunc, molestie est blandit et varius.
                  Quis elementum, ut pulvinar at faucibus. Dignissim dolor orci
                  sit fermentum urna turpis viverra donec. Nunc elementum, dis
                  arcu ac. Arcu iaculis scelerisque.
                </p>

                <div class="contact">
                  <span>Contact</span>
                  <div class="socials">
                    <i class="icon-Insta mr-4" style="color: gray"></i>
                    <i class="icon-Twt mr-4" style="color: gray"></i>
                    <i class="icon-Call mr-4" style="color: gray"></i>
                    <i class="icon-Message mr-4" style="color: gray"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Partners -->
          <div class="col-12">
            <analytict-box
              class="partners"
              title="Partners"
              icon="icon-user-group"
            >
              <img src="/images/logo.webp" alt="kudi logo" />
            </analytict-box>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IncDec from "@/components/events/inc-dec.vue";
import AnalytictBox from "@/components/events/AnalyticsBox.vue";
import modal from "@/components/util/modal";
export default {
  data() {
    return {
      modalActive: false,
      intrested: true,
      shareModalActive: false,
      like: false,
    };
  },
  methods: {
    toggleIntrest() {
      this.intrested = !this.intrested;
    },
    modalClose(action) {
      this.modalActive = action;
      this.shareModalActive = action;
    },
    toggleActive() {
      this.modalActive = !this.modalActive;
    },
    toggleShareActive() {
      this.shareModalActive = !this.shareModalActive;
    },
    toggleLike() {
      this.like = !this.like;
    },
  },
  components: {
    IncDec,
    AnalytictBox,
    modal,
  },
};
</script>

<style lang="scss" scoped>
.kudi-video {
  position: relative;

  .glass {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: grid;
    justify-content: center;
    align-items: center;
    position: absolute;
    border: none;
    outline: none;
    z-index: 1000;
    background: rgba(242, 247, 251, 0.3);
    backdrop-filter: blur(40px);

    &:nth-child(2) {
      bottom: 20px;
      left: 20px;
    }
    &:nth-child(3) {
      bottom: 20px;
      right: 20px;
    }
  }
}
.share {
  display: grid;
  justify-content: center;

  p {
    color: #023e4f;
    font-family: Segoe UI;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
  }
  &__media {
    display: flex;
    justify-content: space-between;
    margin: 32px 50px;
  }
  &__box {
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
    cursor: pointer;
    height: 75px;
    width: 75px;
    border-radius: 50%;
    background: #f0f3f5;
    &:not(:last-child) {
      margin-right: 32px;
    }
  }
}

.details {
  p {
    color: #023e4f;
    font-family: Cairo;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }

  &__box {
    background: #f0f3f5;
    border-radius: 8px;
    padding: 16px 24px;
    margin-bottom: 13px;
    span {
      font-family: Cairo;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: #023e4f;
      margin-bottom: 12px;
    }

    p {
      color: #8990a4;
      font-family: Segoe UI;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
}

.passcode.form {
  padding: 62px;
  background-color: white;
  border-radius: 20px;
  box-shadow: var(--kudi-shadow-default);
  overflow: hidden;

  @media (max-width: 546px) {
    padding: 30px;
  }

  label {
    color: #8990a4;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 41px;
    text-align: center;
  }

  input {
    border: 1px solid #e2eef9;
    box-sizing: border-box;
    border-radius: 8px;
    width: 54px;
    height: 54px;
    display: inline-flex;
    color: #01789a;
    margin-bottom: 12px;
    margin-right: 12px;

    font-family: Cairo;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0.01em;
    text-align: left;
    // :not(:last-child) {
    //   margin-right: 24px;
    // }

    &:focus {
      background: #e2eef9;
      outline: none;
    }

    &:visited {
      background: #e2eef9;
      outline: none;
    }
  }
}

.ticket {
  background-color: white;
  border-radius: 20px;
  box-shadow: var(--kudi-shadow-default);
  overflow: hidden;

  &__head {
    padding: 17px 43px 16px;
    border-bottom: var(--kudi-border-primary);
    display: flex;
    align-items: center;

    @media (max-width: 400px) {
      padding: 29px 27px 24px;
    }

    i {
      color: #01789a;
      margin-right: 10px;
      font-size: 14px;
    }
    h3 {
      font-family: Cairo;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 34px;
      letter-spacing: 0.01em;
      text-align: left;
      color: #023e4f;
      margin-bottom: 0 !important;
    }

    span {
      font-family: Cairo;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0.01em;
      text-align: left;
      color: #979797;
      margin-left: auto;
    }
  }

  > *:not(:first-child) {
    padding: 0 29px;
    @media (max-width: 400px) {
      padding: 0 10px;
    }
  }
  // > *:not(:last-child) {
  //   padding: 0 29px;
  // }

  &__body {
    > div {
      padding: 19px 16px 25px;
    }

    > *:not(:last-child) {
      border-bottom: var(--kudi-border-primary);
      display: flex;
      justify-content: space-between;

      .type {
        p {
          font-family: Roboto;
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: 21px;
          letter-spacing: 0em;
          text-align: left;
          color: #023e4f;
          margin-bottom: 12px;
        }
        span {
          color: #c4c4c4;
          // font-family: Roboto;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 21px;
          letter-spacing: 0em;
          text-align: left;
          margin-bottom: 8px;
          display: block;
        }
      }
      .amount {
        span {
          color: #01789a;
          font-family: Roboto;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 19px;
          letter-spacing: 0em;
          text-align: left;
          display: block;
          margin-bottom: 20px;
        }
      }
    }

    .details {
      align-items: center;
      color: #023e4f;
      i {
        margin-right: 8px;
        font-size: 20px;
      }
      span {
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        display: inline-flex;
        flex-direction: column;
      }
      p {
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;
        color: #023e4f;
        text-align: right;
        margin-bottom: 0 !important;
        margin-top: 8px;
      }
    }
  }

  &__footer {
    padding: 29px 27px 24px !important;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 26px 51px;
    background: #f0f3f5;
    align-items: center;

    @media (min-width: 467px) {
      padding: 29px 43px 24px !important;
    }

    p {
      color: #01789a;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 0px;

      @media (max-width: 750px) {
        margin-bottom: 10px;
      }
    }

    div {
      display: flex;
      // flex-wrap: wrap;
      justify-content: end;
      @media (max-width: 770px) {
        justify-content: center;
      }
    }
    button {
      margin-left: 24px;
      display: grid;
      align-content: center;
      justify-content: center;
      // border: none;
      background-color: #f0f3f5;
      outline: none;
      border-radius: 50px;
      border: 1px solid #01789a;
      @media (max-width: 400px) {
        margin-left: 0;

        &:nth-child(2) {
          margin-left: 10px;
        }
      }
      img {
        width: 70px;
        height: 13px;
      }
      padding: 12px 24px;
    }
  }
}

.location {
  p {
    font-family: Segoe UI;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #8990a4;
    margin: 16px 0 !important;
  }
}

.schedule {
  margin-bottom: 15px;
  nav {
    display: flex;
    align-items: center;
    padding: 20px 0;
    div {
      display: inline-flex;
      margin-left: auto;

      button {
        padding: 15px;
        width: 26px;
        height: 26px;
        border: 1px solid #192a3e;
        border-radius: 50%;
        display: grid;
        justify-content: center;
        align-content: center;
        margin-left: 13px;
        font-size: 10px;
        // border: none;
        outline: none;
        color: #192a3e;
        background-color: white;
        &.active {
          background-color: #192a3e;
          color: white;
        }
      }
    }
  }

  table {
    font-family: Cairo;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    border-collapse: collapse;
    width: 100%;
    thead {
      border-radius: 8px;
      display: flex;
      width: 100%;
      tr {
        background: #023e4f;
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;
        color: white !important;
        width: 100%;
      }
    }

    tr {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #192a3e;
      padding: 16px 23px;
      border-radius: 8px;
      background: #f0f3f5;
      &:not(:last-child) {
        margin-bottom: 4px;
      }
    }
  }
}

.intrested {
  padding: 38px 60px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  box-shadow: var(--kudi-shadow-default);
  @media (max-width: 546px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 38px 20px;
  }

  p {
    color: #023e4f;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 0px !important;
    margin-right: 10px;

    @media (max-width: 546px) {
      margin-bottom: 10px !important;
    }
  }
}

.host {
  padding: 0 38px;
  border-radius: 20px;
  box-shadow: var(--kudi-shadow-default);
  &__head {
    display: flex;
    align-items: center;
    border-bottom: var(--kudi-border-primary);
    padding: 41px 0 14px;
    img {
      margin-right: 20px;
      width: 53px;
      border-radius: 50%;
    }

    .name {
      span {
        font-family: Roboto;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;
        color: #01789a;
      }
      p {
        font-family: Roboto;
        font-size: 23px;
        font-style: normal;
        font-weight: 400;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: left;
        color: #023e4f;
      }
    }
  }

  &__body {
    p {
      color: #8990a4;
      font-family: Segoe UI;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 25px;
      margin-top: 16px;
    }

    .contact {
      display: flex;
      padding-bottom: 27px;
      span {
        margin-right: auto;
        font-family: Cairo;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: left;
        color: #023e4f;
      }

      .socials {
        display: flex;
        align-items: center;

        i {
          font-size: 16px;
          margin-left: 17px;
        }
      }
    }
  }
}

.partners {
  img {
    margin: 44px 54px;
    width: 145px;
  }
}

.info {
  margin-bottom: 32px;

  > div:first-child {
    span {
      color: #023e4f;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  > div:nth-child(2) {
    display: flex;
    flex-wrap: wrap;
    i {
      margin-right: 16px;
    }
    div {
      display: flex;
      align-items: center;
    }
    div:first-child {
      margin-left: auto;
      @media (max-width: 576px) {
        margin-left: 0;
      }

      span {
        color: #023e4f;
        font-family: Cairo;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 41px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
    div:nth-child(2) {
      // margin-left: 48px;
      @media (max-width: 375px) {
        margin-left: 0;
      }
      color: #109cf1;
      i {
        font-size: 20px;
      }
      span {
        font-family: Cairo;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 37px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }
}
</style>
