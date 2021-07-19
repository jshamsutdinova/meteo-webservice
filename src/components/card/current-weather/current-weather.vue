<template>
  <v-card height="100%" id='test'>
    <v-row no-gutters>
      <v-col cols="12" md="12" sm="6" id="img">
        <v-img
          class="white--text align-start"
          :src="require('@/assets/img/badars.jpg')"
          alt="Badars SSRT"
          id='image'
        >
          <v-card-title class="overline justify-center">
            July 23, 12:40
          </v-card-title>
          <v-card-text>
            <div class="header text-center mt-5"> 28&deg;C </div>
          </v-card-text>
        </v-img>
      </v-col>

      <v-col cols="12" md="12" sm="6" id='parameters-main' height="100%">
          <v-row
            no-gutters
            id="parameters-row"
            class="d-flex pa-2 mt-2"
          >
            <v-col
              cols="3"
              class="parameters-col d-flex flex-column justify-start"
              v-for="parameter in parameters"
              :key="parameter.id"
            >
              <v-icon class="display-2" >{{ parameter.icon}}</v-icon>
              <span class="text-center">{{ parameter.value }}</span>
            </v-col>
          </v-row>

        <div class="report">
          <v-divider></v-divider>
          <v-btn
            text
            id="report"
            class="my-1"
          >
            full report
            <v-icon
              light
            >
              mdi mdi-file-excel
            </v-icon>
          </v-btn>
        </div>

      </v-col>

    </v-row>

  </v-card>
</template>

<script lang="ts" src="./current-weather.ts"></script>
<style lang="scss" scoped src="./current-weather.scss"></style>
