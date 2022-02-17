<template>
  <div class="container">
    <modal
      :title="'Ticket Details'"
      :is-active="modalActive"
      @on-close="modalClose"
    >
      <div class="details" style="max-width: 450px">
        <h4>Music Festival Jam Africa Concert</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tristique
          nunc lectus eget sagittis, risus mi orci. Nulla cursus sociis
          suspendisse eu nunc blandit sed sed. Pellentesque justo elementum in
          pretium nunc eget dolor.
        </p>
        <div class="d-flex justify-content-between details__host">
          <div class="">Hosted By - Arthur Ibik</div>
          <div class="">Monday June 12, 2021</div>
        </div>

        <div class="details__ticketNum">
          <p>Number of Tickets</p>
          <div>
            <i class="icon-Ticket"></i>
            <span>Regular x1</span>
          </div>
          <div>
            <i class="icon-Ticket"></i>
            <span>VIP x1</span>
          </div>
          <div>
            <i class="icon-Ticket"></i>
            <span>VVIP x1</span>
          </div>
        </div>

        <div class="details__qr">
          <img src="/images/qrcode.jpg" alt="scan qrcode" />
          <div>
            <span>Ticket Ref.</span>
            <span>123eFG</span>
          </div>
        </div>
      </div>
    </modal>
    <div class="row back align-items-center py-4 mb-3">
      <div class="col d-flex">
        <button class="back__btn">
          <i class="icon-arrow-spear-left"></i>
        </button>
        <span class="back__text">Back</span>
        <!-- <button class="kbtn-1 ms-auto">
          <span>Created Events</span>
        </button> -->
      </div>
    </div>
    <div class="kudi-h3 mb-5">Tickets</div>
    <div class="ticket__container">
      <div class="ticket" @click="toggleActive">
        <div class="ticket__details">
          <div class="ticket__ball"></div>
          <div class="ticket__ball"></div>
          <h5 class="kudi-h5">Music Jam Festival Concert</h5>
          <div class="ticket__date mb-2">
            <span>21/12/2021</span><span>11:00</span>
          </div>
          <div class="ticket__info d-flex align-items-center">
            <i class="icon-Ticket kudi-text-yellow"></i>
            <span class="ticket__type">Regular - x1</span>
            <span class="ticket__status">Useds</span>
          </div>
        </div>
        <div class="ticket__qr">
          <img src="/images/qrcode.jpg" alt="qr scan" />
          <div class="ticket__ref">
            <span>Ticket Ref.-</span>
            <span>#123eFG</span>
          </div>
        </div>
      </div>
      <div class="ticket">
        <div class="ticket__details">
          <div class="ticket__ball"></div>
          <div class="ticket__ball"></div>
          <h5 class="kudi-h5">Music Jam Festival Concert</h5>
          <div class="ticket__date mb-2">
            <span>21/12/2021</span><span>11:00</span>
          </div>
          <div class="ticket__info d-flex align-items-center">
            <i class="icon-Ticket kudi-text-yellow"></i>
            <span class="ticket__type">Regular - x1</span>
            <span class="ticket__status">Useds</span>
          </div>
        </div>
        <div class="ticket__qr">
          <img src="/images/qrcode.jpg" alt="qr scan" />
          <div class="ticket__ref">
            <span>Ticket Ref.-</span>
            <span>#123eFG</span>
          </div>
        </div>
      </div>
      <div class="ticket">
        <div class="ticket__details">
          <div class="ticket__ball"></div>
          <div class="ticket__ball"></div>
          <h5 class="kudi-h5">Music Jam Festival Concert</h5>
          <div class="ticket__date mb-2">
            <span>21/12/2021</span><span>11:00</span>
          </div>
          <div class="ticket__info d-flex align-items-center">
            <i class="icon-Ticket kudi-text-yellow"></i>
            <span class="ticket__type">Regular - x1</span>
            <span class="ticket__status">Useds</span>
          </div>
        </div>
        <div class="ticket__qr">
          <img src="/images/qrcode.jpg" alt="qr scan" />
          <div class="ticket__ref">
            <span>Ticket Ref.-</span>
            <span>#123eFG</span>
          </div>
        </div>
      </div>
      <div class="ticket">
        <div class="ticket__details">
          <div class="ticket__ball"></div>
          <div class="ticket__ball"></div>
          <h5 class="kudi-h5">Music Jam Festival Concert</h5>
          <div class="ticket__date mb-2">
            <span>21/12/2021</span><span>11:00</span>
          </div>
          <div class="ticket__info d-flex align-items-center">
            <i class="icon-Ticket kudi-text-yellow"></i>
            <span class="ticket__type">Regular - x1</span>
            <span class="ticket__status">Useds</span>
          </div>
        </div>
        <div class="ticket__qr">
          <img src="/images/qrcode.jpg" alt="qr scan" />
          <div class="ticket__ref">
            <span>Ticket Ref.-</span>
            <span>#123eFG</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from "@/components/util/modal";
export default {
  layout: "dashboard",
  data() {
    return {
      modalActive: false,
    };
  },
  components: {
    modal,
  },
  methods: {
    modalClose(action) {
      this.modalActive = action;
    },
    toggleActive() {
      this.modalActive = !this.modalActive;
    },
  },
};
</script>

<style scoped lang="scss">
.ticket {
  background-color: white;
  box-shadow: var(--kudi-shadow-default);
  position: relative;
  min-height: 158px;
  // width: max-content;
  //   padding: 32px 0px;
  border-radius: 10px;
  display: flex;
  cursor: pointer;

  &__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, 419px));
    grid-column-gap: 19px;
    grid-row-gap: 2rem;
    margin-bottom: 8.6rem;
    justify-content: center;
    // overflow-x: scroll;
    // &::-webkit-scrollbar {
    //   width: 0; /* Remove scrollbar space */
    //   background: transparent; /* Optional: just make scrollbar invisible */
    // }
  }

  &__ball {
    position: absolute;
    width: 37px;
    height: 37px;
    border-radius: 50%;
    // background-color: rgba(1, 120, 154, 0.08);
    // background-color: white;
    background-color: transparent;
    // box-shadow: var(--kudi-shadow-default);
    right: 0;
    overflow: hidden;

    &:first-child {
      transform: translate(50%, -50%);
      top: 0;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 50%;
        bottom: 0;
        left: 0;
        background-color: rgba(1, 120, 154, 0.08);
        background-color: #c3e0dd;
        box-shadow: var(--kudi-shadow-default);
      }
    }

    &:nth-child(2) {
      bottom: 0px !important;
      transform: translate(50%, 50%);

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 50%;
        top: 0;
        left: 0;
        // background-color: white;
        background-color: rgba(43, 68, 75, 0.5);
        background-color: #c3e0dd;
        box-shadow: var(--kudi-shadow-default);
      }
    }
  }

  &__details {
    position: relative;
    border-right: 1px dashed #c3e0dd;
    padding: 35px 15px 12px 24px;
    // padding-left: 25px;
  }

  &__info {
    flex-wrap: wrap;
  }

  &__type {
    color: #023e4f;
    font-family: Cairo;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 10px;
  }

  &__date {
    font-family: Cairo;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #8990a4;
  }

  &__status {
    color: #236cb1;
    font-family: Cairo;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 10px;
    letter-spacing: 0em;
    text-align: center;
    margin-left: auto;

    @media (max-width: 367px) {
      margin-left: 0px;
      margin-top: 15px;
    }
  }
  &__qr {
    display: grid;
    justify-items: center;
    align-items: center;
    padding: 30px 16px 26px;
  }

  &__ref {
    white-space: nowrap;

    span:first-child {
      color: #8990a4;
      font-family: Cairo;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      margin-right: 8px;
    }

    span:nth-child(2) {
      color: #023e4f;
      font-family: Cairo;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
}

.details {
  h4:first-child {
    color: #01789a;
    font-family: Roboto;
    font-size: 20px !important;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 12px !important;
    // margin-top: 24px !important;
  }

  p {
    color: #8990a4;
    font-family: Segoe UI;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }

  &__host {
    margin-bottom: 16px !important;
    margin-top: 16px !important;
    div {
      color: #0c154a;
      font-family: Cairo;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  &__ticketNum {
    padding: 13px 16px;
    border-radius: 8px;
    background: #f0f3f5;
    p {
      color: #6b7274;
      font-family: Segoe UI;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
    }

    div {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: 39px;

      i {
        color: #f08800;
        margin-right: 10px;
      }
      span {
        color: #023e4f;
        font-family: Cairo;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }

  &__qr {
    display: flex;
    align-items: center;
    margin-top: 24px;
    margin-bottom: 70px;

    img {
      // width: 124px;
    }
    div {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      span:first-child {
        color: #8990a4;
        font-family: Cairo;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
      }

      span:nth-child(2) {
        color: #023e4f;
        font-family: Cairo;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }
}
</style>
