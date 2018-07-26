<template>
  <v-layout wrap class="back">
    <v-container fluid>
     <v-parallax height="500" src= "https://firebasestorage.googleapis.com/v0/b/afpn-906a9.appspot.com/o/CyberSecurity.jpg?alt=media&token=e2c1e0f8-dabc-4832-bfce-c4e2c93670b8"
>  
       <v-layout justify-center align-center>
        <v-btn outline large round  @click.stop="drawer = !drawer" dark color="info">
          <v-icon>lock</v-icon> 
          Login</v-btn>
        <router-link to="/">
        <v-btn outline large round dark color="black">
          <v-icon>arrow_back</v-icon> 
          Back</v-btn>        
        </router-link>
        </v-layout>
     </v-parallax>
    </v-container>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      light
      absolute
      class="log"
    >
     <div class="form">
        <v-alert
                     v-if="show"
                      :value="true"
                      color="red"
                      icon="info"
                      outline
                    >
                      {{this.Message}}
                    </v-alert>
       <v-form>
    <v-text-field
      label="E-mail"
      v-model="login.email"
      :rules="emailRules"
      required
    ></v-text-field>
     <v-text-field
              type="password"
              name="Password"
              label="Enter your password"
               required
              v-model="login.password"
            ></v-text-field>
    <div class="text-xs-center">
    <v-btn @click="signin" round outline color="success" dark>Login</v-btn>
    <br>
   <forgetpassword/>
  
  </div>
  </v-form>
     </div>
     
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
import firebase from 'firebase'
import forgetpassword from './forgetpassword.vue'
  export default {
    components: {forgetpassword:forgetpassword},
    data () {
      return {
        show: false,
        drawer: null,
        Message: '',
        valid: false,
        Password: '',
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        login:{
          email: '',
          Password: ''
        }
      }
    },
    methods : {
      signin () {
        this.show = false
        let redirect = this.$route.query.redirect
        this.$store.commit('setloading', true)
        firebase.auth().signInWithEmailAndPassword(this.login.email, this.login.password)
        .then( () =>{
           this.$store.commit('setloading', false)
                 if(redirect){
                   this.$router.push(redirect)
                 }else {
                   this.$router.push('/profile')
                 }
        })
          .catch((error) => {
             this.$store.commit('setloading', false)
             this.Message = error.message
             this.login.password = ''
             this.show = true
          // ...
  }); 
      }
    }
  }
</script>
<style scoped>
.log{
    padding: 20px;
    margin-top: 40px;
    background-color: black;
}
 a{
   text-decoration-line: none;
   color: white;
 }
 .form{
   align-items: center;
   justify-content: center;
   margin-top: 50%;
   padding: 40px;
   padding-top: 20px;
   border-radius: 3px;
   border: 1px solid gray;
   flex: 1;
  background-color: rgb(162, 189, 204)
 
 }
 .back{
   background-color: rgb(162, 189, 204);
 }
</style>
