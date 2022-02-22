<template>
  <div class="hero" ref="background" style="position: relative">
    <div class="blur-grad" ref="topGrad"></div>
    <div class="blur-grad" ref="bottomGrad"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="host">
            <h3 class="">Host Your</h3>
          </div>
        </div>
        <div class="col-md-8" style="position: relative">
          <!-- <div class="blur-grad" ref="topGrad"></div>
          <div class="blur-grad" ref="bottomGrad"></div> -->
          <!-- <div class="blur-grad--mobile" ref="topGrad"></div>
          <div class="blur-grad--mobile" ref="bottomGrad"></div> -->
          <div class="overlay"></div>
          <div class="events hide-scrollbar" ref="events">
            <div class="events__type"><p class="master">Masterclass</p></div>
            <div class="events__type"><p class="conference">Conference</p></div>
            <div class="events__type"><p class="parties">Parties</p></div>
            <div class="events__type"><p class="training">Trainings</p></div>
            <div class="events__type"><p class="master">Masterclass</p></div>
            <div class="events__type"><p class="conference">Conference</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mess: "This is a message",
      eventsScrollRef: "",
      eventTypes: [
        { name: "Confrence", color: "#FFF0DC" },
        { name: "Parties", color: "#EDFFF5" },
        { name: "Training", color: "#C9E9FD" },
        { name: "Masterclass", color: "#F0E3FF" },
      ],
    };
  },
  methods: {
    startTimer: function () {
      console.log("TImer starting...");
      console.log("This is the vallue of mess in startimer", this.mess);
      console.log("this is the value of ref", this.$refs.events);
      if (this.eventsScrollRef) {
        console.log("In if function.. printing evenstscrool ref");
        console.log(this.eventsScrollRef);
      } else {
        console.log("In else assingnin eventsscroll");
        this.eventsScrollRef = this.$refs.events;
        this.background = this.$refs.background;
        this.topGrad = this.$refs.topGrad;
        this.bottomGrad = this.$refs.bottomGrad;
      }

      let val = 184.33;
      let count = 0;
      let colorIndex = 1;
      setInterval(
        function () {
          console.log(
            "Timeout runnung fine, value of events scrool is ...",
            this.$refs.events
          );
          if (val >= 585.32) {
            val = 0;
            count = 0;
            colorIndex = 0;
          }
          if (colorIndex < 4) {
            console.log("color index is", this.topGrad.style);
            this.background.style.backgroundColor =
              this.eventTypes[colorIndex].color;
            this.topGrad.style.background = `linear-gradient(
      180deg,
      ${this.eventTypes[colorIndex].color} 14.12%, rgba(2, 62, 79, 0) 100.55%, rgba(1, 120, 154, 0) 134.55%
    )`;
            this.bottomGrad.style.background = `linear-gradient(
      360deg,
      ${this.eventTypes[colorIndex].color}  14.12%, rgba(2, 62, 79, 0) 100.55%, rgba(1, 120, 154, 0) 134.55%
    )`;

            console.log("top grad syle is ", this.topGrad.style.background);
          }
          this.eventsScrollRef.scroll(0, val);

          val = val + 184.33;
          count = count + 1;
          colorIndex = colorIndex + 1;
          console.log(val);
        }.bind(this),
        3000
      );
    },
  },
  mounted() {
    console.log("IN mounted, calling timmer");
    this.startTimer();
  },
};
</script>

<style lang="scss" scoped>
@mixin centralize {
  display: grid;
  justify-content: center;
  align-content: center;
}

.blur-grad {
  width: 100%;
  // height: 30px;
  height: 170px;
  position: absolute;
  left: 0;
  z-index: 1000;
  transition: 0.4s all;

  @media (max-width: 765px) {
    display: none;
  }
  &:nth-child(1) {
    top: 0;
    background: linear-gradient(
      180deg,
      #fff0dc 22.12%,
      rgba(2, 62, 79, 0) 156.55%,
      rgba(1, 120, 154, 0) 84.55%
    );

    // background: linear-gradient(
    //   180deg,
    //   #adedff -14.88%,
    //   rgba(2, 62, 79, 0) 81.55%,
    //   rgba(1, 120, 154, 0) 81.55%
    // );
  }
  &:nth-child(2) {
    bottom: 0 !important;
    // background: linear-gradient(rgba(0, 0, 255, 0), #fff0dc) no-repeat;
    background: linear-gradient(
      360deg,
      #fff0dc 14.12%,
      rgba(2, 62, 79, 0) 100.55%,
      rgba(1, 120, 154, 0) 134.55%
    );
  }

  // &--mobile {
  //   display: none;
  //   @media (max-width: 765px) {
  //     display: block;
  //   }
  // }
}
.blur-grad--mobile {
  width: 100%;
  // height: 30px;
  height: 170px;
  position: absolute;
  left: 0;
  z-index: 1000;
  transition: 0.4s all;
  display: none;

  @media (max-width: 765px) {
    display: block;
  }
  &:nth-child(1) {
    top: 0;
    background: linear-gradient(
      180deg,
      #fff0dc 22.12%,
      rgba(2, 62, 79, 0) 156.55%,
      rgba(1, 120, 154, 0) 84.55%
    );

    // background: linear-gradient(
    //   180deg,
    //   #adedff -14.88%,
    //   rgba(2, 62, 79, 0) 81.55%,
    //   rgba(1, 120, 154, 0) 81.55%
    // );
  }
  &:nth-child(2) {
    bottom: 0 !important;
    // background: linear-gradient(rgba(0, 0, 255, 0), #fff0dc) no-repeat;
    background: linear-gradient(
      360deg,
      #fff0dc 14.12%,
      rgba(2, 62, 79, 0) 100.55%,
      rgba(1, 120, 154, 0) 134.55%
    );
  }

  // &--mobile {
  //   display: none;
  //   @media (max-width: 765px) {
  //     display: block;
  //   }
  // }
}

.hero {
  height: 439px;
  width: 100%;
  overflow: hidden;
  background: #fff0dc;
  transition: 1s all;
  @media (max-width: 765px) {
    height: max-content;
  }
}

.host {
  @include centralize;
  height: 439px;
  display: grid;
  justify-content: end;
  @media (max-width: 765px) {
    justify-content: center;
    height: 120px;
  }
  // background: salmon;

  h3 {
    color: #023e4f;
    font-family: Cairo;
    font-size: 60px;
    font-style: normal;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: left;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background-color: rgba(0, 0, 255, 0.226);
  z-index: 10;
}
.events {
  position: relative;
  overflow: scroll;
  text-align: left;
  // background: palevioletred;
  height: 439px;
  overflow: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  transition: all 2s;

  display: grid;
  justify-content: center;
  &__type {
    height: 184.33px;
    display: grid;
    // align-items: center;
    scroll-snap-align: start;
    p {
      font-family: "Mark Pro", sans-serif;
      margin-bottom: 0px;
      font-size: 72px;
      font-style: normal;
      font-weight: 700;
      line-height: 72px;
      letter-spacing: 0em;
      text-align: left;
      @media (max-width: 765px) {
        text-align: center;
        font-size: 50px;
      }
    }
  }
}

.master {
  color: #8737ed;
}
.conference {
  color: #f08800;
}
.parties {
  color: #0c8720;
}
.training {
  color: #023e4f;
}

@keyframes up-slider {
  0% {
  }
  25% {
  }
  50% {
  }
  75% {
  }
  100% {
  }
}
</style>