<template>
  <div class="container">
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

    <div class="kudi-h3 mb-5">Created Events</div>

    <div class="my-card__container">
      <div class="my-card">
        <div class="my-card__head">
          <div class="img-blur"></div>
          <img src="/images/party-girls.png" alt="event picture" />
          <div class="my-card__btnContainer">
            <button class="my-card__btn my-card__btn--share">
              <i class="icon-Share"></i><span>700k</span>
            </button>
            <button class="my-card__btn my-card__btn--like">
              <i class="icon-Love"></i><span>30</span>
            </button>
            <!-- <button class="my-card__btn my-card__btn--info">
              <i class="icon-Filter"></i>
            </button> -->
          </div>
        </div>
        <div class="my-card__body" :style="{ '--tag-color': '#1EAE07' }">
          <div>
            <h4 class="kudi-h4">Music Jam Festival</h4>
            <Label
              :text="'Approved'"
              :color="'#023E4F'"
              :bg="'#B4E1FD'"
              style="margin-right: 10px"
            />
          </div>
          <div class="status">
            <span>Offline event</span><span class="dot icon-Dot"></span
            ><span>July 10, 2021</span>
          </div>
        </div>
      </div>
      <div class="my-card">
        <div class="my-card__head">
          <div class="img-blur"></div>
          <img src="/images/party-girls.png" alt="event picture" />
          <div class="my-card__btnContainer">
            <!-- <button class="my-card__btn my-card__btn--share">
              <i class="icon-Filter"></i><span>700k</span>
            </button>
            <button class="my-card__btn my-card__btn--like">
              <i class="icon-Filter"></i><span>30</span>
            </button> -->
            <button class="my-card__btn my-card__btn--info">
              <i class="icon-info-circle"></i>
            </button>
          </div>
        </div>
        <div class="my-card__body" :style="{ '--tag-color': '#F08800' }">
          <div>
            <h4 class="kudi-h4">Music Jam Festival</h4>
            <Label
              :text="'Approved'"
              :color="'#F08800'"
              :bg="'#FCE3C2'"
              style="margin-right: 10px"
            />
          </div>
          <div class="status">
            <span>Offline event</span><i class="icon-Dot"></i
            ><span>July 10, 2021</span>
          </div>
        </div>
      </div>
      <div class="my-card">
        <div class="my-card__head">
          <div class="img-blur"></div>
          <img src="/images/party-girls.png" alt="event picture" />
          <div class="my-card__btnContainer">
            <!-- <button class="my-card__btn my-card__btn--share">
              <i class="icon-Filter"></i><span>700k</span>
            </button>
            <button class="my-card__btn my-card__btn--like">
              <i class="icon-Filter"></i><span>30</span>
            </button> -->
            <button class="my-card__btn my-card__btn--info">
              <i class="icon-info-circle"></i>
            </button>
          </div>
        </div>
        <div class="my-card__body" :style="{ '--tag-color': '#C11E1E' }">
          <div>
            <h4 class="kudi-h4">Music Jam Festival</h4>
            <kudi-label
              :text="'Approved'"
              :color="'#C11E1E'"
              :bg="'#FECDCD'"
              style="margin-right: 10px"
            />
          </div>
          <div class="status">
            <span>Offline event</span><i class="icon-Dot"></i
            ><span>July 10, 2021</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <component v-bind:is="Tickets"></component> -->
    <!-- <Tickets /> -->
  </div>
</template>

<script>
import kudiLabel from "@/components/events/label.vue";
// import Tickets from "@/components/events/Tickets.vue";
export default {
  components: {
    kudiLabel,
    // Tickets,
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--kudi-shadow-default);

  .icon-Dot {
    margin: 0 9px;
    font-size: 6px;
    color: #01789a;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 1.6rem;
    grid-row-gap: 4rem;
    margin-bottom: 8.6rem;
  }

  &__head {
    // height: 15vw;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .img-blur {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
    }
  }

  &__btn {
    border: none;
    margin-left: 10px;
    outline: none;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.973);
    padding: 10px 10px;
    height: 38px;
    display: inline-grid;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    &Container {
      position: absolute;
      top: 12px;
      right: 24px;
      margin-left: auto;
    }

    span {
      margin-left: 16px;
    }

    &--share {
      color: #219653;
      width: 90px;
    }
    &--like {
      color: #f08800;
      width: 87px;
    }
    &--info {
      color: #023e4f;
      width: 38px;
      height: 38px;
    }
  }

  &__body {
    position: relative;
    background-color: white;
    padding: 19px 24px 26px;
    &::before {
      content: "";
      width: 6px;
      height: 56px;
      // display: block;
      position: absolute;
      top: 30px;
      left: 0;
      border-radius: 0 40px 40px 0;
      background-color: var(--tag-color);
    }

    div {
      display: flex;
      &:first-child {
        justify-content: space-between;
        align-items: center;
        h4 {
          margin-bottom: 0px !important;
          @media screen {
          }
        }
      }
    }

    div.status {
      color: #8990a4;
      font-family: Cairo;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: left;
      display: inline-grid;
      grid-auto-flow: column;
      align-content: center;
      align-items: center;

      span.dot {
        // margin: 0 20px;
        // font-size: 10px;
      }
    }
  }
}
</style>