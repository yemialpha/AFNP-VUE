<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" :overlay="false">
      <v-btn color="primary" outline dark slot="activator">About Us</v-btn>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>About Us</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
       
        <v-divider></v-divider>
        <form class="container">
    <v-text-field
      label="Content"
      v-model="aboutus"
      multi-line
      required
    ></v-text-field>
     <br>
    <br>
    <v-btn class="sub" @click.prevent="sendata">submit</v-btn>
  </form>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        aboutus: ''
      }
    },
    methods: {
      sendata () {
        this.$store.dispatch('aboutus', this.aboutus)
        this.aboutus = ''
      }
    }
  }
</script>