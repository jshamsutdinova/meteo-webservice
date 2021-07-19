<template>
  <v-card id='chart-card'>
    <div class="pa-3">
      <v-btn-toggle class="mx-5">
        <v-btn
          v-for="day in buttons.days"
          :key="day.id"
          @click="setPeriod(day.title)"
          small
        >
        {{ day.title}}
        </v-btn>
      </v-btn-toggle>
      <v-btn-toggle>
        <v-btn
          v-for="parameter in buttons.parameters"
          :key="parameter.id"
          @click="setParameter(parameter.title)"
          small
        >
        {{ parameter.title}}
        </v-btn>
      </v-btn-toggle>
    </div>

    <div class="pa-3">
      <canvas ref="canvas" width="1200" height="300"></canvas>
    </div>
  </v-card>
</template>

<script src="./chart-data.js"></script>
<style lang="scss" scoped src="./chart-data.scss"></style>
