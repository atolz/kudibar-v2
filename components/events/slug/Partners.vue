<template>
  <div>
    <div class="partner-form">
      <div class="form" v-for="(pat, i) in partners" :key="i">
        <div class="">
          <label for="event title" class="kudi-label">Event title</label>
          <input
            id="event title"
            type="text"
            class="kudi-input"
            placeholder="Title"
          />
        </div>
        <div class="partners">
          <div class="partners__box row">
            <div class="col-md-6" v-for="(p, i2) in pat.data" :key="i2">
              <div class="partners__card">
                <div class="partners__card__body">
                  <svg
                    @click="
                      () => {
                        removeInnerPartner(i, i2);
                      }
                    "
                    class="svg-icon icon-Cancle"
                    style="cursor: pointer"
                  >
                    <use xlink:href="/images/sprite.svg#icon-Cancle"></use>
                  </svg>
                  <i class="icon-image-thumbnail"></i>
                  <label for="file">Click to add partner logo</label>
                  <input type="file" class="d-none" id="file" />
                  <span>700px by 1500px JPEG or PNG</span>
                </div>
                <div class="partners__card__footer">
                  <input type="text" placeholder="Type Partner Name" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="partners__addBox"
                @click="
                  () => {
                    addInnerPartner(i);
                  }
                "
              >
                <div><span>+</span> <span>Add Partners</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center py-4 pb-2 border-top mt-5">
      <a
        href="#"
        @click.prevent="addPartner"
        class="kudi-body-1 fw-bold mb-0 font-cario d-inline-flex"
        style="margin-bottom: 0"
      >
        Add partner category +
      </a>
      <button class="kbtn-1 kbtn-2 ms-auto">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          category: "",
          data: [{ name: "", logo: "" }],
        },
        {
          category: "",
          data: [{ name: "", logo: "" }],
        },
      ],
    };
  },

  methods: {
    addPartner() {
      this.partners.push({
        category: "",
        data: [{ name: "", logo: "" }],
      });

      console.log(this.partners.length);
    },

    addInnerPartner(i) {
      this.partners[i].data.push({ name: "", logo: "" });

      console.log(this.partners[i].data.length);
    },
    removeInnerPartner(i, i2) {
      this.partners[i].data.splice(i2, 1);
      console.log("this is i2", i2);

      // console.log(this.partners[i2].data);
    },
  },
};
</script>

<style scoped lang="scss">
.partner-form {
  height: 500px;
  overflow-y: scroll;
  &::-webkit-scrollbar-thumb {
    // background: #ff0000;
    // display: none;
  }
}
.partners {
  &__box {
    border-radius: 8px;
    width: 100%;
    max-height: 412px;
    padding: 15px 10px;
    // padding: 25px 30px 0px;
    overflow: scroll;
    &::-webkit-scrollbar-thumb {
      // background: #ff0000;
      display: none;
    }
    // min-width: 650px;
  }

  &__card {
    overflow: hidden;
    // height: 193px;
    min-width: 281px;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 3px 21px 0 rgb(0 0 0 / 7%);
    margin-bottom: 20px;

    &__body {
      background: #f0f3f5;
      display: grid;
      justify-content: center;
      align-items: center;
      justify-items: center;
      padding: 53px 47px;
      position: relative;

      svg {
        position: absolute;
        top: 10px;
        right: 10px;
      }
      .icon-image-thumbnail {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.37);
      }

      label {
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;
        color: #023e4f;
        margin: 14px;
        cursor: pointer;
      }
      span {
        color: #617b83;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;
      }
    }
    &__footer {
      width: 100%;
      input {
        width: 100%;
        padding: 14px 14px;
        color: #023e4f;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        background-color: white;
        outline: none;
        border: none;
      }
    }
  }

  &__addBox {
    width: 100%;
    min-width: 300px;
    color: #023e4f;
    font-family: Cairo;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    text-align: left;
    justify-content: center;
    align-content: center;

    div {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    span {
    }

    span:first-child {
      margin-right: 10px;
      color: #f08800;
      background: #ffe6c6;
      width: 37px;
      height: 37px;
      display: grid;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
  }
}
</style>
