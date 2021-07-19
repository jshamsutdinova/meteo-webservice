<template>
  <v-card>
    <v-card-title>
      Download data

      <v-spacer />

        <v-icon
          type="button"
          aria-label="Close"
          @click="closeDialog()"
        >
          mdi-close
        </v-icon>

    </v-card-title>
      <v-row>
        <v-col cols="12" sm="6" class="pb-0 pl-5">
          <date-picker nameLabel="Date from" />
        </v-col>
        <v-col cols="12" sm="6" class="pb-0 pr-5">
          <date-picker nameLabel="Date to" />
        </v-col>
      </v-row>
      <v-row class="pt-0">
        <v-col cols="12" md="6" class="py-0">
         <v-checkbox
            v-model="checkbox"
            :label="`Select time`"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-row v-if="checkbox">
        <v-col cols="12" sm="6" class="pt-0 pl-5">
          <time-picker timePeriod="Time from"/>
        </v-col>
        <v-col cols="12" sm="6" class="pt-0">
          <time-picker timePeriod="Time to"/>
        </v-col>
      </v-row>
      <v-row justify="end" class="mr-4">
        <v-col cols=12 sm=3>
          <v-btn color="error">
            Cancel
          </v-btn>
        </v-col>
        <v-col cols=12 sm=3>
          <v-btn color="success">
            Submit
          </v-btn>
        </v-col>
      </v-row>

  </v-card>
</template>

<script lang="ts" src="./download-data.ts"></script>
<style lang="scss" src="./download-data.scss" scoped></style>
