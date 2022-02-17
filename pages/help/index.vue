<template>
  <div class="contact container pt-sm-5">
    <div class="row justify-content-md-between justify-content-xl-around gy-4">
      <div class="col-12 col-md-7 col-xl-4">
        <h1>
          We'd Love To
          <br />
          Hear From You
        </h1>
        <p class="py-5">
          Our team is always happy to answer your questions. We work smart to
          ensure you have the best possible experience.
        </p>

        <ul class="nav flex-column mt-4 text-primary">
          <li class="nav-item py-4">
            <img class="me-4" src="~/assets/images/home/location.svg" alt="" />
            109 Chime Avenue, New Haven, Enugu
          </li>
          <li class="nav-item">
            <img class="me-4" src="~/assets/images/home/phone.svg" alt="" />
            +2348078834042
          </li>
          <li class="nav-item py-4">
            <img class="me-4" src="~/assets/images/home/mail.svg" alt="" />
            support@kudibar.com
          </li>
        </ul>
      </div>

      <div class="col-12 col-md-5 col-xl-5 contact-card">
        <div class="card border-0">
          <div class="card-body p-lg-5">
            <form class="form-box">
              <!-- Name  -->
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />
              </div>

              <!-- Email  -->
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby=""
                  placeholder="Email"
                />
              </div>

              <!-- Company  -->
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="company"
                  placeholder="Company(Optional)"
                />
              </div>

              <!-- Your Message  -->
              <div class="mb-3">
                <textarea
                  v-model="form.message"
                  class="form-control"
                  id="msg"
                  placeholder="Your message"
                  rows="5"
                ></textarea>
              </div>

              <button
                type="submit"
                class="col-12 text-center align-items-center btn btn-primary rounded-pill mt-4 btn-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // layout: 'no-footer',
  head() {
    return {
      title: 'Contact us ',
      meta: [],
    }
  },

  data() {
    return {
      form: {},
    }
  },

  components: {},
}
</script>

<style lang="scss" scoped>

.contact {
  margin-top: 100px;
  margin-bottom: 150px;
  h1 {
    font-family: 'Cairo';
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 62px;
    text-transform: capitalize;
    color: #023e4f;
  }
  p {
    font-family: 'Segoe UI', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 37px;
    color: #023e4f;
  }
  ul > li {
    font-family: 'Cairo';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #023e4f;
  }
}

.contact-card {
  background: #ffffff;
  box-shadow: 0px 4px 40px rgba(1, 120, 154, 0.08);
  border-radius: 16px;
}

.form-box {
  div > input,
  textarea {
    background: #f0f3f5;
    border-radius: 5px;
    border: none;
    padding: 20px;
  }
  div > input,
  textarea::placeholder {
    font-family: 'Roboto' sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #787878;
  }
  button {
    font-family: 'Cairo';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color: #edf6f8;
  }
}
</style>
