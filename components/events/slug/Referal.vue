<template>
  <div class="form">
    <p class="kudi-body-1 kudi-text-green">
      Add a name to enable you track the performace.
    </p>
    <div class="row justify-items-center align-items-center">
      <div class="col-md-8">
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
      <div class="col-md-4">
        <button class="kbtn-1 kbtn-2 kbtn-2--outlined">Generate Link</button>
      </div>
    </div>

    <div class="row mt-3 mt-md-0">
      <p class="my-table__info">Generated Link</p>
      <div class="my-table">
        <div class="my-table__row">
          <span>Wale Santa</span>
          <div class="my-table__copy">
            <span>EKREF5368</span>
            <div class="icon-copy"></div>
          </div>
          <i
            class="icon-option-3dot"
            style="font-size: 7px; cursor: pointer"
          ></i>
        </div>
      </div>
    </div>
    <div class="py-3 mt-2 border-top">
      <button class="kbtn-1 kbtn-2 me-4">View All</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.my-table {
  height: 147px;
  overflow: scroll;

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
    justify-content: space-between;
    margin-bottom: 24px;
    & > * {
      display: inline-flex;
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
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: left;
      color: gray;
      margin-right: 14px;
    }

    i {
      color: #8737ed;
    }
  }
}
</style>