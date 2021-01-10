<template>
  <div>
   

    <br />
    <h4 class="headline white--text">Skills HighLights</h4>
    <br />
    <Progress
      class="px-12"
      v-for="skill in skills"
      :key="skill.title"
      :valueDeterminate="skill.percent"
      :title="skill.title"
    />
  </div>
</template>
<script>

export default {
  data() {
    return {
      skills: [
        { percent: 60, title: "Vue Js" },
        { percent: 40, title: "VueX" },
        { percent: 45, title: "Nuxt" },
        { percent: 60, title: "Vuetify" },
        { percent: 30, title: "Vee-Validate" },
        { percent: 30, title: "Bootstrap-vue" },
        { percent: 32, title: "i18n" },

        { percent: 50, title: "SASS" },
        { percent: 40, title: "Rest Api" },

        { percent: 80, title: "HTML5 , CSS3" },
        { percent: 60, title: "Java Script , ES6" },

       
        { percent: 65, title: "Bootstrap" },
        { percent: 40, title: "Webpack" },
        { percent: 40, title: "Git" },

        { percent: 30, title: "PHP" },
        { percent: 30, title: "MySQL" },
      ]
    };
  },

};
</script>
