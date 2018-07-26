<template>
     <v-parallax class="bak" height="900" src= "https://firebasestorage.googleapis.com/v0/b/afpn-906a9.appspot.com/o/A5_Membership_Benefits_2.png?alt=media&token=d932fb8f-e6d3-4fb3-ad24-e2328aedb571">
  <v-container>    
 <v-layout justify-center align-center>
      <v-card class="signup">
      <v-card-title dark>
          <span class="headline">Membership Form</span>
        </v-card-title>
        <v-card-text>
           <v-container grid-list-md>
        <v-card-title>
          <span class="headline">First Step</span>
        </v-card-title>
             <v-layout wrap>
                <v-flex xs12> 
                    <v-alert
                     v-if="show"
                      :value="true"
                      color="red"
                      icon="info"
                      outline
                    >
                      {{this.Message}}
                    </v-alert>                
                  <v-text-field dark
                    label="E-mail"
                    v-model="signup.email"
                    :rules="emailRules"
                    required
                    hint="example@mail.com"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                  dark
                  type="password"
                  name="Password"
                  label="Enter your password"
                  required
                  v-model="signup.password"
                ></v-text-field>
                </v-flex>
                
             </v-layout>
           </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <router-link to="/">
          <v-btn color="blue darken-1" flat @click.native="dialog">Close</v-btn>
          </router-link>
          <v-btn color="blue darken-1" flat @click.native="register">Register</v-btn>
        </v-card-actions>
      </v-card>
 </v-layout>
  </v-container>
     </v-parallax>
</template>
<script>
import firebase from 'firebase';

  export default {
    data () {
      return {
        Message: '',
        show: false,
         emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        step: true,
        signup: {
          email: '',
          password: ''
         }
      }
    },
  methods:{
    register () {
      this.show = false
      this.$store.commit('setloading', true)
        firebase.auth().createUserWithEmailAndPassword(this.signup.email, this.signup.password)
        .then( (data) => {
         this.$store.commit('setloading', false)
         this.$router.push('/form')
        })
        .catch((error) => {
          this.$store.commit('setloading', false)
          this.signup.password = ''
          this.Message = error.message;
          this.show = true;
          // ...
        });
        //this.$store.dispatch('register', this.signup)
        },
    dialog () {
      this.$emit('close')
    },
    close () {
      this.$emit('close')
    }
  }
  }
</script>
<style scoped>
  .signup{
    border: 1px solid black;
    background-color: transparent;
    border-radius: 5px;
  }
  .headline{
    color: black;
  }
  .bak{
    background-color: black;
  }
</style>
