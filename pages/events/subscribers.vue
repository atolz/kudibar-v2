
   
<template>
  <div class="container my-5">
    <section>
      <nuxt-link class="ps-1 text-decoration-none" to="">
        <img class="pe-3" src="/images/img/back.svg" alt="" />
      </nuxt-link>
    </section>

    <!-- Search Field -->
    <section class="my-5 pb-5">
      <div class="row">
        <div class="col-md-10 mt-2">
          <label class="search-input">
            <input
              class=""
              type="text"
              placeholder="Search for subscribers, ref. number"
            />
          </label>
        </div>
        <div class="col-md-2 d-flex mt-2">
          <nuxt-link class="kbtn fw-light f-stroke fs-14" to="">
            <img class="pe-2" src="/images/img/filterIcon.svg" alt="" />
            Filter
            <img class="ps-2" src="/images/img/filterD.svg" alt="" />
          </nuxt-link>
        </div>
      </div>
    </section>

    <!-- Subscribers / Attendance / People -->
    <div class="row d-flex justify-content-between">
      <div class="col-md-10 d-flex">
        <div
          class=""
          v-for="(tab, i) in tabs"
          :key="i"
          :class="{ active: tab.active }"
          @click.prevent="toggleTab(i)"
        >
          <nuxt-link class="kbtn f-stroke fs-14 me-2 my-2" to="">
            {{ tab.title }}
          </nuxt-link>
        </div>
      </div>

      <div class="col-md-2 total-sub">
        <img class="me-3" src="/images/img/sub.svg" alt="" width="15px" />
        <span>
          Total subscribers -
          <b>10</b>
        </span>
      </div>
    </div>

    <section class="my-5">
      <!-- Subscribers Details  -->
      <div class="col-lg-12">
        <div class="" v-if="tabs[0].active">
          <table id="subscribersTable" class="sub-table">
            <thead class="text-left">
              <tr class="text-left">
                <th>Name</th>
                <th>Status</th>
                <th>Ticket Number</th>
                <th>Tickets</th>
                <th>Date Purchased</th>
              </tr>
            </thead>
            <tbody>
              <!-- Verified Subscribers -->
              <tr class="text-left" v-for="vsub in vsubs" :key="vsub">
                <td class="py-2">
                  <nuxt-link class="text-decoration-none" to="">
                    <img class="pe-3" src="/images/img/subpic.svg" alt="" />
                    {{ vsub.name }}
                  </nuxt-link>
                </td>
                <td class="py-2">
                  <nuxt-link class="text-decoration-none" to="">
                    <img class="pe-3" src="/images/img/verified.svg" alt="" />
                    {{ vsub.status }}
                  </nuxt-link>
                </td>
                <td class="py-2">
                  <nuxt-link class="text-decoration-none" to="">
                    {{ vsub.ticketNumber }}
                  </nuxt-link>
                </td>
                <td class="py-2">
                  <nuxt-link class="text-decoration-none" to="">
                    <img class="pe-3" src="/images/img/tick.svg" alt="" />
                    {{ vsub.tickets }}
                  </nuxt-link>
                </td>
                <td class="py-2">
                  <nuxt-link class="text-decoration-none" to="">
                    {{ vsub.datePurchased }}
                  </nuxt-link>
                </td>
              </tr>

              <!--Not Verified Subscribers -->
              <tr
                class="text-left not-verified"
                v-for="nvsub in nvsubs"
                :key="nvsub"
              >
                <td class="py-2">
                  <nuxt-link class="text-decoration-none" to="/notverified">
                    <img class="pe-3" src="/images/img/subpic.svg" alt="" />
                    {{ nvsub.name }}
                  </nuxt-link>
                </td>
                <td class="py-2">
                  <nuxt-link class="text-decoration-none" to="/notverified">
                    <img class="pe-3" src="/images/img/not.svg" alt="" />
                    {{ nvsub.status }}
                  </nuxt-link>
                </td>
                <td class="py-2">
                  <nuxt-link class="text-decoration-none" to="/notverified">
                    {{ nvsub.ticketNumber }}
                  </nuxt-link>
                </td>
                <td class="py-2">
                  <nuxt-link class="text-decoration-none" to="/notverified">
                    <img class="pe-3" src="/images/img/tick.svg" alt="" />
                    {{ nvsub.tickets }}
                  </nuxt-link>
                </td>
                <td class="py-2">
                  <nuxt-link class="text-decoration-none" to="/notverified">
                    {{ nvsub.datePurchased }}
                  </nuxt-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Attendance -->
        <div class="" v-if="tabs[1].active">
          <table id="subscribersTable" class="sub-table">
            <thead>
              <tr class="">
                <th>Name</th>
                <th>Day 1</th>
                <th>Day 2</th>
                <th>Day 3</th>
                <th>Day 4</th>
                <th>Day 5</th>
                <th>Day 6</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="text-left"
                v-for="attendant in attendance"
                :key="attendant"
              >
                <td class="py-2">
                  <a href="">
                    <img class="pe-3" src="/images/img/subpic.svg" alt="" />
                    {{ attendant.name }}
                  </a>
                </td>

                <td class="py-2">
                  <img class="pe-3" src="/images/img/good.svg" alt="" />
                </td>
                <td class="py-2">
                  <img class="pe-3" src="/images/img/bad.svg" alt="" />
                </td>
                <td class="py-2">
                  <img class="pe-3" src="/images/img/good.svg" alt="" />
                </td>
                <td class="py-2">
                  <img class="pe-3" src="/images/img/good.svg" alt="" />
                </td>
                <td class="py-2">
                  <img class="pe-3" src="/images/img/good.svg" alt="" />
                </td>
                <td class="py-2">
                  <img class="pe-3" src="/images/img/good.svg" alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- People -->
        <div class="" v-if="tabs[2].active">
          <table id="subscribersTable" class="sub-table">
            <thead>
              <tr class="text-left">
                <th>Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-left" v-for="person in people" :key="person">
                <td class="py-2">
                  <a href="">
                    <img class="pe-3" src="/images/img/subpic.svg" alt="" />
                    {{ person.name }}
                  </a>
                </td>
                <td class="py-2">
                  <a href="">
                    {{ person.email }}
                  </a>
                </td>
                <td class="py-2">
                  <a href="">{{ person.phoneNumber }}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Subscribers",
      meta: [],
    };
  },
  data() {
    return {
      tabs: [
        {
          title: "Subscribers",
          active: true,
        },
        {
          title: "Attendance",
          active: false,
        },
        {
          title: "People",
          active: false,
        },
      ],
      vsubs: [
        {
          name: "John Micheal",
          status: "Verified",
          ticketNumber: "654TTYKL",
          tickets: "5 Tickets",
          datePurchased: "23/06/2021",
        },
      ],
      nvsubs: [
        {
          name: "John Micheal",
          status: "Not Verified",
          ticketNumber: "654TTYKL",
          tickets: "5 Tickets",
          datePurchased: "23/06/2021",
        },
      ],
      people: [
        {
          name: "John Micheal",
          email: "Johnmichael@gmail.com",
          phoneNumber: "081456384885",
        },
      ],
      attendance: [
        {
          name: "John Micheal",
          day1: "",
          day2: "",
          day3: "",
          day4: "",
          day5: "",
          day6: "",
        },
      ],
    };
  },
  methods: {
    toggleTab(i) {
      this.tabs.map((v) => (v.active = false));
      this.tabs[i].active = true;
      this.activeScreen = i;
    },
  },
};
</script>

<style lang="scss" scoped>
.search-input input {
  border: 1px solid #d3d8dd;
  border-radius: 8px;
  padding: 10px 70px;
  width: 60vw;
}
.search-input input::placeholder {
  font-family: "Cairo";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #bababa;
}
label {
  position: relative;
}
label:before {
  content: "";
  position: absolute;
  background: url(/images/img/search.svg) no-repeat;
  left: 30px;
  bottom: 0;
  top: 13px;
  width: 20px;
}
table {
  font-family: "Cairo", sans-serif;
  width: 100%;
}
table th {
  text-align: left;
  padding: 8px 20px;
  background: #f0f3f5;
  color: #023e4f;
  font-family: "Cairo", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 19px;
}
table td {
  padding: 8px 20px;
}
.total-sub {
  font-family: "Cairo", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #023e4f;
}
.not-verified {
  background: #f0f3f5;
  border: 8px;
}
.sub-table a {
  text-decoration: none;
}
/* .head {
  background: #f0f3f5;
  border-radius: 8px;
}
.head p {
  font-family: 'Cairo', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 19px;
  color: #023e4f;
} */
</style>
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
