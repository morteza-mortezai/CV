<template >
  <div class="d-flex flex-column mb-3">
    <div class="d-flex justify-space-between">
      <span>{{ title }}</span>
      <span>{{ valueDeterminate }} %</span>
    </div>
    <v-progress-linear
      v-model="valueDeterminate"
      color="deep-purple accent-4"
    ></v-progress-linear>
  </div>
</template>
<script>
export default {
  name: "Progress",
  props: ["valueDeterminate", "title"],
  data() {
    return {};
  },
};
</script>