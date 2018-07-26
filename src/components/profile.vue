<template>
<v-container>
      <v-card height="200" v-if="!this.user">
        <v-card-title>
           <v-btn outline color="info" @click="signout" >signout</v-btn>
        </v-card-title>
        <v-card-media>
            <v-btn outline color="pink" @click="form" >contiunue your registration....</v-btn>
        </v-card-media>
      </v-card>
      <v-card v-else>
        <v-toolbar color="cyan" dark extended>
          <v-btn
            fab
            large
            color="white"
            bottom
            left
            absolute
          >
          <v-avatar>
            <img :src= user.imgurl>
          </v-avatar>
          </v-btn>
          
          <v-toolbar-title class="gray--text">Welcome</v-toolbar-title>
          <v-toolbar-title class="gray--text">{{user.title}} {{user.first_name}} {{user.surname}} </v-toolbar-title>
          <v-spacer></v-spacer>
          <div class="text-xs-center topmenu">
       <router-link to="/">
       <v-menu
      origin="center center"
      transition="scale-transition"
      bottom
    >
      <v-btn slot="activator" flat color="dark">
        <v-icon>home</v-icon>
        Home
      </v-btn>
    </v-menu>
       </router-link>

    <v-menu
      origin="center center"
      transition="scale-transition"
      bottom
    >
      <v-btn slot="activator" color="dark" flat>
          <v-icon>work</v-icon>
        Resource
      </v-btn>
      <v-list class="liste">
               <router-link to="/writeup">
                  <v-list-tile-content class="listm">
                   Write Ups
                  </v-list-tile-content>
               </router-link>
                    <v-list-tile-content class="listm">
                   Library
                  </v-list-tile-content>
                   <v-list-tile-content class="listm">
                   Merchandise
                  </v-list-tile-content>
                </v-list>
    </v-menu>
    <router-link to="/community">
    <v-menu
      transition="slide-x-transition"
      bottom
      right
    >
      <v-btn slot="activator" color="dark" flat>
        <v-icon>forum</v-icon>
        Community Forum
      </v-btn>
    </v-menu>
    </router-link>
      <v-btn outline color="warning" @click="signout" >signout</v-btn>
  </div>
        </v-toolbar>
   <v-container>
      <v-layout wrap class="pro">
        <v-flex sm3>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
         <v-btn color="pink" outline v-if="user.Status">Membership Status: Pending...</v-btn>
        <br>
        <fee/>
        <v-list-tile>
          <v-list-tile-action>
          </v-list-tile-action>
        </v-list-tile>
        <br>
        <v-divider></v-divider>
          <edit/>
      </v-list>
        </v-flex>
        <v-flex sm9>
          <h3 class="text-xs-center">Messages</h3>
           <v-expansion-panel class="com" inset>
                        <v-expansion-panel-content v-for="message in messages" :key="message.id">
                            <div slot="header">
                                 <v-list-tile>
                            <v-list-tile>
                               <b>From : </b>
                            </v-list-tile>
                            <v-spacer></v-spacer>
                            <v-list-tile-content>
                                <v-list-tile-title>Web Admin</v-list-tile-title>
                            </v-list-tile-content>
                              <v-list-tile-content>
                                <v-list-tile-title><small>12:10pm</small></v-list-tile-title>
                            </v-list-tile-content> 
                            </v-list-tile>
                            </div>
                            <v-card>
                            <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                         <v-expansion-panel-content>
                            <div slot="header">
                                 <v-list-tile>
                            <v-list-tile>
                               <b>From : </b>
                            </v-list-tile>
                            <v-spacer></v-spacer>
                            <v-list-tile-content>
                                <v-list-tile-title>AFPN Welcome Message</v-list-tile-title>
                            </v-list-tile-content>
                              <v-list-tile-content>
                                <v-list-tile-title><small>12:10pm</small></v-list-tile-title>
                            </v-list-tile-content> 
                            </v-list-tile>
                            </div>
                            <v-card>
                            <v-card-text class="grey lighten-3">Welcome...</v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                        </v-expansion-panel>
        </v-flex>
  </v-layout>
    </v-container>
      </v-card>
</v-container>
</template>
<script>
import edit from './editprofile.vue'
import fee from './fee.vue'
import firebase from 'firebase'
  export default {
      components:{edit: edit, fee: fee},
    data () {
      return {
        drawer: null,
        messages: ''
      }
    },
   computed: {
     user () {
       return this.$store.getters.user
     }
   },

  async mounted(){
     this.$store.commit('setloading', true)
    await this.$store.dispatch('getuser')
       var userId = firebase.auth().currentUser.uid 
           firebase.database().ref('MessagesToUser/' + userId).once('value')
      .then(data => {
          this.$store.commit('setloading', false)
        const val = data.val()
        console.log(val)
       this.messages = val
      })
      .catch(error => {
        console.log(error)
    //  Actions.createcard()
      })
    },
    methods : {
      form() {
        this.$router.push('/form')
      },
      signout() {
        this.$store.commit('setloading', true)
        firebase.auth().signOut().then( () => {
          this.$store.commit('setloading', false)
          this.$router.push('/')
          console.log('Signed Out');
        }, (error) => {
          this.$store.commit('setloading', false)
          console.error('Sign Out Error', error);
        });
      }
    }
  }
</script>
<style scoped>
.pay{
    padding: 10px;
    border: 1px solid black;
    background-color: cyan;
    margin: 10px;
}
.listm{

   cursor: pointer;
   margin-bottom: 5px;
}
 a{
   text-decoration-line: none;
   color: black;
 }
 .pro{
   margin-top: 30px;
 }
  @media screen and (max-width: 480px) { 
   .topmenu{
     display: none;
 }
}
</style>
