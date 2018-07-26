<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" :overlay="false">
      <v-btn outline color="success" slot="activator">Membership List</v-btn>
      <v-card>
        <v-toolbar dark color="success">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Membership</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
       
        <v-divider></v-divider>
         <form class="container">
    <v-text-field
      label="Membership Type"
      autofocus
      :rules="nameRules"
      v-model="postdata.type"
      required
    ></v-text-field>
    <v-text-field
      :rules="nameRules"
      v-model="postdata.detail"
      label="Details"
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
         nameRules: [
        v => !!v || 'This field is required',
      ],
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
      this.$store.dispatch('membershiptypes', this.postdata)
     // this.postdata.type = '',
     // this.postdata.detail = ''
     this.$router.push('/admin')
    }
  }
  }
</script>