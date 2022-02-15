<template>
  <div class="form">
    <p class="kudi-body-1 kudi-text-green">
      Name your event and tell your attendees why they should come. Add details
      that highlight what makes it unique.
    </p>
    <div class="row">
      <div class="col-md-12">
        <label for="event title" class="kudi-label">Event Name</label>
        <input
          id="event title"
          type="text-area"
          class="kudi-input"
          placeholder="Christmas"
        />
      </div>
      <div class="col-md-12">
        <label for="event title" class="kudi-label">Event Description</label>
        <textarea
          id="story"
          name="story"
          rows="4"
          cols="33"
          class="kudi-input"
          placeholder="Christmas is all about celebrating the King of Kings, Jesus."
        >
        </textarea>
      </div>
    </div>

    <div class="row border-top py-4">
      <div class="kudi-body-1 kudi-text-red mb-3">Notice!</div>
      <p class="kudi-body-1 kudi-text-default">
        Please note that this event will go through approval process again once
        you hit update!
      </p>
      <button class="kbtn-1 kbtn-2 me-4">Update</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>