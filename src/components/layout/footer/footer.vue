<template>
    <v-footer
      app
      absolute
      padless
      outlined
      elevation="10"
    >
    <v-container>
      <v-col
        class="text-left"
        cols="12"
      >
          <p>ISTP &copy; 2020-{{ new Date().getFullYear() }} </p>
      </v-col>
     </v-container>

    </v-footer>
</template>

<script lang="ts" src="./footer.ts"></script>
<style lang="scss" scoped src="./footer.scss"></style>
