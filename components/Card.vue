<template>
  <v-card :loading="loading" class="mx-auto" max-width="300" height="100%">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" lazy-src="https://picsum.photos/10/6?image=5"></v-img>
    <a :href="`${link}`" target="blank" class="text-decoration-none"
      ><v-card-title>{{ title }}</v-card-title></a
    >

    <v-card-text>
      <div>{{ subtitle }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-chip-group column>
        <v-chip v-for="val in tech" :key="val" color="primary">{{
          val
        }}</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "Card",
  data: () => ({
    loading: false,
  }),
  props: ["title", "subtitle", "tech", "src", "link"],

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>