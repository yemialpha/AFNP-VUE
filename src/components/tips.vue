<template>
  <v-layout row>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" :overlay="false">
      <v-list-tile-content color="cyan" large outline dark slot="activator">
           <v-menu
                open-on-hover
                origin="center center"
                transition="slide-x-transition"
                bottom
              >
            <v-chip color="pink hov" text-color="black" slot="activator">
                  <v-icon></v-icon>
             Forensics Tips & services
            </v-chip>
             </v-menu>
      </v-list-tile-content>
      <v-card>
        <v-toolbar dark color="white darken-3">
          <v-btn color="info" icon @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title class="home" @click="open">  
        AFPN
        </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn color="info" flat @click.native="dialog = false">close</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
        <v-content>
      <v-container>
           <v-toolbar color="info" dark>
          <v-toolbar-title>  
        Forensics Tips & services
        </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-title></v-card-title>
        
        <v-layout wrap>
           <v-flex xs12 sm5 offset-sm1 >
               <v-card class="card1">
                   <v-list class="lis">
                    <b>The siginificance of forensic evidence in court</b>
                   </v-list>
                   <v-divider></v-divider>
                   <v-card-text>
                      <v-list-tile>Easy evidence linkage</v-list-tile>
                      <v-list-tile>Expert report and testimony</v-list-tile>
                      <v-list-tile>Help the court in a clearer direction</v-list-tile>
                      <v-list-tile>Job made easy for the judge in admissibility of justice</v-list-tile>
                   </v-card-text>
               </v-card>
           </v-flex>
            <v-flex xs12 sm5 offset-sm1 >
               <v-card class="card1">
                   <v-list class="lis">
                   <b>  Public(Client) duty after crime </b>
                   </v-list>
                   <v-divider></v-divider>
                   <v-card-text>
                      <v-list-tile>Immediate report to the police offices 0r Crime Scene Office</v-list-tile>
                      <v-list-tile>Demand from police to get Crime scene Officer</v-list-tile>
                      <v-list-tile>Don't touch anything</v-list-tile>
                      <v-list-tile>Avoid the scene entirely</v-list-tile>
                      <v-list-tile>Prevent other from the scene</v-list-tile>
                      <v-list-tile>Take photographs of the scene before the arriver of anybody without contaminating the scene</v-list-tile>
                   </v-card-text>
               </v-card>
           </v-flex>
            <v-flex xs12 sm5 offset-sm1 >
               <v-card class="card1">
                   <v-list class="lis">
                    <b>Police Officer</b>
                   </v-list>
                   <v-divider></v-divider>
                   <v-card-text>
                      <v-list-tile>First respondent</v-list-tile>
                      <v-list-tile>Cordon and protect the scene</v-list-tile>
                      <v-list-tile>Call Crime Scene team </v-list-tile>
                      <v-list-tile>Protect the Crime scene officers</v-list-tile>
                   </v-card-text>
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
 .lis{
     padding: 10px;
     background-color: lightskyblue;
 }
</style>
