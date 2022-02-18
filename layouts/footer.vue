<template>
  <div class="container footer text-primary pt-5 pb-2">
    <div class="row row-cols-1 row-cols-sm-2">
      <!-- about -->
      <div class="col">
        <nuxt-link to="/">
          <picture>
            <source type="image/webp" srcset="/images/logo.webp" />
            <source type="image/png" srcset="/images/logo.png" />
            <img src="/images/logo.png" class="logo" alt="Kudibar Logo" />
          </picture>
        </nuxt-link>

        <div class="s-down rect">
          An amazon for events, built in Africa. Raised for the World, powered
          by People.
        </div>
      </div>

      <!-- links -->
      <div class="col order-last">
        <div class="row row-cols-2 row-cols-xl-3 gy-5 justify-content-between">
          <!-- Resources -->
          <div class="col">
            <h4>Resources</h4>
            <ul class="navbar-nav">
              <li class="nav-item">
                <nuxt-link to="/voyage" class="nav-link px-0">Voyage</nuxt-link>
              </li>
              <!-- <li>
                           <nuxt-link to="/videos">Videos</nuxt-link>
                        </li> -->
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/docs">Documentation</nuxt-link>
              </li>
            </ul>
          </div>

          <!-- About  -->
          <div class="col">
            <h4>About</h4>

            <ul class="navbar-nav">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/about">Company</nuxt-link>
              </li>

              <li class="nav-item">
                <nuxt-link class="nav-link" to="/why">Why Kudibar?</nuxt-link>
              </li>

              <li class="nav-item">
                <nuxt-link class="nav-link" to="/pricing">Pricing</nuxt-link>
              </li>
              <!-- <li>
                           <nuxt-link to="/">Partners</nuxt-link>
                        </li> -->
              <!-- <li>
                           <nuxt-link to="/about/careers">Careers</nuxt-link>
                        </li> -->
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/about/team">Team</nuxt-link>
              </li>
            </ul>
          </div>

          <!-- Support -->
          <div class="col">
            <h4>Support</h4>
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
          <div class="col offset-xl-8">
            <h4 class="">Legals</h4>
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

    <div class="col-sm-7">
      <small class=""
        >All rights reserved © {{ new Date().getFullYear() }} Kudibar</small
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  .nav-link {
    font-size: 0.75rem;
  }
}
</style>
