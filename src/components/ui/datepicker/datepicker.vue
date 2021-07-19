<template>
  <v-card>
    <v-card-title>
      Download data

      <v-spacer />

      <v-icon
        aria-label="Close"
        @click="dialog = false"
      >
        mdi-close
      </v-icon>
    </v-card-title>

    <v-card-text>
      <template>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="6"
          >
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="menu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          </v-row>
      </template>
      <!-- <template>
        <v-row>
          <v-col
            class='text-center'
            cols="12"
            sm="6"
          >
            <v-date-picker
              v-model="dates"
              range
            ></v-date-picker>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="dateRangeText"
              label="Date range"
              prepend-icon="mdi-calendar"
              readonly
            ></v-text-field>

            <div class="ml-6">From</div>
            <v-icon>mdi-clock-time-five-outline</v-icon>
            <vue-timepicker
              format="HH:mm"
              :minute-interval="10">
            </vue-timepicker>

            <div class="ml-6 mt-5">To</div>
            <v-icon>mdi-clock-time-five-outline</v-icon>
            <vue-timepicker
              format="HH:mm"
              :minute-interval="10">
            </vue-timepicker>

          </v-col>
        </v-row>
      </template> -->
    </v-card-text>

    <v-card-actions>
      <v-spacer />

      <v-btn
        color="primary"
        text
        @click="dialog = false"
      >
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
  <!-- <v-row justify="center">
    <v-date-picker
      v-model="picker"
      year-icon="mdi-calendar-blank"
      prev-icon="mdi-skip-previous"
      next-icon="mdi-skip-next"
    ></v-date-picker>
  </v-row> -->
</template>

<script lang="ts" src="./datetime-picker.ts"></script>
<style lang="scss" src="./datetime-picker.scss" scoped></style>
