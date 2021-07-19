<template>
  <v-card height="100%">
    <v-card-title class="justify-center overline">
      <h3>{{ title }}</h3>
    </v-card-title>
      <div class="table ma-3">
        <div class="table-row header">
          <div
            v-for="(cell) in changeData"
            :class="'table-cell ' + cell.class + ' column-header'"
            :key="'header' + cell.elKey"
          >
            <p class="short"> {{ cell.shortTitle }} <br> {{ cell.unit }}</p>
            <p class="full"> {{ cell.fullTitle }} <br> {{ cell.unit }}</p>
          </div>
        </div>

        <div class="table-row"
          v-for="record in records "
          :key="record.name"
        >
            <div
              v-for="(cell) in changeData"
              :class="'table-cell ' + cell.class "
              :key="'header' + cell.elKey"
            >
              {{ record[cell.prop] }}
            </div>
        </div>

      </div>
  </v-card>
</template>

<script lang="ts" src="./weather-data.ts"></script>
<style lang="scss" scoped src="./weather-data.scss"></style>
