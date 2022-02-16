<template>
  <div class="container">
    <div class="row g-4 g-md-0">
      <div class="col-12 col-md-4 col-lg-3">
        <!-- Side menu -->
        <ul class="ce-list nav nav-fill flex-wrap flex-md-column">
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

      <div class="col-12 col-md-8 col-lg-7">
        <!-- basic info -->
        <div class="hide" :class="{ show: filters[0].active }">
          <!-- Basic info starts here -->
          <div class="ce-grp">
            <h2 class="title big dark">Basic Info</h2>
            <p class="title x-small light">
              Name your event and tell your attendees why they should come. Add
              details that highlight what makes it unique.
            </p>

            <!-- title -->
            <div class="mb-3">
              <div
                class="field"
                :class="{ 'form-group--error': $v.event.title.$error }"
              >
                <input
                  type="text"
                  v-model="event.title"
                  placeholder="Event Title"
                  @input="$v.event.title.$touch()"
                  @keyup="typing"
                />
              </div>
              <field-errors
                v-if="$v.event.title.$error"
                :field="$v.event.title"
              />
            </div>
            <!-- end title -->

            <!-- description -->
            <div class="mb-3">
              <div
                class="field"
                :class="{
                  'form-group--error': $v.event.description.$error,
                }"
              >
                <span class="ta-title">Event Description</span>
                <textarea
                  v-model="event.description"
                  placeholder="What's the event about..."
                  @input="$v.event.description.$touch()"
                  rows="5"
                  @keyup="typing"
                ></textarea>
              </div>
              <field-errors
                v-if="$v.event.description.$error"
                :field="$v.event.description"
              />
            </div>
            <!-- end description -->
          </div>
          <!-- Basic info ends here -->

          <!-- Location starts here -->
          <div class="ce-grp">
            <h2 class="title big dark">Location</h2>
            <p class="title x-small light">
              Name your event and tell your attendees why they should come. Add
              details that
              <br />highlight what makes it unique.
            </p>

            <!-- Offline and Online button starts here -->
            <div class="">
              <span v-for="(loc, i) in locationList" :key="i">
                <a
                  href="#"
                  class="kbtn stroke me-3"
                  :class="{ active: loc.active }"
                  @click.prevent="toggleLocation(i)"
                >
                  <i :class="loc.icon"></i>
                  {{ loc.title }}
                </a>
              </span>
            </div>
            <div class="s-20"></div>
            <!-- Offline and Online button ends here -->

            <!-- offline -->
            <div v-if="!event.isOnline">
              <!-- Venue location starts here -->
              <!-- <div class="">
                           <strong>Search location</strong>
                           <div class="s-10"></div>
                           <div class="field with-icon">
                              <span class="icon">
                                 <i class="fa fa-search" aria-hidden="true"></i>
                              </span>
                              <input type="text" placeholder="Search for venue or address" id="autocomplete" />
                           </div>
                        </div>
                        <div class="s-20"></div> -->
              <!-- Venue location ends here -->

              <!-- Street address starts here -->
              <div class="row">
                <div class="col-sm-12">
                  <strong>Add location</strong>
                  <div class="s-10"></div>

                  <div class="mb-3">
                    <div
                      class="field"
                      :class="{
                        'form-group--error': $v.event.venue.$error,
                      }"
                    >
                      <input
                        type="text"
                        v-model="event.venue"
                        placeholder="Venue"
                        @input="$v.event.venue.$touch()"
                      />
                    </div>
                    <field-errors
                      v-if="$v.event.venue.$error"
                      :field="$v.event.venue"
                    />
                  </div>
                </div>

                <div class="col-sm-6">
                  <div
                    class="field"
                    :class="{
                      'form-group--error': $v.event.state.$error,
                    }"
                  >
                    <input
                      type="text"
                      v-model="event.state"
                      placeholder="State"
                      @input="$v.event.state.$touch()"
                    />
                  </div>
                  <field-errors
                    v-if="$v.event.state.$error"
                    :field="$v.event.state"
                  />
                </div>

                <div class="col-sm-6">
                  <div
                    class="field"
                    :class="{
                      'form-group--error': $v.event.country.$error,
                    }"
                  >
                    <input
                      type="text"
                      v-model="event.country"
                      placeholder="Country"
                      @input="$v.event.country.$touch()"
                    />
                  </div>
                  <field-errors
                    v-if="$v.event.country.$error"
                    :field="$v.event.country"
                  />
                </div>
              </div>
            </div>
            <!-- end offline -->

            <!-- Online -->
            <div v-else>
              <h3 class="title small dark">Online event</h3>
              <p class="title x-small light">
                Events hosted online have a live streaming page where you can
                add slides, chat area and <br />
                more. Only ticket holders to the online event can access this
                content.
              </p>
            </div>
            <!-- end Online -->

            <div class="s-top">
              <strong>Select privacy</strong> <br />
              <p class="title x-small light">
                Make your event public or private. If you select private event,
                your event can only <br />
                be accessed by anyone with your link.
              </p>
              <div class="s-10"></div>
              <span v-for="(pri, i) in privateList" :key="i">
                <a
                  href="#"
                  class="kbtn stroke me-3"
                  :class="{ active: pri.active }"
                  @click.prevent="togglePrivate(i)"
                >
                  <i :class="pri.icon"></i>
                  {{ pri.title }}
                </a>
              </span>
            </div>
            <div class="s-20"></div>
          </div>
          <!-- Location ends here -->

          <!-- Schedule starts here -->
          <div class="ce-grp no-border">
            <h2 class="title big dark">Schedule</h2>
            <p class="title x-small light">
              Tell your attendees when your event starts and ends.
            </p>

            <!-- event schedule -->
            <div class="row" v-for="(sch, i) in event.schedules" :key="i">
              <div class="col-sm-5">
                <div
                  class="field dp"
                  :class="{
                    'form-group--error': validate('schedules', i).date.$error,
                  }"
                >
                  <span class="ta-title">Event date</span>
                  <date-picker
                    type="date"
                    format="DD/MM/YYYY"
                    placeholder="dd/mm/yyyy"
                    v-model="sch.date"
                    :disabled-date="notBeforeToday"
                    @input="validate('schedules', i).date.$model = sch.date"
                  />
                </div>
                <field-errors
                  v-if="validate('schedules', i).$error"
                  :field="validate('schedules', i).date"
                />
              </div>

              <div class="col-sm-7">
                <div class="row">
                  <!-- Start time -->
                  <div class="col-6">
                    <div
                      class="field dp"
                      :class="{
                        'form-group--error': validate('schedules', i).start
                          .$error,
                      }"
                    >
                      <span class="ta-title">Start time</span>
                      <date-picker
                        type="time"
                        format="hh:mm a"
                        value-type="format"
                        placeholder="--:-- --"
                        v-model="sch.start"
                        @input="
                          validate('schedules', i).start.$model = sch.start
                        "
                      />
                    </div>
                    <field-errors
                      v-if="validate('schedules', i).$error"
                      :field="validate('schedules', i).start"
                    />
                  </div>
                  <!-- end start time -->

                  <!-- end time -->
                  <div class="col-6">
                    <div class="field dp">
                      <span class="ta-title">End time</span>
                      <date-picker
                        type="time"
                        format="hh:mm a"
                        value-type="format"
                        placeholder="--:-- --"
                        v-model="sch.end"
                      />
                    </div>
                  </div>
                  <!-- end time -->
                </div>

                <!-- Remove btn -->
                <span class="float-trash" v-if="event.schedules.length > 1">
                  <a href="#" class="trash" @click.prevent="removeEventDay(i)">
                    <i class="fa fa-trash"></i>
                  </a>
                </span>
                <!-- end Remove btn -->
              </div>
            </div>
            <!-- end event schedule -->

            <div class="">
              <a href="#" @click.prevent="addEventDay" class="title dark mid">
                Add another day
                <i class="fa fa-plus"></i>
              </a>
              <div class="s-30"></div>
            </div>
          </div>
          <!-- Schedule ends here -->
        </div>
        <!-- end basic info -->

        <!-- payment -->
        <div class="hide" :class="{ show: filters[1].active }">
          <!-- Payment -->
          <div class="ce-grp no-border">
            <h2 class="title big dark">Ticket Categories</h2>
            <p class="title x-small light">
              Set the parameters of how people can access your event, either
              “Paid” or “Free”
            </p>

            <!-- Select toggle -->
            <div class="">
              <span v-for="(pl, i) in paymentList" :key="i">
                <a
                  href="#"
                  class="kbtn stroke me-4"
                  :class="{ active: pl.active }"
                  @click.prevent="togglePaymentType(i)"
                >
                  <i :class="pl.icon"></i>
                  {{ pl.title }}
                </a>
              </span>
            </div>
            <div class="s-20"></div>
            <!-- end select toggle -->

            <!-- Payment starts here -->
            <div v-for="(pay, i) in event.payments" :key="i">
              <div
                class="ce-grp no-padding pm"
                :class="{
                  'no-border': i === event.payments.length - 1,
                }"
              >
                <div class="row mb-3" v-if="event.isPaid">
                  <!-- category -->
                  <div class="col-sm-8">
                    <div
                      class="field tx"
                      :class="{
                        'form-group--error': validate('payments', i).category
                          .$error,
                      }"
                    >
                      <span class="ta-title">Payment Category</span>
                      <textarea
                        placeholder="E.g. General Admission, VIP, Regular, Student or Professional"
                        v-model="pay.category"
                        @input="
                          validate('payments', i).category.$model = pay.category
                        "
                      ></textarea>
                    </div>
                    <field-errors
                      v-if="validate('payments', i).$error"
                      :field="validate('payments', i).category"
                    />
                  </div>
                  <!-- end category -->

                  <div
                    class="col-sm-3"
                    :class="{ hide: i > 0 || !event.isPaid }"
                  >
                    <!-- currency -->
                    <div
                      class="field tx"
                      :class="{ hide: i > 0 || !event.isPaid }"
                    >
                      <span class="ta-title">Currency</span>
                      <select v-model="event.currency" @change="updateCurrency">
                        <option>NGN</option>
                        <option>USD</option>
                      </select>
                    </div>
                    <!-- end currency -->

                    <!-- quantity -->
                    <div :class="{ hide: event.isPaid }">
                      <div class="field dp">
                        <span class="ta-title">Quantity</span>
                        <input
                          type="text"
                          v-model="pay.tickets"
                          placeholder="0"
                          class="mx-input"
                        />
                        <!-- <span class="cu">
                                          <i class="fa fa-stream"></i>
                                       </span> -->
                      </div>
                    </div>
                    <!-- end quantity -->
                  </div>

                  <div class="col-sm-1" :class="{ hide: i === 0 }">
                    <!-- Trash payment -->
                    <div>
                      <a
                        href="#"
                        class="trash"
                        @click.prevent="event.payments.splice(i, 1)"
                      >
                        <i class="fa fa-trash"></i>
                      </a>
                    </div>
                    <!-- end Trash payment -->
                  </div>
                </div>

                <div class="row mb-3" :class="{ hide: !event.isPaid }">
                  <!-- Price -->
                  <div class="col-sm-3">
                    <div
                      class="field dp"
                      :class="{
                        'form-group--error': validate('payments', i).price
                          .$error,
                      }"
                    >
                      <span class="ta-title">Price</span>
                      <vue-numeric
                        class="mx-input"
                        separator=","
                        v-model.number="pay.price"
                        placeholder="0.00"
                        @input="
                          validate('payments', i).price.$model = pay.price
                        "
                      ></vue-numeric>

                      <span class="cu">
                        {{ $helper.currency(event.currency) }}
                      </span>
                    </div>
                    <field-errors
                      v-if="validate('payments', i).$error"
                      :field="validate('payments', i).price"
                    />
                  </div>
                  <!-- end price -->

                  <!-- quantity -->
                  <div class="col-sm-3">
                    <div
                      class="field dp"
                      :class="{
                        'form-group--error': validate('payments', i).tickets
                          .$error,
                      }"
                    >
                      <span class="ta-title">Quantity</span>
                      <input
                        type="number"
                        v-model.number="pay.tickets"
                        placeholder="0"
                        class="mx-input"
                        @input="
                          validate('payments', i).tickets.$model = pay.tickets
                        "
                      />
                      <!-- <span class="cu">
                                       <i class="fa fa-stream"></i>
                                    </span> -->
                    </div>
                    <field-errors
                      v-if="validate('payments', i).$error"
                      :field="validate('payments', i).tickets"
                    />
                  </div>
                  <!-- end quantity -->

                  <!-- early bird toggle -->
                  <div class="col-sm-4" v-if="event.isPaid">
                    <h3 class="title x-small dark mid">Early bird price</h3>

                    <!-- Toggle early bird -->
                    <div class="radio">
                      <span class="rdio rdio-primary radio-inline">
                        <input
                          :name="'eb' + i"
                          :id="'radio_no' + i"
                          type="radio"
                          checked
                          v-model="pay.hasEarlyBird"
                          :value="false"
                        />
                        <label :for="'radio_no' + i">No</label>
                      </span>

                      <span
                        class="rdio rdio-primary radio-inline"
                        style="margin-left: 15px"
                      >
                        <input
                          :name="'eb' + i"
                          :id="'radio_yes' + i"
                          :value="true"
                          type="radio"
                          v-model="pay.hasEarlyBird"
                        />
                        <label :for="'radio_yes' + i">Yes</label>
                      </span>
                    </div>
                    <!-- end toggle early bird -->
                  </div>
                  <!-- end early bird toggle -->
                </div>

                <!-- early bird -->
                <div class="rb-grp" v-if="pay.hasEarlyBird && event.isPaid">
                  <h3 class="title x-small dark mid">Early Bird Price</h3>

                  <div class="row">
                    <!-- Price -->
                    <div class="col-sm-4">
                      <div
                        class="field dp no-bb"
                        :class="{
                          'form-group--error': validate('payments', i).earlyBird
                            .amount.$error,
                        }"
                      >
                        <span class="ta-title">Amount</span>
                        <vue-numeric
                          class="mx-input"
                          separator=","
                          v-model.number="pay.earlyBird.amount"
                          placeholder="0.00"
                          @input="
                            validate('payments', i).earlyBird.amount.$model =
                              pay.earlyBird.amount
                          "
                        ></vue-numeric>

                        <!-- <input
                                       type="number"
                                       v-model.number="pay.earlyBird.amount"
                                       placeholder="0"
                                       class="mx-input"
                                       @input="
                                          validate(
                                             'payments',
                                             i
                                          ).earlyBird.amount.$model =
                                             pay.earlyBird.amount
                                       "
                                    /> -->
                        <span class="cu">
                          {{ $helper.currency(event.currency) }}
                          <!-- <i class="fa fa-percent"></i> -->
                        </span>
                      </div>

                      <field-errors
                        v-if="validate('payments', i).$error"
                        :field="validate('payments', i).earlyBird.percent"
                      />
                    </div>
                    <!-- end price -->

                    <!-- quantity -->
                    <div class="col-sm-4">
                      <div
                        class="field dp no-bb"
                        :class="{
                          'form-group--error': validate('payments', i).earlyBird
                            .quantity.$error,
                        }"
                      >
                        <span class="ta-title">Quantity</span>
                        <input
                          type="text"
                          v-model="pay.earlyBird.quantity"
                          placeholder="0"
                          class="mx-input"
                          @change="pay.earlyBird.total = pay.earlyBird.quantity"
                          @input="
                            validate('payments', i).earlyBird.quantity.$model =
                              pay.earlyBird.quantity
                          "
                        />
                        <span class="cu">
                          <i class="fa fa-stream"></i>
                        </span>
                      </div>

                      <field-errors
                        v-if="validate('payments', i).$error"
                        :field="validate('payments', i).earlyBird.quantity"
                      />
                    </div>
                    <!-- end quantity -->

                    <div class="col-sm-4">
                      <div
                        class="field dp no-bb"
                        :class="{
                          'form-group--error': validate('payments', i).earlyBird
                            .date.$error,
                        }"
                      >
                        <span class="ta-title">End date</span>
                        <date-picker
                          type="date"
                          format="DD/MM/YYYY"
                          placeholder="dd/mm/yyyy"
                          v-model="pay.earlyBird.date"
                        />
                      </div>

                      <field-errors
                        v-if="validate('payments', i).$error"
                        :field="validate('payments', i).earlyBird.date"
                      />
                    </div>
                  </div>
                </div>
                <!-- end early bird -->

                <!-- free event qautity -->
                <div class="row" v-if="!event.isPaid">
                  <div class="col-sm-5">
                    <div
                      class="field dp"
                      :class="{
                        'form-group--error': validate('payments', i).tickets
                          .$error,
                      }"
                    >
                      <span class="ta-title">No of tickets</span>
                      <input
                        type="number"
                        v-model.number="pay.tickets"
                        placeholder="0"
                        class="mx-input"
                        @input="
                          validate('payments', i).tickets.$model = pay.tickets
                        "
                      />
                      <!-- <span class="cu">
                                       <i class="fa fa-stream"></i>
                                    </span> -->
                    </div>
                    <field-errors
                      v-if="validate('payments', i).$error"
                      :field="validate('payments', i).tickets"
                    />
                  </div>
                </div>
                <!-- end free event qautity -->
              </div>

              <div v-if="!event.isPaid">
                <p class="title x-small light">
                  This event is free, which means that anyone with a ticket will
                  gain entry.
                </p>
              </div>
            </div>

            <div class="" v-if="event.isPaid">
              <a href="#" @click.prevent="addPayment" class="title dark mid">
                Add payment category
                <i class="fa fa-plus"></i>
              </a>
              <div class="s-30"></div>
            </div>
            <!-- Payment ends here -->
          </div>
          <!-- end payment -->
        </div>
        <!-- end payment -->

        <!-- partners -->
        <div class="hide" :class="{ show: filters[2].active }">
          <!-- Media -->
          <div class="ce-grp">
            <h2 class="title big dark">Media</h2>
            <p class="title x-small light">
              This is the first image attendees will see at the top of your
              listing. Use a high <br />
              quality image: 700px by 1500px .
            </p>

            <!-- media -->
            <field-errors
              v-if="$v.event.media.picture.$error"
              :field="$v.event.media.picture"
            />
            <div>
              <file-box
                v-model="event.media.picture"
                size="700px by 1500px"
                type="picture"
                :insert="true"
                @keyup="$v.event.$touch()"
              />
            </div>
            <!-- end media -->

            <!-- <div class="s-20"></div> -->
            <p class="title x-small light">
              Add Youtube or Vimeo links to explain to your attendees what to
              expect in your event.
            </p>

            <!-- url -->
            <video-url v-model="event.media.video" />
            <!-- end url -->
          </div>
          <!-- end Media -->

          <!-- Contacts -->
          <div class="ce-grp no-border">
            <h2 class="title big dark">Contacts &amp; RSVP</h2>
            <p class="title x-small light">
              Add the contacts people should contact for any enquieries.
            </p>

            <!-- contact -->
            <div class="row mb-3">
              <div class="col-sm-7">
                <div
                  class="field"
                  :class="{
                    'form-group--error': $v.event.contact.email.$error,
                  }"
                >
                  <input
                    type="text"
                    v-model="event.contact.email"
                    placeholder="Email"
                    @input="$v.event.contact.email.$touch()"
                  />
                </div>
                <field-errors
                  v-if="$v.event.contact.email.$error"
                  :field="$v.event.contact.email"
                />
              </div>

              <div class="col-sm-5">
                <div
                  class="field"
                  :class="{
                    'form-group--error': $v.event.contact.phone.$error,
                  }"
                >
                  <input
                    type="text"
                    v-model="event.contact.phone"
                    placeholder="Phone"
                    @input="$v.event.contact.phone.$touch()"
                  />
                </div>
                <field-errors
                  v-if="$v.event.contact.phone.$error"
                  :field="$v.event.contact.phone"
                />
              </div>
            </div>
            <!-- end contact -->

            <!-- handle -->
            <div class="row">
              <div class="col-sm-4">
                <div class="field">
                  <input
                    type="text"
                    v-model="event.contact.facebook"
                    placeholder="Facebook (Optional)"
                  />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="field">
                  <input
                    type="text"
                    v-model="event.contact.twitter"
                    placeholder="Twitter handle (Optional)"
                  />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="field">
                  <input
                    type="text"
                    v-model="event.contact.instagram"
                    placeholder="Instagram handle (Optional)"
                  />
                </div>
              </div>
            </div>
            <!-- end handle -->
          </div>
          <!-- end Contacts -->
        </div>
        <!--end  partners -->

        <!-- review -->
        <div class="hide" :class="{ show: filters[3].active }">
          <div class="ce-grp">
            <h2 class="title big dark">Preview &amp; submit</h2>
            <p class="title x-small light">
              Take your time to review your input.
            </p>

            <div class="ce-grp text">
              <div class="form-group">
                <strong>Title</strong> <br />
                <span>{{ event.title }}</span>
                <field-errors
                  v-if="$v.event.title.$error"
                  :field="$v.event.title"
                />
              </div>

              <div class="form-group">
                <strong>Description</strong> <br />
                <span>{{ event.description }}</span>
                <field-errors
                  v-if="$v.event.description.$error"
                  :field="$v.event.description"
                />
              </div>

              <div class="row" v-if="!event.isOnline">
                <div class="col-sm-6">
                  <div class="form-group">
                    <strong>Country</strong> <br />
                    <span>{{ event.country }}</span>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <strong>State</strong> <br />
                    <span>{{ event.state }}</span>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <strong>Venue</strong> <br />
                    <span>{{ event.venue }}</span>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-4">
                  <span v-if="event.isOnline">
                    <i class="fa fa-wifi"></i>
                    Online event
                  </span>
                  <span v-else>
                    <i class="fa fa-map-marker-alt"></i>
                    Offline event
                  </span>
                </div>
                <div class="col-sm-4">
                  <span v-if="event.isPublic">
                    <!-- <i class="fa fa-wifi"></i> -->
                    Public event
                  </span>
                  <span v-else style="color: #ff9800">
                    <!-- <i class="fa fa-map-marker-alt"></i> -->
                    Private event
                  </span>
                </div>
                <!-- <div class="col-sm-4">
                              --
                           </div> -->
              </div>
            </div>

            <div class="ce-grp text">
              <h3 class="title small dark">Schedules</h3>

              <div class="row">
                <div
                  class="col-sm-6"
                  v-for="(sch, i) in event.schedules"
                  :key="i"
                >
                  <div class="card">
                    <div class="card-body">
                      <div>
                        <small>
                          <strong>Date</strong>
                        </small>
                        <br />
                        <span v-if="event.schedules[0].date != ''">
                          {{ $helper.dateFilter(event.schedules[0].date) }}
                        </span>
                      </div>

                      <div class="row">
                        <div class="col-sm-6">
                          <small>
                            <strong>Start time</strong>
                          </small>
                          <br />
                          {{ sch.start }}
                        </div>
                        <div class="col-sm-6">
                          <small>
                            <strong>End time</strong>
                          </small>
                          <br />
                          {{ sch.end }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- media -->
            <div class="ce-grp text">
              <h3 class="title small dark">Media</h3>
              <div class="row">
                <div class="col-sm-6">
                  <strong>Cover image</strong>
                  <div
                    class="form-group"
                    style="max-height: 200px; overflow: hidden"
                  >
                    <img
                      :src="event.media.picture"
                      style="width: 100%; border-radius: 10px"
                    />
                  </div>
                </div>

                <div class="col-sm-6" v-if="event.media.video !== ''">
                  <strong>Video </strong>
                  <div
                    class=""
                    v-html="buildVideoFromStr(event.media.video)"
                    style="max-height: 200px; overflow: hidden"
                  ></div>
                </div>
              </div>
            </div>
            <!-- end media -->

            <!-- payments -->
            <div class="ce-grp text">
              <h3 class="title small dark">Ticket Categories</h3>

              <div class="row" v-if="event.isPaid">
                <div
                  class="col-sm-6"
                  v-for="(pay, i) in event.payments"
                  :key="i"
                >
                  <strong style="display: block; margin-bottom: 10px">
                    {{ pay.category }}
                    <i
                      class="fas fa-clipboard-list"
                      style="color: #ddd; margin-left: 10px"
                    ></i>
                  </strong>
                  <div class="card">
                    <div class="card-body">
                      <!-- <div class="form-group">
                                       <strong>Category</strong> <br>
                                       {{ pay.category }}
                                    </div> -->
                      <div class="row form-group">
                        <div class="col-sm-6">
                          <strong>Amount</strong> <br />
                          {{
                            $helper.currency(event.currency) +
                            $helper.number_format(pay.price)
                          }}
                        </div>
                        <div class="col-sm-6">
                          <strong>Quantity</strong> <br />
                          {{ pay.tickets }}
                        </div>
                      </div>
                      <div v-if="pay.hasEarlyBird" class="form-group">
                        <strong
                          style="
                            display: block;
                            border-bottom: 1px dashed #ddd;
                            margin-bottom: 10px;
                          "
                          >Early bird</strong
                        >

                        <strong>Discount (%)</strong> -
                        {{ pay.earlyBird.amount }}% <br />
                        <strong>Quantity</strong> -
                        {{ pay.earlyBird.quantity }} <br />
                        <strong>Expiry Date</strong> -
                        <span v-if="pay.earlyBird.date != ''">
                          {{ $helper.dateFilter(pay.earlyBird.date) }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-else>
                <span style="font-size: 25px">
                  Free attendance |
                  <span>
                    <i
                      class="fas fa-clipboard-list"
                      style="color: #ddd; margin-left: 10px"
                    ></i>
                    {{ event.payments[0].tickets }} pass
                  </span>
                </span>
              </div>
            </div>
            <!-- end payments -->

            <!-- Contacts -->
            <div class="ce-grp text no-border">
              <h3 class="title small dark">RSVP</h3>
              <div>
                <i class="fas fa-at"></i>
                <strong>Email</strong> - {{ event.contact.email }}
              </div>
              <div>
                <i class="fas fa-phone"></i>
                <strong>Phone</strong> - {{ event.contact.phone }}
              </div>
              <div v-if="event.contact.facebook != ''">
                <i class="fab fa-facebook"></i>
                <strong>Facebook</strong> -
                {{ event.contact.facebook }}
              </div>
              <div v-if="event.contact.twitter != ''">
                <i class="fab fa-twitter"></i>
                <strong>Twitter</strong> -
                {{ event.contact.twitter }}
              </div>
              <div v-if="event.contact.instagram != ''">
                <i class="fab fa-instagram"></i>
                <strong>Instagram</strong> -
                {{ event.contact.instagram }}
              </div>

              <div v-if="hasError" style="margin-top: 20px; font-size: 20px">
                <i class="fas fa-exclamation-triangle" style="color: red"></i>
                Please navigate back to fill the required fields
              </div>
            </div>
            <!-- end contacts -->
          </div>
        </div>
        <!-- end review -->
      </div>
    </div>

    <!-- float footer -->
    <div class="float-footer">
      <div class="container">
        <div class="float-start">
          <div v-if="hasError">
            <svg-icon class="icon fixed red" icon="ic_warning_48px" />
            Please fill up the required fields
          </div>
          <div style="margin-top: 5px; font-size: 20px" v-else>
            <strong>
              {{ filters[activeScreen].title }}
            </strong>
          </div>
        </div>

        <div class="float-end">
          <div v-if="!loading">
            <a
              href="#"
              class="kbtn stroke"
              @click.prevent="goNextBack('back')"
              v-if="activeScreen > 0"
            >
              <i class="fa fa-chevron-left"></i> Back
            </a>

            <!-- proceed -->
            <a
              href="#"
              class="kbtn solid"
              @click.prevent="goNextBack('next')"
              v-if="activeScreen !== filters.length - 1"
            >
              Proceed <i class="fa fa-chevron-right"></i>
            </a>
            <!-- end proceed -->

            <!-- Submit -->
            <a
              href="#"
              class="kbtn solid dark"
              v-if="activeScreen === filters.length - 1"
              @click.prevent="submit"
            >
              Submit <i class="fa fa-chevron-right"></i>
              <!-- end Submit -->
            </a>
          </div>
          <loader :option="{ color: '#221' }" v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fileBox from "@/components/files/toggle";
import videoUrl from "@/components/util/video";
import loader from "@/components/util/loader";
import svgIcon from "@/components/util/svg-loader";
import fieldErrors from "@/components/input/validation";
import moment from "moment";
import {
  required,
  minLength,
  maxLength,
  email,
  numeric,
} from "vuelidate/lib/validators";
export default {
  layout: "dashboard",
  head() {
    return {
      title: "Event create ",
      meta: [],
    };
  },
  data() {
    return {
      days: 1,
      moment: {},
      loading: false,
      hasError: false,
      startedTyping: false,
      filters: [
        {
          title: "Basic Info",
          link: "basic",
          active: true,
        },
        {
          title: "Ticket Categories",
          link: "payment",
          active: false,
        },
        // {
        //    title: 'Partners, Organisations or<br />Sponsors',
        //    link: 'sponsor',
        //    active: false
        // },
        {
          title: "Media & Contact",
          link: "rsvp",
          active: false,
        },
        {
          title: "Preview & submit",
          link: "preview",
          active: false,
        },
      ],
      activeScreen: 0,
      paymentList: [
        {
          title: "Paid event",
          active: true,
          type: true,
          icon: "fa fa-dollar-sign",
        },
        {
          title: "Free event",
          active: false,
          type: false,
          icon: "fa fa-angle-double-up",
        },
        // {
        //    title: 'Split payment',
        //    active: false,
        //    type: true,
        //    icon: 'fa fa-exchange-alt'
        // },
      ],
      locationList: [
        {
          title: "Offline event",
          active: true,
          icon: "fa fa-map-marker-alt",
          type: false,
        },
        {
          title: "Online event",
          active: false,
          icon: "fa fa-wifi",
          type: true,
        },
      ],
      privateList: [
        {
          title: "Public event",
          active: true,
          icon: "fas fa-exchange-alt",
          type: true,
        },
        {
          title: "Private event",
          active: false,
          icon: "fas fa-shoe-prints",
          type: false,
        },
      ],
      event: {
        title: "",
        description: "",
        schedules: [{ title: "", venue: "", date: "", start: "", end: "" }],
        partners: [],
        payments: [
          {
            category: "",
            price: "",
            tickets: "",
            qty: 0,
            hasEarlyBird: false,
            earlyBird: {},
          },
        ],
        contact: {
          email: "",
          phone: "",
          facebook: "",
          twitter: "",
          instagram: "",
        },
        price: [],
        category: [],
        speakers: [],
        tags: [],
        media: { picture: "", video: "" },
        currency: "NGN",
        tickets: 0,
        isPaid: true,
        isOnline: false,
        isPublic: true,
        venue: "",
        date: "",
        startTime: "",
        endTime: "",
        state: "",
      },
    };
  },
  validations: {
    event: {
      title: { required, minLength: minLength(3) },
      description: { required, minLength: minLength(5) },
      location: { required },
      // date: { required },
      venue: { required },
      country: { required },
      state: { required },
      payments: {
        $each: {
          category: { required, minLength: minLength(2) },
          price: {
            required,
            numeric,
            // minValue: minValue(3)
          },
          tickets: { required },
          earlyBird: {
            amount: { required, numeric },
            quantity: { required, numeric },
            date: { required },
          },
        },
      },
      schedules: {
        $each: {
          date: { required },
          start: { required },
        },
      },
      media: {
        picture: { required },
      },
      contact: {
        email: { required, email },
        phone: { required, maxLength: maxLength(30) },
      },
    },
  },
  methods: {
    /**
     * Toggle process tab
     */
    toggleProcess(i) {
      this.filters.map((v) => (v.active = false));
      this.filters[i].active = true;
      this.activeScreen = i;
    },
    /**
     * Typing
     */
    typing() {
      this.startedTyping = true;
    },
    //
    changeDays() {
      let l = this.days;
      this.event.schedules = [];
      // console.log(l);
      for (let i = 0; i < l; i++) {
        if (i > 0) {
          this.event.schedules.push({
            title: "",
            venue: "",
            date: "",
            start: "",
            end: "",
          });
        }
      }
    },
    /**
     * Next / back preview
     */
    goNextBack(type) {
      let num = parseInt(this.activeScreen);
      if (type === "next") {
        this.validateNext(num);
      }
      if (type === "back") {
        this.filters.map((v) => (v.active = false));
        let i = num != 0 ? num - 1 : 0;
        this.filters[i].active = true;
        this.activeScreen = i;
      }
    },
    /**
     * Validate Next
     */
    validateNext(num) {
      let sn = this.filters;
      let i = num != sn.length - 1 ? num + 1 : sn.length - 1;
      let step1 = ["title", "description"];
      let step2 = ["tickets"];
      let step2_eb = ["amount", "quantity", "date"];
      // let arr3 = ['picture', 'email', 'phone'];
      let arr = [];
      let bask = [];
      // steps
      if (i === 1) {
        if (!this.event.isOnline) step1.push("venue", "country", "state");
        arr = step1;
        arr.map((v) => {
          this.$v.event[v].$touch();
          if (this.$v.event[v].$error) bask.push(this.$v.event[v].$error);
        });
        let sch = ["date", "start"];
        let vsch = this.$v.event.schedules;
        this.event.schedules.map((v, i) => {
          sch.map((n) => {
            vsch.$each.$iter[i][n].$touch();
            if (vsch.$each.$iter[i][n].$error)
              bask.push(vsch.$each.$iter[i][n].$error);
          });
        });
      }
      if (i === 2) {
        let vpays = this.$v.event.payments;
        let pays = this.event.payments;
        if (this.event.isPaid) step2.push("category", "price");
        pays.map((v, i) => {
          step2.map((n) => {
            vpays.$each.$iter[i][n].$touch();
            if (vpays.$each.$iter[i][n].$error)
              bask.push(vpays.$each.$iter[i][n].$error);
          });
          if (v.hasEarlyBird) {
            step2_eb.map((n) => {
              vpays.$each.$iter[i].earlyBird[n].$touch();
              if (vpays.$each.$iter[i].earlyBird[n].$error)
                bask.push(vpays.$each.$iter[i].earlyBird[n].$error);
            });
          }
        });
      }
      if (i === 3) {
        this.$v.event.media.picture.$touch();
        this.$v.event.contact.email.$touch();
        this.$v.event.contact.phone.$touch();
        if (this.$v.event.media.picture.$error)
          bask.push(this.$v.event.media.picture.$error);
        if (this.$v.event.contact.email.$error)
          bask.push(this.$v.event.contact.email.$error);
        if (this.$v.event.contact.phone.$error)
          bask.push(this.$v.event.contact.phone.$error);
      }
      console.log(bask);
      if (bask.length === 0) {
        this.hasError = false;
        this.filters.map((v) => (v.active = false));
        this.filters[i].active = true;
        this.activeScreen = i;
      } else {
        this.validateError();
      }
    },
    /**
     * Validate error
     */
    validateError() {
      this.hasError = true;
      setTimeout((_) => {
        this.hasError = false;
      }, 10000);
    },
    /**
     * Validate Check All
     */
    validateCheckAll() {
      let step1 = ["title", "description"];
      let step2 = ["tickets"];
      let step2_eb = ["amount", "quantity", "date"];
      // let arr3 = ['picture', 'email', 'phone'];
      let arr = [];
      let bask = [];
      if (!this.event.isOnline) step1.push("venue", "country", "state");
      arr = step1;
      arr.map((v) => {
        this.$v.event[v].$touch();
        if (this.$v.event[v].$error) bask.push(this.$v.event[v].$error);
      });
      // schedules
      let sch = ["date", "start"];
      let vsch = this.$v.event.schedules;
      this.event.schedules.map((v, i) => {
        sch.map((n) => {
          // console.log(n);
          vsch.$each.$iter[i][n].$touch();
          if (vsch.$each.$iter[i][n].$error)
            bask.push(vsch.$each.$iter[i][n].$error);
        });
      });
      // payment
      let vpays = this.$v.event.payments;
      let pays = this.event.payments;
      if (this.event.isPaid) step2.push("category", "price");
      pays.map((v, i) => {
        step2.map((n) => {
          vpays.$each.$iter[i][n].$touch();
          if (vpays.$each.$iter[i][n].$error)
            bask.push(vpays.$each.$iter[i][n].$error);
        });
        if (v.hasEarlyBird) {
          step2_eb.map((n) => {
            vpays.$each.$iter[i].earlyBird[n].$touch();
            if (vpays.$each.$iter[i].earlyBird[n].$error)
              bask.push(vpays.$each.$iter[i].earlyBird[n].$error);
          });
        }
      });
      this.$v.event.media.picture.$touch();
      this.$v.event.contact.email.$touch();
      this.$v.event.contact.phone.$touch();
      if (this.$v.event.media.picture.$error)
        bask.push(this.$v.event.media.picture.$error);
      if (this.$v.event.contact.email.$error)
        bask.push(this.$v.event.contact.email.$error);
      if (this.$v.event.contact.phone.$error)
        bask.push(this.$v.event.contact.phone.$error);
      console.log(bask);
      if (bask.length === 0) {
        this.hasError = false;
        return false;
      } else {
        this.validateError();
        return true;
      }
    },
    /**
     * Updated currency
     */
    updateCurrency() {
      this.currency = this.event.currency;
    },
    notBeforeToday(date) {
      return date < new Date(new Date().setHours(0, 0, 0, 0));
    },
    /**
     * Add payment category
     */
    addPayment() {
      this.event.payments.push({
        category: "",
        price: "",
        tickets: "",
        qty: 0,
        hasEarlyBird: false,
        earlyBird: {},
      });
    },
    buildTickets(tickets) {
      let bask = [];
      tickets.map((v) => {
        v.main_tickets = v.tickets;
        v.sold = 0;
        bask.push(v);
      });
      return bask;
    },
    /**
     * Toggle Ticket Categories
     */
    togglePaymentType(i) {
      this.paymentList.map((v) => (v.active = false));
      this.event.payments = [
        {
          category: "",
          price: "",
          tickets: "",
          qty: 0,
          hasEarlyBird: false,
          earlyBird: {},
        },
      ];
      let pl = this.paymentList[i];
      pl.active = true;
      this.event.isPaid = pl.type;
    },
    /**
     * Toggle location
     */
    toggleLocation(i) {
      this.locationList.map((v) => (v.active = false));
      let loc = this.locationList[i];
      loc.active = true;
      this.event.isOnline = loc.type;
    },
    /**
     * Toggle location
     */
    togglePrivate(i) {
      this.privateList.map((v) => (v.active = false));
      let pri = this.privateList[i];
      pri.active = true;
      this.event.isPublic = pri.type;
    },
    /**
     * Validate
     */
    validate(type, i) {
      let e = this.$v.event[type];
      return e.$each.$iter[i];
    },
    /**
     * On Submit
     * @return {[type]} [description]
     */
    async submit() {
      let check = this.validateCheckAll();
      if (check) return;
      // Submit
      this.loading = true;
      let event = this.event;
      event.date = event.schedules[0].date;
      event.startTime = event.schedules[0].start;
      event.endTime = event.schedules[0].end;
      event.payments = this.buildTickets(event.payments);
      // event.percent = this.percentage;
      // event.owner = this.user._id;
      // event.team = this.user._id;
      try {
        await this.$axios.$post("/events/create", event);
        this.status("Event created successfully!", "success");
        this.loading = false;
        this.startedTyping = false;
        this.$router.push({ name: "events" });
      } catch (error) {
        this.loading = false;
        if (error.hasOwnProperty("response")) {
          this.status(error.response.data.message, "error");
        } else {
          this.status(error, "error");
        }
      }
    },
    /**
     * Status
     */
    status(message, status) {
      let notify = this.$snotify;
      console.log(notify);
      notify[status](message, "", {
        timeout: 3000,
        // showProgressBar: true,
      });
    },
    addEventDay() {
      let sch = this.event.schedules;
      sch.push({
        title: "",
        venue: "",
        date: "",
        start: "",
        end: "",
      });
    },
    removeEventDay(i) {
      let sch = this.event.schedules;
      if (sch.length > 1) sch.splice(i, 1);
    },
    buildVideoFromStr(str) {
      var url = str.trim(),
        iframe = "";
      var l = url.match(
        /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\S+)?/
      );
      if (RegExp.$3.indexOf("youtu") > -1) {
        this.isActive = true;
        iframe = this.createVideo("youtube", RegExp.$6);
      } else if (RegExp.$3.indexOf("vimeo") > -1) {
        this.isActive = true;
        iframe = this.createVideo("vimeo", RegExp.$6);
      }
      if (l === null) {
        this.isActive = false;
        iframe = "";
      }
      return iframe;
    },
    createVideo(type, id) {
      var src = "";
      if (type === "youtube") src = "//www.youtube.com/embed/" + id;
      if (type === "vimeo") src = "//player.vimeo.com/video/" + id;
      return `<iframe width="100%" height="100%" style="background: #000; border-radius: 10px;"
            src="https://${src}" frameborder="0" allow="accelerometer; autoplay;
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    },
    autocompletePlaces() {
      let bar = document.getElementById("autocomplete");
      let autocomplete = new google.maps.places.Autocomplete(bar);
      google.maps.event.addListener(autocomplete, "place_changed", function () {
        var place = autocomplete.getPlace();
        console.log(place);
        // document.getElementById('city2').value = place.name;
        // document.getElementById('cityLat').value = place.geometry.location.lat();
        // document.getElementById('cityLng').value = place.geometry.location.lng();
      });
    },
  },
  beforeRouteLeave(to, from, next) {
    if (!this.startedTyping) {
      next();
      return;
    }
    this.$snotify.confirm(
      "You will lose your unsaved data if you click yes",
      "Sure about leaving?",
      {
        timeout: 5000,
        showProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        titleMaxLength: 20,
        buttons: [
          {
            text: "Yes",
            action: (toast) => {
              next();
              this.$snotify.remove(toast.id);
            },
            bold: false,
          },
          {
            text: "No",
            action: (toast) => {
              next(false);
              this.$snotify.remove(toast.id);
            },
          },
        ],
      }
    );
  },
  mounted() {
    this.moment = moment;
    // google.maps.event.addDomListener(window, 'load', this.autocompletePlaces);
    // this.autocompletePlaces();
  },
  components: {
    fileBox,
    videoUrl,
    loader,
    svgIcon,
    fieldErrors,
  },
};
</script>

<style lang="scss" scoped>
// Side nav
</style>