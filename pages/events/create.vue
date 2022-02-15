<template>
  <div class="container">
    <div class="row back align-items-center py-4 mb-3">
      <div class="col">
        <button class="back__btn">
          <i class="icon-arrow-spear-left"></i>
        </button>
        <span class="back__text">Back</span>
      </div>
    </div>
    <div class="row g-4 g-md-0">
      <div class="col-12 col-md-4 col-lg-3">
        <!-- Side menu -->
        <ul class="ce-list nav nav-fill flex-wrap flex-md-column">
          <li class="me-3 me-md-0" v-for="(nav, i) in filters" :key="i">
            <a
              href="#"
              :class="{ active: nav.active }"
              @click.prevent="toggleProcess(i)"
            >
              <span v-html="nav.title" class="d-none d-md-block"></span>
              <span
                v-if="nav.active"
                v-html="nav.title"
                class="d-md-none"
              ></span>
              <span v-if="!nav.active" class="d-md-none">{{ i + 1 }}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-8 col-lg-7">
        <!-- Basic info section -->
        <div class="form hide" :class="{ show: filters[0].active }">
          <basic-info />
        </div>

        <!-- Ticket Category -->
        <div class="form hide" :class="{ show: filters[1].active }">
          <ticket-category />
        </div>

        <!-- Media and Contact -->
        <div class="form hide" :class="{ show: filters[2].active }">
          <media-contact />
        </div>

        <!-- Preview and submit -->
        <div class="form hide" :class="{ show: filters[3].active }">
          <prev-submit />
        </div>

        <!-- Next/Back -->
        <div class="d-flex mb-5 mt-2">
          <button
            @click.prevent="toggleProcess(activeScreen + 1)"
            class="kbtn-1 kbtn-2 me-4"
          >
            Next
          </button>
          <button
            @click.prevent="toggleProcess(activeScreen - 1)"
            v-if="activeScreen != 0"
            class="kbtn-1 kbtn-2 kbtn-2--outlined"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ticketCategory from "@/components/events/create/ticket-category.vue";
import basicInfo from "@/components/events/create/basic-info.vue";
import mediaContact from "@/components/events/create/media-contact.vue";
import prevSubmit from "@/components/events/create/prev-submit.vue";

import fileBox from "@/components/files/toggle";
import videoUrl from "@/components/util/video";
import loader from "@/components/util/loader";
import svgIcon from "@/components/util/svg-loader";
import fieldErrors from "@/components/input/validation";
import moment from "moment";

export default {
  data() {
    return {
      activeScreen: 0,
      filters: [
        {
          title: "Basic Info",
          link: "basic",
          active: true,
        },
        {
          title: "Ticket Categories",
          link: "payment",
          active: false,
        },

        {
          title: "Media & Contact",
          link: "rsvp",
          active: false,
        },
        {
          title: "Preview & submit",
          link: "preview",
          active: false,
        },
      ],
    };
  },
  methods: {
    /**
     * Toggle process tab
     */
    toggleProcess(i) {
      //Toggle for only valid i
      if (i < 0 || i > this.filters.length - 1) return;

      this.filters.map((v) => (v.active = false));
      this.filters[i].active = true;
      this.activeScreen = i;
    },

    // goNextBack(type) {
    //   let num = parseInt(this.activeScreen);

    //   if (type === "next") {
    //     this.validateNext(num);
    //   }

    //   if (type === "back") {
    //     this.filters.map((v) => (v.active = false));
    //     let i = num != 0 ? num - 1 : 0;
    //     this.filters[i].active = true;
    //     this.activeScreen = i;
    //   }
    // },
  },
  components: {
    ticketCategory,
    basicInfo,
    mediaContact,
    prevSubmit,
  },
};
</script>

<style>
</style>