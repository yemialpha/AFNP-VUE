<template>
  <v-layout row>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" :overlay="false">
      <v-list-tile-content color="cyan" large outline dark slot="activator"><v-btn>Forget Password</v-btn></v-list-tile-content>
      <v-card>
        <v-toolbar dark color="info darken-3">
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
        Enter Your Email
        </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-title></v-card-title>
        
        <v-layout wrap>
           <v-flex sm9 offset-sm2>
               <v-card class="card1">
                   <v-card-text>
                          <v-alert
                      :value="true"
                      v-if="show"
                      color="success"
                      icon="info"
                      outline
                    >
                   check Your Email.. 
                    </v-alert>
                   </v-card-text>
                   <v-card-title>
                    <v-text-field  :rules="emailRules" v-model="email" label="Email" ></v-text-field>
                   </v-card-title>
                   <v-card-actions>
                        <v-btn block outline v-if="!email == ''" @click.prevent="send" color="info" >send</v-btn>
                        <v-btn block outline v-else  color="warning" >send</v-btn>
                   </v-card-actions>
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
import firebase from 'firebase'
  export default {  
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        show: false,
        email: '',
          emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
      }
    },
    methods: {
         open () {
        this.$router.push('/')
      },
      send() {
           this.show = false
            var auth = firebase.auth();
            auth.sendPasswordResetEmail(this.email).then((data) => {
                this.email = ''
                console.log(data)
            // Email sent.
            this.show = true
            }).catch((error) => {
                console.log(error)
            // An error happened.
             this.show = true
            });
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
