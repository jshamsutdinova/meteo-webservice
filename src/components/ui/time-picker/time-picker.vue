<template>
  <div class="time-picker-container">
    <div>
      <v-icon>mdi-clock-time-five-outline</v-icon>
    </div>
    <div>
      <div class="label"> {{ timePeriod }}</div>
      <vue-timepicker
        format="HH:mm"
        :minute-interval="10"
        hide-dropdown
        manual-input
        drop-direction="up"
      >
      </vue-timepicker>
    </div>
  </div>
</template>

<script lang="ts" src="./time-picker.ts"></script>
<style lang="scss" scoped src="./time-picker.scss"></style>
