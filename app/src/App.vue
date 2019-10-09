<template>
  <v-app>
    <AppToolbar/>
<v-content>
  <v-container fluid>
    <router-view></router-view>
    </v-container>
    </v-content>
    </v-app>
</template>

<script>
import AppToolbar from "./components/AppToolbar.vue";

export default {
  components: {
    AppToolbar
    },
    name:'App',
  data: () => ({
    
  }),
};
</script>
