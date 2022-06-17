<template>
  <v-sheet
      class="v-sheet--offset mx-auto"
      color="#451131"
      elevation="12"
      max-width="calc(100% - 32px)"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>
</template>

<script>
  export default {
       data: () => ({
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        300,
        75,
        4110,
        590,
        710,
        -260,
        850,
        440,
      ],
    }),
}
</script>
