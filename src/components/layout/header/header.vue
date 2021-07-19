<template>
  <v-container>
    <v-toolbar flat>
      <v-toolbar-title>
        <router-link to="/" id="title">
          <h3>Badars Weatherlink</h3>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="hidden-xs-only"
      >
        <v-btn
          text
          id="menuButton"
          @click="dialog = true"
        >
          <v-icon> mdi mdi-cloud-download </v-icon>
          Download
        </v-btn>
        <v-btn text to="/contacts" id="menuButton">
          <v-icon> mdi mdi-account-supervisor </v-icon>
          Contacts
        </v-btn>
      </v-toolbar-items>

      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item
              v-for="button in buttons"
              :key="button.title"
            >
              <v-list-item-title>
                <v-btn text :to="button.link">{{ button.title }}</v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-dialog
          v-model="dialog"
          width="450"
          height="auto"
        >
          <download-form />
      </v-dialog>

    </v-toolbar>
  </v-container>
</template>

<script lang="ts" src="./header.ts"></script>
<style lang="scss" scoped src="./header.scss"></style>
