<template>
  <!-- todo: active class -->
  <nav
    class="
      main-header
      navbar navbar-expand-lg
      px-md-2 px-xl-5
      py-lg-3
      shadow-sm
    "
  >
    <div class="container-fluid">
      <!-- Logo -->
      <nuxt-link class="navbar-brand mb-0" to="/">
        <img
          src="/images/logo.png"
          class="logo d-inline-block"
          alt="Kudibar Logo"
          width=""
        />
      </nuxt-link>

      <!-- <div class="ms-auto d-block d-md-none">
        <button class="back__btn">
          <i class="icon-arrow-spear-left"></i>
        </button>
        <span class="back__text">Back</span>
      </div> -->

      <!-- Authenticated- Scan button -->
      <span class="d-flex d-lg-none" v-if="authenticated">
        <nuxt-link to="/scan" class="fs-18">
          <i class="fas fa-qrcode"></i>
        </nuxt-link>
      </span>

      <!-- Toggle button-->
      <button
        v-else
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>

        <!-- <span class="navbar-toggler-icon"></span> -->
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- left unauthenticated  -->
        <ul class="navbar-nav me-auto text-primary" v-if="!authenticated">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/explore">Explore</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/why">Why Kudibar</nuxt-link>
          </li>
          <!-- <li class="nav-item">
                  <nuxt-link class="nav-link" to="/pricing">Pricing</nuxt-link>
               </li> -->
        </ul>

        <!-- right unauthenticated -->
        <ul class="navbar-nav" v-if="!authenticated">
          <!-- Sign In -->
          <li class="nav-item me-lg-4">
            <nuxt-link class="nav-link fw-bold" to="/signin">
              Sign In
            </nuxt-link>
          </li>

          <!-- Get Started -->
          <li class="nav-item">
            <nuxt-link class="kbtn solid dark gs" to="/join">
              Get Started
              <i class="icon fas fa-chevron-right ms-2"></i>
            </nuxt-link>
          </li>
        </ul>

        <!-- left authenticated -->
        <ul class="d-none d-lg-flex navbar-nav me-auto" v-else>
          <li class="nav-item" v-for="(nav, i) in navs" :key="i">
            <nuxt-link
              class="nav-link"
              :to="'/' + nav.link"
              :class="{ active: $route.name === nav.link }"
            >
              {{ nav.name }}
            </nuxt-link>
          </li>
        </ul>

        <!-- right authenticated -->
        <ul
          class="d-none d-lg-flex navbar-nav align-items-center"
          v-if="authenticated"
        >
          <!-- Scan QRcode button  -->
          <li class="nav-item me-3 me-md-4">
            <nuxt-link class="" to="/scan">
              <i class="fas fa-qrcode"></i>
            </nuxt-link>
          </li>

          <!-- Notification  -->
          <li class="nav-item me-3 me-md-4">
            <nuxt-link class="" to="/messages">
              <span class="notify">
                <span class="beep" v-if="hasMessage"></span>
                <i class="fa fa-bell"></i>
              </span>
            </nuxt-link>
          </li>

          <!-- Greeting  -->
          <li class="d-none d-xl-block nav-item">
            <a class="nav-link" href="#">
              Hi,
              <!-- first name  -->
              <span class="">
                {{ user.firstname }}
              </span>
            </a>
          </li>

          <!-- Avi and dropdown  -->
          <li class="nav-item me-3 me-md-4 dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <!-- Avi  -->
              <span
                class="avatar"
                v-if="user.avatar !== '' && user.avatar !== undefined"
              >
                <img :src="user.avatar" width="40px" class="rounded-circle" />
              </span>

              <!-- IDK  -->
              <span
                class="avatar-txt"
                :style="'background: ' + user.color"
                v-else
              >
                {{ user.firstname[0] }}
                {{ user.lastname[0] }}
              </span>
            </a>

            <ul
              class="dropdown-menu py-0 mt-20 border-0 shadow"
              :class="{ active: isDropActive }"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <nuxt-link class="dropdown-item" :to="'/@' + user.username">
                  Profile
                </nuxt-link>
              </li>

              <li>
                <nuxt-link class="dropdown-item" to="/settings">
                  Settings
                </nuxt-link>
              </li>

              <li class="py-0">
                <nuxt-link class="dropdown-item" to="/">
                  Switch account
                </nuxt-link>
              </li>

              <hr class="py-0 m-0" />

              <li>
                <a
                  class="dropdown-item py-0 red"
                  href="#"
                  @click.prevent="logout"
                >
                  Log Out
                  <i class="icon fas fa-sign-out-alt"></i>
                </a>
              </li>
            </ul>
          </li>

          <!-- Create event -->
          <li class="nav-item">
            <nuxt-link
              class="kbtn solid gs"
              to="/events/create"
              style="margin-right: 0"
            >
              Create event
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      hasMessage: false,
      // authenticated:false,
      navs: [
        {
          active: false,
          name: "My Events",
          link: "events",
        },
        {
          active: false,
          name: "My Tickets",
          link: "tickets",
        },
        // {
        //    active: false,
        //    name: 'Voyage',
        //    link: 'voyage',
        // },

        // {
        //    active: false,
        //    name: 'Messages',
        //    link: 'o-messages',
        // },
        // {
        //    active: false,
        //    name: 'Media',
        //    link: 'o-media',
        // }
      ],
      isDropActive: false,
    };
  },

  methods: {
    toggleNav() {
      let mn = document.querySelector(".main-nav");
      if (!mn.offsetParent) {
        mn.style.display = "block";
        mn.classList.add("active");
        mn.classList.add("animate__animated");
        mn.classList.add("animate__slideInRight");
        mn.classList.add("animate__faster");
        window.addEventListener("scroll", this.noScroll);
        this.watchClicked();
      } else {
        mn.classList.remove("active");
        mn.classList.remove("animate__animated");
        mn.classList.remove("animate__slideInRight");
        mn.classList.remove("animate__faster");
        mn.style.display = "none";
        window.removeEventListener("scroll", this.noScroll);
      }
    },

    noScroll() {
      window.scrollTo(0, 0);
    },

    watchClicked() {
      let navs = document.querySelectorAll(".list a");
      for (const button of navs) {
        button.addEventListener("click", (event) => {
          let mn = document.querySelector(".main-nav");
          // mn.style.display = 'none';
          // mn.classList.remove("active");
          // mn.classList.remove("animate__animated");
          // mn.classList.remove("animate__slideInRight");
          // mn.classList.remove("animate__faster");
          // window.removeEventListener('scroll', this.noScroll);
        });
      }
    },

    checkClicked(e) {
      let tag = e.target;
      let c = document.querySelector("#menuToggle input");

      if (tag.nodeName === "A") c.checked = false;
    },

    getMessages() {
      let messages = this.$store.state.page.messages;

      let mgs = messages.filter((v) => v.read == false);

      this.hasMessage = mgs.length == 0 ? false : true;
      console.log(this.hasMessage);
    },

    checkMessages() {
      if (this.authenticated) {
        let id = this.user._id;

        setInterval((_) => {
          this.$sio.emit("fetch notifications", {
            id: id,
            limit: 10,
            page: 0,
          });
        }, 5000);

        this.$sio.on("show notifications " + id, (res) => {
          let messages = res.data;
          let mgs = messages.filter((v) => v.read == false);
          this.hasMessage = mgs.length == 0 ? false : true;
        });
      }
    },

    toggleDropDown() {
      console.log("====> Drop down! <====");
      this.isDropActive = this.isDropActive ? false : true;
    },

    logout() {
      this.$store.commit("add", false);
      this.$store.commit("login", false);
      this.$auth.logout();
    },
  },

  mounted() {
    // this.getMessages();
    this.checkMessages();

    let _that = this;

    window.addEventListener("mouseup", (event) => {
      _that.isDropActive = false;
    });
  },
};
</script>

<style lang="scss" scoped>
.pt-10 {
  padding-top: 10px;
}

.red {
  color: #ff1010;
}

hr {
  margin: 0.5rem 0;
}

.dropdown-item.active,
.dropdown-item:active {
  color: #1e2125;
  text-decoration: none;
  background-color: #e9ecef;
}
</style>
