<template>
  <div class="container">
    <!-- Frequently Asked Questions -->
    <section class="faq-title text-center">
      <h1>Frequently Asked Questions</h1>
    </section>


    <div class="row g-4 g-md-0 my-5 d-flex justify-content-between">
      <!-- Side menu -->
      <div class="col-12 col-md-4 col-lg-3 my-5 py-3 ps-5">
        <ul class="side-list nav nav-fill flex-wrap flex-md-column">
          <li class="me-3 me-md-0" v-for="(nav, i) in filters" :key="i">
            <a
              href="#"
              :class="{ active: nav.active }"
              @click.prevent="toggleProcess(i)"
            >
              <span v-html="nav.title"></span>
            </a>
          </li>
        </ul>
      </div>

      <div class="col-12 col-md-8 col-lg-8 justify-content-end">
        <div v-if="filters[0].active"></div>

        <!-- Why should I use Kudibar for my events? -->
        <div class="container accordion">
          <ul class="accordion_inner">
            <li>
              <input
                type="checkbox"
                name="accordion"
                id="qst1"
                class="accordion_qst hidden"
              />
              <label for="qst1" class="accordion_title">
                <span class="accordion_span">
                  Why should I use Kudibar for my events?
                </span>
                <span class="icon"></span>
              </label>
              <div class="accordion_content">
                <p>
                  Our platform is ever open 24/7. This means that you can
                  purchase discounted tickets from us anywhere and anytime you
                  want. Thus, you can purchase event tickets at the time that is
                  convenient for you. We verify every event on our platform to
                  reduce the risk of you loosing your money. We only associate
                  our brand with events that create joy.
                </p>
              </div>
            </li>

            <li>
              <input
                type="checkbox"
                name="accordion"
                id="qst2"
                class="accordion_qst hidden"
              />
              <label for="qst2" class="accordion_title">
                <span class="accordion_span">
                  How do I get started?
                </span>
                <span class="icon"></span>
              </label>
              <div class="accordion_content">
                <p>
                  Our platform is ever open 24/7. This means that you can
                  purchase discounted tickets from us anywhere and anytime you
                  want. Thus, you can purchase event tickets at the time that is
                  convenient for you. We verify every event on our platform to
                  reduce the risk of you loosing your money. We only associate
                  our brand with events that create joy.
                </p>
              </div>
            </li>

            <li>
              <input
                type="checkbox"
                name="accordion"
                id="qst3"
                class="accordion_qst hidden"
              />
              <label for="qst3" class="accordion_title">
                <span class="accordion_span">
                  How can I buy tickets?
                </span>
                <span class="icon"></span>
              </label>
              <div class="accordion_content">
                <p>
                  Our platform is ever open 24/7. This means that you can
                  purchase discounted tickets from us anywhere and anytime you
                  want. Thus, you can purchase event tickets at the time that is
                  convenient for you. We verify every event on our platform to
                  reduce the risk of you loosing your money. We only associate
                  our brand with events that create joy.
                </p>
              </div>
            </li>

            <li>
              <input
                type="checkbox"
                name="accordion"
                id="qst4"
                class="accordion_qst hidden"
              />
              <label for="qst4" class="accordion_title">
                <span class="accordion_span">
                  How many tickets can I buy using kudibar?
                </span>
                <span class="icon"></span>
              </label>
              <div class="accordion_content">
                <p>
                  Our platform is ever open 24/7. This means that you can
                  purchase discounted tickets from us anywhere and anytime you
                  want. Thus, you can purchase event tickets at the time that is
                  convenient for you. We verify every event on our platform to
                  reduce the risk of you loosing your money. We only associate
                  our brand with events that create joy.
                </p>
              </div>
            </li>

            <li>
              <input
                type="checkbox"
                name="accordion"
                id="qst5"
                class="accordion_qst hidden"
              />
              <label for="qst5" class="accordion_title">
                <span class="accordion_span">
                  Does Kudibar offer extra services?
                </span>
                <span class="icon"></span>
              </label>
              <div class="accordion_content">
                <p>
                  Our platform is ever open 24/7. This means that you can
                  purchase discounted tickets from us anywhere and anytime you
                  want. Thus, you can purchase event tickets at the time that is
                  convenient for you. We verify every event on our platform to
                  reduce the risk of you loosing your money. We only associate
                  our brand with events that create joy.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'faq',
      meta: [],
    }
  },

  data() {
    return {
      filters: [
        {
          title: 'General',
          link: 'general',
          active: true,
        },
        {
          title: 'Events',
          link: 'events',
          active: false,
        },
        {
          title: 'Payment',
          link: 'payment',
          active: false,
        },
        {
          title: 'Security',
          link: 'security',
          active: false,
        },
      ],
    }
  },

  methods: {
    toggleProcess(i) {
      this.filters.map((v) => (v.active = false))
      this.filters[i].active = true
      this.activeScreen = i
    },
  },
}
</script>

<style lang="scss" scoped>
.faq-title {
  margin-top: 100px;
}

.side-list {
  list-style: none;
  font-size: 1rem;
  font-weight: normal;
  font-style: normal;
  padding-left: 0;

  a {
    font-family: 'Cairo';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    text-transform: capitalize;
    color: #023e4f;
    text-decoration: none;

    &.active {
      font-family: 'Cairo';
      font-style: normal;
      font-weight: bold;
      font-size: 23px;
      text-transform: capitalize;
      color: #01789a;
    }
  }

  li {
    padding-bottom: 1.5rem;

    &:last-child {
      padding-bottom: 0;
    }
  }
}

@media (min-width: 768px) {
  .side-list {
    border-left: 2px solid #ddd;
    padding-left: 23px;
    position: relative;

    a {
      position: relative;
      border-radius: 0;
      border: 0;
      padding: 0;

      &.active {
        &::after {
          content: '';
          width: 4px;
          height: 40px;
          background: #01789a;
          display: block;
          position: absolute;
          left: -26px;
          top: 0;
        }
      }
    }
  }
}

/* .accordion-item {
  border: none;
  margin-bottom: 1rem;
}

.accordion-link {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  color: #0c154a;
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
} */

/* .accordion-link img {
} */

/* .accordion-link .remove {
  display: none;
}

.answer {
  max-height: 0;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid #f2f2f2;
  transition: max-height 650ms;
} */

/* .answer::before {
  content: '';
  position: absolute;
  transform: translateY(-50%);
} */

/* .answer p {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #585c67;
  padding-bottom: 25px;
}

.accordion-item:target .answer {
  max-height: 20rem;
}

.accordion-item:target .accordion-link .add {
  display: none;
}

.accordion-item:target .accordion-link .remove {
  display: block;
} */

/* .accordion {
  overflow: hidden;
}

.accordion__label,
.accordion__content {
  padding: 14px 20px;
}

.accordion__label {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  color: #0c154a;
  position: relative;
  cursor: pointer;
  display: block;
}

.accordion__label::after {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  width: 50px;
  height: 25px;
  background-image: url(~/assets/img/plus.svg);
  background-size: contain;
} */

/* .accordion__label,
.accordion__content {
  padding: 14px 20px;
} */

/* .accordion__label {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  color: #0c154a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  transition: 0.1s ease;
}

.accordion__label .icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1px solid red;
  border-radius: 50%;
  flex-shrink: 0;
  transition: inherit;
}

.accordion__label .icon::before,
.accordion__label .icon::after {
  content: '';
  display: block;
  width: 25px;
  height: 1px;
  background-color: #01789A;
  transition: inherit;
  transition: 0.1s ease;
}

.accordion__label .icon::after {
  position: absolute;
  transform: rotate(90deg);
}

.accordion > .accordion_inner {
  border-bottom: 1px solid #f2f2f2;
}

.accordion__content {
  position: relative;
  max-height: 0;
  overflow: hidden;
  color: red;
  padding: 0 16px;
  transition: 0.1s ease;
}

.accordion__content > *:first-child {
  margin-top: 0;
}

.accordion__content > *:last-child {
  margin-bottom: 0;
}

.accordion__input:checked ~ .accordion__content {
  max-height: 100vh;
  padding-bottom: 16px;
}

.accordion__input:checked ~ .accordion__label .icon::after {
  opacity: 0;
  visibility: hidden
} */

.hidden {
  display: none;
}

.accordion_inner {
  list-style: none;
  padding: 0;
  margin: 1.4rem 0;
  overflow: hidden;
}

.accordion_inner > li:not(:last-child) {
  border-bottom: 1px solid #f2f2f2;

}

.accordion_title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 15px;
  transition: 0.1s ease;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  color: #0c154a;
}

.accordion_title .icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  transition: inherit;
  margin-left: 10px;
  flex-shrink: 0;
}

.accordion_title .icon::before,
.accordion_title .icon::after {
  content: '';
  display: block;
  width: 20px;
  height: 2px;
  background-color: #01789a;
  transition: 0.1s ease;
}

.accordion_title .icon::after {
  position: absolute;
  transform: rotate(90deg);
}

.accordion_content {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #585c67;
  position: relative;
  max-height: 0;
  overflow: hidden;
  padding: 5px 0px;
  transition: 0.1s ease;
}

.accordion_content > *:first-child {
  margin-top: 0;
}

.accordion_content > *:last-child {
  margin-bottom: 0;
}

.accordion_qst:checked ~ .accordion_content {
  max-height: 100vh;
  padding-bottom: 16px;
}

.accordion_qst:checked ~ .accordion_title .icon::after {
  opacity: 0;
  visibility: hidden;
}




</style>
