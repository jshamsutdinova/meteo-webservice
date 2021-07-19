<template>
<v-container>
  <v-row justify="center" align="stretch">

    <v-col cols="12" md="4">
      <weather-data title="Weather for last 24 hours" :data="dailyRecords" period="Daily" />
    </v-col>

    <v-col cols="12" md="4" id="current">
      <current-weather />
    </v-col>

    <v-col cols="12" md="4">
      <weather-data title="Weather for last 7 days" :data="weeklyRecords" period="Weekly" />
    </v-col>

  </v-row>

  <v-row id="graph">
    <v-col cols="12">
      <chart-data />
      <hiden-notification />
    </v-col>
  </v-row>
</v-container>
</template>

<script lang="ts" src="./dashboard.ts"></script>
<style lang="scss" src="./dashboard.scss" scoped></style>
