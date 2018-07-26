<template>
  <v-layout row>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
 
      <v-btn flat outline slot="activator" dark>Raed Now</v-btn>
      <v-card>
        <v-toolbar dark color="cyan darken-3">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title class="home" @click="open">  
        AFPN
        </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="dialog = false">close</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
             <v-content>
      <v-container>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
         <h1>LOADING>>>>></h1>
    <v-layout wrap="" class="content">                    
     <div class="con">
                <p>
                  Loading....
              </p>
     </div>
      <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
           <img src="https://firebasestorage.googleapis.com/v0/b/afpn-906a9.appspot.com/o/noimage.jpg?alt=media&token=a3be3edc-eb2c-4b40-9aaf-7542a130dfc4" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Loading...</v-list-tile-title>
          </v-list-tile-content> 
        </v-list-tile>
      </v-list>
    </v-toolbar>
     </v-layout>

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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
        widgets: false
      }
    },
    methods: {
         open () {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
 .home{
   cursor: pointer;
   color: rgb(11, 20, 153) !important;
 }
</style>
