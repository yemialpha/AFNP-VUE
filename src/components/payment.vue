<template>
  <v-layout row justify-center>
   
    
        <paystack
         :amount="amount"
        :email="email"
        :paystackkey="paystackkey"
        :reference="reference"
        :callback="callback"
        :close="close"
        ></paystack>
  
  </v-layout>
</template>

<script>
import paystack from 'vue-paystack';
import firebase from 'firebase'
  export default {
        components: {
        paystack
    },
    data () {
      return {
          dialog: false,
         paystackBtnText: "Click Form Payment",
          paystackkey: "pk_test_593b7f5f9deeb839ade80e68d7505967546acb6f", //paystack public key
          email: "", // Customer email
          amount: 1000000 // in kobo
      }
    },
  computed: {
      reference(){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( let i=0; i < 10; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
      }
    },
    methods: {
      callback: function(response){
        var year = this.$store.getters.getyear
         this.$store.commit('setloading', true)
         var userId = firebase.auth().currentUser.uid 
         firebase.database().ref('MembershipPaymentInfo/' + userId).push({
           payment: true,
           year: year
         })
         .then( (data) => {
           this.$store.commit('setloading', false)
           
         })
         .catch( (error) => {
           console.log(error)
         })
      },
      close: function(){
          console.log("Payment closed")
      }
    },
    created(){
      this.email = firebase.auth().currentUser.email
    }
  }
</script>

