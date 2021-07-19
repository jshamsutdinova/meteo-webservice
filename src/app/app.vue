<template>
  <v-app>
    <v-app-bar app absolute>
      <app-header />
    </v-app-bar>

      <v-main>
          <router-view />
      </v-main>

    <app-footer />
  </v-app>
</template>

<script lang="ts" src="./app.ts"></script>

<style lang="scss" src="./app.scss" scoped></style>
