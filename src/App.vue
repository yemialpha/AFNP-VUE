<template>
  <v-app id="inspire">
    
    <div class="back">
    <v-toolbar
      color="blue-grey"
      fixed
      app
      clipped-right
    >
    
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title class="home" @click="open">  
       <v-btn color="blue" outline > AFPN</v-btn>
       <v-progress-circular
        v-if="loading"
      :size="30"
      color="info"
      indeterminate
    ></v-progress-circular>
        </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer
     class="side"
      fixed
      v-model="drawer"
      :stateless="left"
      app
    >
    <sideview/>
     <v-btn v-if="user" outline color="warning" @click="signout" >signout</v-btn>
     <v-btn v-else outline color="info" @click="login" >login</v-btn>
     
    </v-navigation-drawer>
    <v-navigation-drawer
      temporary
      v-model="left"
      fixed
    >
    </v-navigation-drawer>
    <v-content v-if="loading">
       <v-progress-linear color="cyan" height="2" value="25" :indeterminate="true"></v-progress-linear>
    </v-content>
    </div>
    <v-content>
      <router-view/>
    </v-content>
    
    <v-footer  color="cyan">
         <v-layout class="foot">
      <p>AFPN</p>
      <p>&copy; 2018</p>
      <v-spacer></v-spacer>
      <p class="red1">Web Developed By: <span>...</span></p>
      </v-layout>
    </v-footer>
  </v-app>
</template>


<script>
import sideview from './components/Homeveiw.vue'
import firebase from 'firebase'
  export default {
    components: {sideview:sideview},
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: null,
      left: null,
        text: ''
       }),
    props: {
      source: String
    },
     methods: {
      next () {
        this.active = this.tabs[(this.tabs.indexOf(this.active) + 1) % this.tabs.length]
      },
      open () {
        this.$router.push('/')
      },
        signout() {
        this.$store.commit('setloading', true)
        firebase.auth().signOut().then( () => {
          this.$store.commit('setloading', false)
          this.$router.push('/login')
          this.$store.commit('signout', null)
          console.log('Signed Out');
        }, (error) => {
          this.$store.commit('setloading', false)
          console.error('Sign Out Error', error);
        });
      },
      login() {
        this.$router.push('/login')
      }
    },
    computed: {
      loading () {
      return this.$store.state.loading.loading
      },
      user() {
        return this.$store.getters.user
      }
    },
    created() {
      console.log(this.loading1)
    }
  }
</script>
<style scoped>
 .home{
   cursor: pointer;
   color: rgb(11, 20, 153) !important;
 }
 a{
   text-decoration-line: none;
 }
 .office{
   padding: 20px;
   color: rgb(6, 42, 90);
   
 }
 span{
   color: white;
 }
 .red1{
   color: yellow;
 }
 .foot1{
   color: blue !important;
 }
 .foot{
   padding-left: 40px;
   padding-right: 40px;
   padding-top: 10px;
 }
 .back{
   background-color: #181818;
 }
  a{
   text-decoration-line: none;
 }
 .side{
   background-color: #181818;
 }
</style>
