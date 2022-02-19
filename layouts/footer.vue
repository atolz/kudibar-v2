<template>
  <div>
    <div class="container-fluid footer text-primary pt-5 pb-2">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2">
          <!-- about -->
          <div class="col-md-6">
            <nuxt-link to="/">
              <picture>
                <source type="image/webp" srcset="/images/logo.webp" />
                <source type="image/png" srcset="/images/logo.png" />
                <img src="/images/logo.png" class="logo" alt="Kudibar Logo" />
              </picture>
            </nuxt-link>
            <div class="s-down rect my-about">
              Kudibar is your one stop shop for <br />
              everything event tickets and cinema <br />
              movies.
            </div>
          </div>

          <!-- links -->
          <div class="col-md-6 order-last">
            <div
              class="row row-cols-2 row-cols-xl-3 gy-5 justify-content-between"
            >
              <!-- Resources -->
              <div class="col my-col">
                <h4 class="kudi-h4">Resources</h4>
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <nuxt-link to="/voyage" class="nav-link px-0"
                      >Voyage</nuxt-link
                    >
                  </li>
                  <!-- <li>
                               <nuxt-link to="/videos">Videos</nuxt-link>
                            </li> -->
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/docs"
                      >Documentation</nuxt-link
                    >
                  </li>
                </ul>
              </div>
              <!-- About  -->
              <div class="col my-col">
                <h4 class="kudi-h4">About</h4>
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/about">Company</nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/why"
                      >Why Kudibar?</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/pricing"
                      >Pricing</nuxt-link
                    >
                  </li>
                  <!-- <li>
                               <nuxt-link to="/">Partners</nuxt-link>
                            </li> -->
                  <!-- <li>
                               <nuxt-link to="/about/careers">Careers</nuxt-link>
                            </li> -->
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/about/team"
                      >Team</nuxt-link
                    >
                  </li>
                </ul>
              </div>
              <!-- Support -->
              <div class="col my-col">
                <h4 class="kudi-h4">Support</h4>
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/help">Help Desk</nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/help/faq">FAQ</nuxt-link>
                  </li>
                </ul>
              </div>
              <!-- Legals -->
              <div class="col my-col offset-xl-8">
                <h4 class="kudi-h4">Legals</h4>
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/legals#privacies"
                      >Privacy policies</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/legals#terms"
                      >Terms of use</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Social media -->
        <div class="social s-top">
          <!-- <div class="col-sm-9 col-sm-9"></div> -->
          <div class="float-sm-right">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="copy-right">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <small class=""
              >All rights reserved ©
              {{ new Date().getFullYear() }} Kudibar</small
            >
          </div>
          <div class="col-md-6 d-flex justify-content-end">
            <div class="social-box">
              <img src="/footer/fb.svg" alt="" />
            </div>
            <div class="social-box">
              <img src="/footer/twt.svg" alt="" />
            </div>
            <div class="social-box">
              <img src="/footer/ln.svg" alt="" />
            </div>
            <div class="social-box">
              <img src="/footer/insta.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 49px !important;
  .nav-link {
    font-size: 0.75rem;
  }
}
.copy-right {
  padding: 48px 0 75px;
  border-top: 1px solid rgba(2, 62, 79, 0.192);

  small {
    color: #023e4f;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
  }
}

.social-box {
  padding: 0 13px;
  border-right: 1px solid #023e4f;
}

.my-col {
  display: grid;
  align-content: start;
  justify-content: end;
  // text-align: right;

  h4 {
    // text-align: right !important;
  }

  @media (max-width: 681px) {
    align-content: start;
    justify-content: start;
  }
}

.my-about {
  color: #023e4f;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
}
</style>
