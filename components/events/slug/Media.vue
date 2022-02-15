<template>
  <div>
    <div class="d-flex mb-4 mt-2">
      <button class="kbtn-1 me-4">
        <i class="icon-Location"></i>
        <span>Upload</span>
      </button>
      <button class="kbtn-1 kbtn-1--outlined">
        <i class="icon-Wifi"></i>
        <span>Media</span>
      </button>
    </div>
    <div class="d-flex">
      <div class="imgPrev">
        <img src="/images/party-girls.png" alt="party-girls" />
        <span>-</span>
      </div>

      <label for="file" class="imgUpload">
        <label class="plus" for="file">+</label>
        <input type="file" name="file" id="file" />
      </label>
    </div>
    <div class="d-flex align-items-center py-4 pb-2 border-top mt-5">
      <p
        class="kudi-body-1 fw-bold mb-0 font-cario d-inline-flex"
        style="margin-bottom: 0; margin-right: 25px"
      >
        2 files found in media
      </p>
      <button style="background-color: #c11e1e" class="kbtn-1 kbtn-2 ms-auto">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.imgPrev {
  position: relative;
  width: 136px;
  height: 136px;
  overflow: hidden;
  border-radius: 16px;
  display: inline-flex;
  margin-right: 20px;
  justify-content: center;
  justify-items: center;

  img {
    // width: 100%;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 10px;
    display: grid;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
    width: 20px;
    background-color: white;
    height: 20px;
    border-radius: 50%;
  }
}

.imgUpload {
  width: 136px;
  height: 136px;
  border-radius: 16px;
  border: 1px dashed #01789a;
  display: inline-grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  cursor: pointer;

  input {
    display: none;
  }

  label {
    font-size: 20px;
    cursor: pointer;
  }
}
</style>