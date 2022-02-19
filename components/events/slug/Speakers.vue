<template>
  <div class="form">
    <div
      class="
        row
        justify-items-center
        align-items-center
        border-bottom
        py-3
        pb-4
      "
    >
      <div class="col-md-8 align-items-center">
        <input
          id="event title"
          type="text"
          class="kudi-input"
          style="margin-bottom: 0"
          placeholder="Enter email address or Name"
        />
      </div>
      <div class="col-md-4">
        <button class="kbtn-1 kbtn-2">Send Invite</button>
      </div>
    </div>

    <div class="row mt-5">
      <div class="my-table">
        <div class="my-table__row">
          <img src="/images/user-1.jpg" alt="" />
          <span>Sam Micheal</span>
          <i
            class="icon-option-3dot options"
            style="font-size: 7px; cursor: pointer"
            @click="toggleShow()"
          >
            <ul v-if="show" class="options__dropDown">
              <li class="active">Add agenda</li>
              <li>View agenda</li>
              <li>Remove</li>
            </ul>
          </i>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center py-4 border-top mt-5">
      <span
        class="
          kudi-body-1
          fw-bold
          mb-0
          font-cario
          d-inline-flex
          align-items-center
          cursor-pointer
        "
        style="margin-bottom: 0; cursor: pointer"
      >
        <i class="icon-copy-ring me-3"></i>Copy link to share
      </span>
      <!-- <button class="kbtn-1 kbtn-2 ms-auto">Update</button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },

  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped lang="scss">
.invite {
  @media (max-width: 767px) {
    margin-left: auto !important;
    margin-top: 15px;
  }
}
.my-table {
  min-height: 160px;
  overflow: scroll;
  position: relative;

  .options {
    position: relative;
    z-index: 1;
    padding: 2px;
    &__dropDown {
      box-shadow: var(--kudi-shadow-default);
      position: absolute;
      top: 10px;
      right: 0;
      list-style: none;
      padding: 8px 5px;
      border-radius: 10px;
      z-index: 10000;
      margin-bottom: 10px;
      text-align: center;

      .active {
        background: #f5f5f5;
      }
      li {
        text-align: center !important;
        white-space: nowrap;
        color: #023e4f;
        font-family: Cairo;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        padding: 4px 25px;
        border-radius: 10px;

        &:not(:last-child) {
          margin-bottom: 6px;
        }

        &:nth-child(3) {
          color: #c61a1a;
        }
      }
    }
  }

  &__info {
    color: #585c67;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
  }
  &__row {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    & > * {
      display: inline-flex;
    }

    img {
      margin-right: 10px;
    }

    i {
      margin-left: auto;
    }

    span {
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

  &__copy {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f3f5;
    border-radius: 8px;
    padding: 11px 18px;

    span {
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: black;
    }

    i {
      color: #8737ed;
    }
  }
}
</style>