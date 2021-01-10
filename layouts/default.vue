<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      fixed
      app
      :width="500"
      :mini-variant-width="150"
      color="secondary"
    >
      <div class="d-flex h100">
        <v-list class="h100 primary px-0">
          <v-list-item>
            <div class="mx-auto">
              
            </div>
          </v-list-item>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
            class="text-center px-0"
          >
            <v-list-item-content>
              <v-icon x-large>{{ item.icon }}</v-icon>

              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <div class="mx-auto py-12 mt-10 h-100 bcblue">
          <template>
            <v-list-item class="text-center">
              <v-list-item-avatar class="mx-auto" size="150">
                <img src="main_photo.jpg" />
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="mx-auto">
                <h1 class="text-center">Morteza Mortezai</h1>
                <p class="text-center mt-5">Web Developer</p>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action class="mx-auto">
                <v-btn color="primary">Download CV</v-btn>
              </v-list-item-action>
            </v-list-item>
          </template>
        </div>
      </div>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      flag: "En.png",
      lanItems: [
        { title: "English", icon: "En.png" , lan:"en"},
        { title: "ital", icon: "Fa.png"  , lan:"it"},
      ],
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "home",
          to: "/",
        },
        {
          icon: "mdi-account",
          title: "About me",
          to: "/about",
        },
        {
          icon: "mdi-school",
          title: "Resume",
          to: "/Resume",
        },
        {
          icon: "mdi-briefcase-variant",
          title: "Portfolio",
          to: "/portfolio",
        },
        {
          icon: "mdi-book-open-variant",
          title: "Blog",
          to: "/blog",
        },
        {
          icon: "mdi-phone",
          title: "Contact",
          to: "/contact",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
<style >
.h100 {
  height: 100vh;
}
.v-list .v-list-item--active {
  color: #ff8f00 !important;
  font-weight: bold;
}
.v-list-item--link:before {
  background-color: transparent !important;
}
body {
  font-family: poppins, Helvetica, sans-serif;
  margin: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}
</style>