<template>

   <div class="my-container">

      <!-- Mobile Slider -->
      <slider-mobile />

      <!-- Filters -->
      <nav class="filter row py-2 py-md-5">
         <div class="col-sm-12 d-flex">
            <ul class="pul" style="padding-left: 0px !important">
            <li class="chip" v-for="(nav, i) in filters" :key="i">
               <a href="#" class="chip-content">
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
      <div class="row gy-5">
         <div class="col-sm-4" v-for="(event, i) in events" :key="i">
         <div class="my-profile">
            <img src="/images/faces/avatar.jpg" alt="" />
            <span>Arthur Money</span>
         </div>

         <div class="my-card">
            <div class="my-card__head">
               <div class="img-blur"></div>
               <img src="/images/camera-stand.png" alt="event picture" />
               <div class="my-card__btnContainer">
               <button class="my-card__btn my-card__btn--paid me-auto">
                  <span>Paid</span>
               </button>
               <button class="my-card__btn my-card__btn--share ms-auto">
                  <i class="icon-Share"></i>
               </button>
               <button class="my-card__btn my-card__btn--like">
                  <!-- <i class="icon-Share"></i> -->
                  <svg class="svg-icon">
                     <use xlink:href="/images/sprite.svg#icon-love-card"></use>
                  </svg>
               </button>
               <!-- <button class="my-card__btn my-card__btn--info">
                  <i class="icon-Filter"></i>
               </button> -->
               </div>
            </div>
            <div class="my-card__body" :style="{ '--tag-color': '#1EAE07' }">
               <div>
               <h4 class="kudi-h4">
                  <nuxt-link to="/sdjdf">
                     Business Development Tactics for Startups, SME’s and Top
                     Businesses
                  </nuxt-link>
               </h4>
               </div>
               <div class="location">
               <i class="icon-Location"></i><span>Enugu State, Nigeria</span>
               </div>
            </div>
         </div>
         </div>
      </div>

      <!-- <div class="my-nav">
         <button class="round-btn-nav active">
            <i class="icon-arr-left-spear"></i>
         </button>
         <button class="round-btn-nav">
            <i class="icon-arr-right-spear"></i>
         </button>
      </div> -->
   </div>
</template>

<script>

import sliderMobile from "@/components/events/explore/slider-mobile";
export default {
   props: {
      events: {
         type: Array,
         required: true
      },
      featured: {
         type: Array,
         required: true
      },
      total: {
         type: Number,
      }
   },
   data() {
      return {
         filters: [
         {
            title: "All Events",
            active: true,
         },
         {
            title: "Happening Now",
            active: false,
         },
         {
            title: "New Event",
            active: false,
         },
         {
            title: "Top Event",
            active: false,
         },
         {
            title: "Event Near You",
            active: false,
         },
         {
            title: "Free Event",
            active: false,
         },
         {
            title: "Paid Event",
            active: false,
         },
         ],
      }
   },

  components: {
     sliderMobile
  }
}
</script>

<style lang="scss" scoped>
//Profile header
div.my-profile {
  margin-bottom: 16px;
  img {
    object-fit: cover;
    border: 2px solid #023e4f;
    height: 32px;
    border-radius: 50%;
    background: transparent;
  }

  span {
    margin-left: 8px;
    // font-family: Mark Pro;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }
}

//Card Sytle
.my-card {
  border-radius: 8px;
  overflow: hidden;
  // box-shadow: var(--kudi-shadow-default);
  box-shadow: 0 3px 21px 0 rgb(0 0 0 / 7%);

  .icon-Dot {
    margin: 0 9px;
    font-size: 6px;
    color: #01789a;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-column-gap: 30px;

    @media (max-width: 1183px) {
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      grid-column-gap: 20px;
    }
    grid-row-gap: 4rem;
    margin-bottom: 57px;
    justify-items: center;
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
    // margin-left: 10px;
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
    position: relative;

    &Container {
      position: absolute;
      top: 35px;
      padding: 0 32px;
      @media (max-width: 560px) {
        top: 21px;
        padding: 0 17px;
      }
      display: flex;
      // right: 24px;
      // margin-left: auto;
      width: 100%;
    }

    span {
      // margin-left: 16px;
    }

    &--paid {
      color: #219653;
      display: inline-flex;
      width: 71px;
      font-family: Cairo;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 10px;
      letter-spacing: 0em;
      text-align: center;
    }
    &--like {
      color: #f08800;
      margin-left: 15px;
      width: 38px;
      height: 38px;
    }
    &--share {
      color: #023e4f;
      width: 38px;
      height: 38px;
      margin-left: auto;
    }
  }

  &__body {
    position: relative;
    background-color: white;
    padding: 19px 24px 26px;

    h4 {
      font-family: Cairo;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 16px;
    }

    div {
      display: flex;
      align-items: center;
    }

    div.location {
      // margin-bottom: 25px;
      // margin-top: 16px;
      i {
        color: #9b51e0;
      }
      span {
        color: #01789a;
        // font-family: Segoe UI;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
        margin-left: 16px;
      }
    }
  }
}


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
