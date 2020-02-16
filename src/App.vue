<template>
  <v-app>    
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title>Ramdan's Blog</v-toolbar-title>
      </div>
    </v-app-bar>

    <navigation-drawer></navigation-drawer>    

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import NavigationDrawer from './components/NavigationDrawer';

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavigationDrawer,
  },

  data: () => ({
    // 
  }),
};
</script>
