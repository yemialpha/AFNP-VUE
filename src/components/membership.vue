<template>
  <v-layout row>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" :overlay="false">
      <v-list-tile-content color="cyan" large outline dark slot="activator">{{getmembershiptype.type}}</v-list-tile-content>
      <v-card>
        <v-toolbar dark color="warning darken-3">
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
           <v-toolbar color="pink" dark>
          <v-toolbar-title>  
        {{getmembershiptype.type}}
        </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-title></v-card-title>
        
        <v-layout wrap>
           <v-flex sm9 offset-sm2>
               <v-card class="card1">
                   <v-card-title>
                     {{getmembershiptype.details}}
                   </v-card-title>
               </v-card>
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
    props:['getmembershiptype'],
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,

      }
    },
    methods: {
         open () {
        this.$router.push('/')
      }
    },
  }
</script>

<style scoped>
 .home{
   cursor: pointer;
   color: rgb(11, 20, 153) !important;
 }
 .payment{
     background-color: rgb(39, 116, 141);
     border: 1px solid black;
     border-radius: 2px;
     margin-bottom: 10px;
     margin-right: 35%;
     margin-left: 35%;
     padding: 5px;

 }
 .card{
     background-color: lightgrey;
 }
 .card1{
     background-color: rgb(239, 244, 247);
     color: black;
     padding: 10px;
 }
</style>
