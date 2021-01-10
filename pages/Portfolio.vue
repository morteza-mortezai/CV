<template >
  <v-row>
    <v-col v-for="item in cards" :key="item.title" cols="12" sm="6" md="4">
      <Card :title="item.title" :subtitle="item.subtitle" :tech="item.tech" :link="item.link" :src="item.src" />
    </v-col>
  </v-row>
</template>
<script>
import Card from "../components/Card.vue";
export default {
  data: function () {
    return {
      cards: [
        {
          title: "Admin Dashboard",
          subtitle: "made with Nuxt and Vuetify",
          tech: ["Nuxt", "Vuetify"],
          link: "http://smartender.ir/",
          src: "http://smartender.ir/shop1.png",
        },
        {
          title: "clothing Shop",
          subtitle: "shop Template made with bootstrap",
          tech: ["Bootstrap", "JQuery", "BoxIcon"],
          link: "http://smartender.ir/shop2/",
          src: "http://smartender.ir/shop1.png",
        },
        {
          title: "Admin Panel",
          subtitle: "made with VueJS and Vuetify",
          tech: ["VueJS", "Vuetify"],
          link: "http://smartender.ir/admin/",
        },
        {
          title: "boot Shop",
          subtitle: "shop Template made with bootstrap",
          tech: ["Bootstrap", "JQuery", "FontAwesome"],
          link: "http://smartender.ir/shop/",
          src: "http://smartender.ir/shop2.jpg",
        },
        {
          title: "Divar",
          subtitle: "shop Template made without framework",
          tech: ["html", "css", "FontAwesome"],
          link: "http://smartender.ir/divar/",
          src: "http://smartender.ir/div.png",
        },
        {
          title: "Sheypoor",
          subtitle: "shop Template made without framework",
          tech: ["html", "JS"],
          link: "http://smartender.ir/sheypoor/",
          src: "http://smartender.ir/shey.png",
        },
      ],
    };
  },
  components: {
    Card,
  },
};
</script>