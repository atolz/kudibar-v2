<template>
  <div class="about-box">
    <!-- Our Story -->
    <section class="chronicles">
      <div class="container-fluid">
        <div class="row">
          <section class="col-md-12 text-center our-story py-5">
            <span>Our Story</span>
            <h1>Chronicles of Kudibar</h1>
            <div class="content text-center mt-4">
              <p>
                In 2019, the Kudibar Company was born to be a one stop shop for
                anything event ticketing and Lifestyle all over Africa. 2020
                changed everything. We evolved from a traditional online
                ticket-sales company to a Virtual Arena where the show never
                stops.
              </p>
              <p>
                With a vision of building a connected world with happy moments
                for happy people, we are more focused on showing happiness than
                ever. Through hybrid events, we create a world without walls,
                bringing people closer with the best showmen coming together,
                and hosting the world. By transforming experiences, we challenge
                old methods of showmanship, change old beliefs of events, and
                inspire better communication and connection while delivering
                happiness to all our guests. The Kudibar story is incomplete
                without YOU.
              </p>
            </div>
          </section>

          <!-- Find the events you love -->
          <section
            class="container px-5 fteyl justify-content-center align-items-center d-flex"
          >
            <div class="row mx-3">
              <div class="col-md-7">
                <h4>Find the events you love</h4>
                <p>
                  Kudibar changes everything. Explore the incredible list of
                  events, exhibitions, music festivals & all-time best shows.
                  Cut the lines, jump the queue, buy tickets, and enjoy events
                  you love.
                </p>
              </div>

              <div class="col-md-5">
                <nuxt-link
                  class="kbtn fw-light f-stroke float-end fs-14"
                  to="/"
                >
                  Explore
                  <img
                    class="ms-4"
                    src="~/assets/images/home/chevrondarkR.svg"
                    alt=""
                  />
                </nuxt-link>
              </div>
            </div>
          </section>

          <section
            class="container px-5 mb-5 justify-content-center align-items-center"
          >
            <div class="row mx-3">
              <div class="col-md-6 my-3 position-relative find-event-left">
                <img src="~/assets/images/home/finde1.svg" alt="" width="100%" />
              </div>
              <div class="col-md-6 my-3 position-relative find-event-right">
                <img src="~/assets/images/home/finde2.svg" width="100%" />
              </div>
            </div>
          </section>

          <!-- Create the event of dreams -->
          <section
            class="d-flex flex-column justify-content-center abt-details py-5"
          >
            <div
              class="row gy-32 px-md-5 justify-content-between align-items-center"
            >
              <div class="col pe-md-0 create-left-side">
                <h4 class="sub-heading fw-bold text-center text-md-start">
                  Create the event of dreams
                </h4>

                <p class="col-lg-10 text-center text-md-start">
                  The Buildings may be closed but our Venues are wide open. You
                  can create on KUDIBAR, host premium events without the
                  troubles of finding a venue, with a front-row seat for all
                  your audience.
                </p>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12">
                <img src="~/assets/images/home/love.svg" alt="" width="100%" />
              </div>
            </div>
          </section>

          <!-- Sell tickets -->
          <section
            class="d-flex flex-column justify-content-center abt-details py-5"
          >
            <div
              class="row gy-32 px-md-5 justify-content-between align-items-center"
            >
              <div class="col-lg-6 col-md-6 col-sm-12">
                <img src="~/assets/images/home/study.svg" alt="" width="100%" />
              </div>
              <div class="col pe-md-0 create-left-side">
                <h4 class="sub-heading fw-bold text-center text-md-start">
                  Sell tickets
                </h4>

                <p class="col-lg-10 text-center text-md-start">
                  The BARS are still yours. You set the rules, we obey them.
                  Either your event is a destination or virtual, you can monitor
                  ticket-sales effortlessly, seamlessly and in real-time.
                </p>
              </div>
            </div>
          </section>

          <!-- Our Culture -->
          <section
            class="d-flex flex-column justify-content-center abt-details py-5"
          >
            <div
              class="row gy-32 px-md-5 justify-content-between align-items-center"
            >
              <div class="col pe-md-0 create-left-side">
                <h4 class="sub-heading fw-bold text-center text-md-start">
                  Our Culture
                </h4>

                <p class="col-lg-10 text-center text-md-start">
                  Kudibar helps event organizers to manage, execute, and grow
                  their events. At the top of our priority is making events more
                  successful by harmonizing the connection between event
                  organizers and attendees.
                </p>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12">
                <img src="~/assets/images/home/culture.svg" alt="" width="100%" />
              </div>
            </div>
          </section>

          <!-- Getting Started -->
          <section class="container get-started text-center my-5">
            <div>
              <h2>Getting started is easy!</h2>
            </div>
            <div class="my-4">
              <p>
                Kudibar is your one stop shop for event
                <br />
                organizing and hosting
              </p>
            </div>
            <nuxt-link class="kbtn fw-light fs-14 solid dark gs" to="/">
              Get Started
              <img class="ms-4" src="~/assets/images/home/chevronR.svg" alt="" />
            </nuxt-link>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.our-story {
  background: #f0f3f5;
}

.our-story span {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 62px;
  text-transform: capitalize;
  color: #8990a4;
}

.our-story h1 {
  font-family: 'Cairo', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 62px;
  text-transform: capitalize;
  color: #023e4f;
}

.our-story p {
  font-family: 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #023e4f;
}

.content {
  width: 60%;
  margin: 0 auto;
}

.fteyl {
  margin: 60px 0px;
}

.fteyl h4 {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 62px;
  text-transform: capitalize;
  color: #023e4f;
}

.fteyl p {
  font-family: 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 29px;
  color: #023e4f;
}

.abt-details {
  background: #f0f3f5;
}

.create-left-side h4 {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  text-transform: capitalize;
  color: #023e4f;
}

.create-left-side p {
  font-family: 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 29px;
  color: #023e4f;
}

.get-started {
  h2 {
    font-family: 'Cairo';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 62px;
    color: #023e4f;
  }
  p {
    font-family: 'Segoe UI', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 24px;
    color: #023e4f;
  }
}
</style>
