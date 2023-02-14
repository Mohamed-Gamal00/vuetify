<template>
  <v-container>
    <v-row>
      <v-col v-for="servise in services.slice(3)" :key="servise">
        <v-card class="mx-end" max-width="344">
          <v-img :src="servise.image" height="200px" contain></v-img>

          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-card-actions>
            <v-btn @click="showalert()" color="orange-lighten-2" variant="text">
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    show: false,
    services: [],
    messages: [
      {
        from: "You",
        message: `Sure, I'll see you later.`,
        time: "10:42am",
        color: "deep-purple-lighten-1",
      },
      {
        from: "John Doe",
        message: "Yeah, sure. Does 1:00pm work?",
        time: "10:37am",
        color: "green",
      },
      {
        from: "You",
        message: "Did you still want to grab lunch today?",
        time: "9:47am",
        color: "deep-purple-lighten-1",
      },
    ],
  }),
  mounted() {
    this.featharticles();
  },
  methods: {
    showalert() {
      this.$swal("Hello vuetify world!!!");
    },
    async featharticles() {
      /* servcies */
      await axios
        .get(`https://admin.sigma-tech.agency/api/services`)
        .then((response) => {
          this.services = response.data.services;
          console.log(this.services);
        })
        .catch(() => this.$router.push({ name: "servererror" }));
      // if (services.status == 200) {
      //   this.services = services.data.services;
      // }
    },
  },
};
</script>
<style scoped>
* {
  direction: rtl;
}
</style>
