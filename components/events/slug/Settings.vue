<template>
  <div class="form settings">
    <div class="row border-bottom mt-3">
      <div class="d-flex justify-content-between mb-3">
        <p class="h1">Publish Event</p>
        <div class="form-check form-switch float-end">
          <input class="form-check-input" type="checkbox" />
        </div>
      </div>
      <p class="body">
        <span class="caption">Event not publish</span> - Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Ut porta in in mauris molestie
        turpis.
      </p>
    </div>
    <div class="row border-bottom">
      <div class="d-flex justify-content-between mb-3">
        <p class="h1">Event Visibility</p>
        <div class="form-check form-switch float-end">
          <input class="form-check-input" type="checkbox" />
        </div>
      </div>
      <p class="body">
        <span class="caption">Public visibility</span> - Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Ut porta in in mauris molestie
        turpis.
      </p>
    </div>

    <div class="row">
      <div class="d-flex justify-content-between mb-3">
        <p class="h1">Event Location</p>
        <div class="form-check form-switch float-end">
          <input class="form-check-input" type="checkbox" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="event title" class="kudi-label"
            >Name or Organization Name</label
          >
          <input
            id="event title"
            type="text"
            class="kudi-input"
            placeholder="Ex. Kudibar"
          />
        </div>
        <div class="col-md-6">
          <label for="event title" class="kudi-label"
            >Name or Organization Name</label
          >
          <input
            id="event title"
            type="text"
            class="kudi-input"
            placeholder="Ex. Kudibar"
          />
        </div>
        <div class="col-md-6">
          <label for="event title" class="kudi-label"
            >Name or Organization Name</label
          >
          <input
            id="event title"
            type="text"
            class="kudi-input"
            placeholder="Ex. Kudibar"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.settings {
  & > * {
    margin-bottom: 32px;
  }
  .h1 {
    color: #023e4f;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    // margin-bottom: 16px;
  }
  .caption {
    font-weight: 500;
    color: #01789a;
  }

  .body {
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
}
</style>