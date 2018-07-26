<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" :overlay="false">
      <v-btn color="black" outline dark slot="activator">Training</v-btn>
      <v-card>
        <v-toolbar dark color="black">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Training</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
       
        <v-divider></v-divider>
         <form class="container">
    <v-text-field
      v-model="postdata.type"
      label="Training Type"
      required
    ></v-text-field>
    <v-text-field
      label="Details"
      v-model="postdata.detail"
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
        postdata: {
          type: '',
          detail: ''
        }
      }
    },
    methods: {
      sendata () {
        this.$store.dispatch('training', this.postdata)
        this.postdata.type = '',
        this.postdata.detail = ''
      }
    }
  }
</script>