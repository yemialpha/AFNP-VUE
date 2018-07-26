<template>
  <v-layout row>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" :overlay="false">
      <v-btn color="cyan" large outline dark slot="activator"> <v-icon>question_answer</v-icon>Membership fees</v-btn>
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
           <v-toolbar color="pink" dark>
          <v-toolbar-title>  
        PAYMENT PANEL
        </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-title></v-card-title>
        
        <v-layout wrap>
             <v-flex sm4>
               <v-card class="card1">
                   <v-card-title><b>Membership fees Payment</b></v-card-title>
                  <v-card-text>
                       <v-select
                          @change="load"
                          label="Title"
                          required
                          :items="['2019', '2020', '2021', '2022', 'Others']"
                        ></v-select>
                  </v-card-text>
                   <div class="payment">
                       <payment/>
                   </div>
               </v-card>
           </v-flex>
           <v-flex sm6 offset-sm1>
               <v-card class="card1">
                   <v-card-title><b>Membership fees Payment Records</b></v-card-title>
                  <v-list-tile v-for="pay in paymentInfo" :key="pay.id" >
                            <v-list-tile>
                               <b>{{pay.year}} : </b>
                            </v-list-tile>
                            <v-spacer></v-spacer>
                            <v-list-tile-content>
                                <v-list-tile-title>Membership Fees</v-list-tile-title>
                            </v-list-tile-content>
                              <v-list-tile-content>
                                <v-list-tile-title><small>payed</small> <v-icon color="info" >check</v-icon> </v-list-tile-title>
                            </v-list-tile-content> 
                  </v-list-tile>
                  <v-list-tile v-if="paymentInfo == null">
                            <v-list-tile>
                               <b></b>
                            </v-list-tile>
                            <v-spacer></v-spacer>
                            <v-list-tile-content>
                                <v-list-tile-title>No Records</v-list-tile-title>
                            </v-list-tile-content>
                              <v-list-tile-content>
                                <v-list-tile-title><small></small> <v-icon color="info" >warning</v-icon> </v-list-tile-title>
                            </v-list-tile-content> 
                  </v-list-tile>
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
import payment from './payment.vue'
import firebase from 'firebase'

  export default {  
    components: {payment:payment},
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        paymentInfo: null,
      }
    },
    methods: {
         open () {
        this.$router.push('/')
      },
      load(e){
        this.$store.commit('addyear', e)
      }
    },

    mounted() {
          this.$store.commit('setloading', true) 
             var userId = firebase.auth().currentUser.uid      
       firebase.database().ref('MembershipPaymentInfo/' + userId).once('value')
      .then(data => {
          this.$store.commit('setloading', false)
        const val = data.val()
        console.log(val + 'test')
       this.paymentInfo = val
      })
      .catch(error => {
        console.log(error)
    //  Actions.createcard()
      })
    }
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
