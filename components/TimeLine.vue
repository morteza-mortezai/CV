<template>
<div>
    <h1 class="headline font-weight-bold white--text">Resume</h1>
    <br>
    <h4 class="headline white--text ">Education</h4>
  <v-timeline>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
      </template>
      <div class="py-4">
        <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
         {{year.tittle}}
        </h2>
        <div>
                  {{year.detail}}

        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</div>
</template>
<script>
export default {
  name: "TimeLine",
  data: () => ({
    years: [
      {
        color: "cyan",
        year: "2007",
        tittle: 'Diploma ' ,
        detail:
          "Diploma in Mathematics Physics  ",
      },
      {
        color: "green",
        year: "2013",
                tittle: 'Bachelor ' ,

        detail:
          "Bechelor of Mechanical Eng. in Iran University of Science and Technology ",
      },
    ],
  }),
};
</script>