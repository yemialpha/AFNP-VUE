<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" :overlay="false">
      <v-btn color="primary" outline dark slot="activator">Mission</v-btn>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Our Vision & Mission</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
       
        <v-divider></v-divider>
           <form class="container">
    <v-text-field
    autofocus
    v-model="mission"
    :rules="nameRules"
      label="Content"
      multi-line
      required
    ></v-text-field>
     <br>
    <br>
    <v-btn class="sub"  @click="sendata">submit</v-btn>
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
        mission: '',
        nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      }
    },
    methods: {
      sendata () {
          if (this.$refs.form.validate()) {
        this.$store.dispatch('mission', this.mission)
        this.mission = ''
      }
       }
    }
  }
</script>