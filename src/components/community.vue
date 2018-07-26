<template>
<v-container>
    <v-layout v-if="!this.finduser">
      <v-card >
        <v-btn outline color="info" @click="form" >contiunue your registration....</v-btn>
      </v-card>
    </v-layout>
  <v-layout v-else >
      <v-flex xs12>
            <v-card-text>
             <div class="text-xs-center">
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
    <router-link to="/profile">
    <v-menu
      transition="slide-x-transition"
      bottom
      right
    >
      <v-btn slot="activator" color="dark" flat>
        <v-icon>account_circle</v-icon>
        Profile
      </v-btn>
    </v-menu>
    </router-link>
  </div>
  <hr>
        <v-subheader>Community Forum</v-subheader>
        <v-container fluid>
          <v-layout row>
            <v-flex xs12>
              <v-text-field
              v-model="post"
                name="input-1"
                label="What is on Your Mind...?"
                textarea
              ></v-text-field>
               <v-tooltip top>
      <v-btn dark v-if="post != ''" color="info" @click="addToForum" slot="activator">Send</v-btn>
      <v-btn dark v-else color="pink" slot="activator">Send</v-btn>
      <span>Submit Question</span>
    </v-tooltip>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>

      <v-layout v-for="forum in forums" :key="forum.id" wrap="" class="content">
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://firebasestorage.googleapis.com/v0/b/afpn-906a9.appspot.com/o/noimage.jpg?alt=media&token=a3be3edc-eb2c-4b40-9aaf-7542a130dfc4" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{forum.name}} {{forum.surname}} </v-list-tile-title>
          </v-list-tile-content> 
        </v-list-tile>
      </v-list>
    </v-toolbar>
     <div class="con">
              <v-card-text>
                 {{forum.post}}
              </v-card-text>
     </div>
        <v-content></v-content>
         <detail :forum="forum" />
              
     </v-layout>
      </v-flex>
  </v-layout>
</v-container>
</template>
<script>
import detail from './fullcomment.vue'
import addcomment from './addcomment'
import firebase from 'firebase'
import swal from 'sweetalert'
  export default {
    components: {detail: detail, addcomment: addcomment},
    data () {
      return {
        dialog: false,
        forums: '',
        post: '',
        postedBy: ''
        }
    },
    methods: {
      addToForum() {
           this.$store.commit('setloading', true)
         firebase.database().ref('Forum/').push({
            post: this.post,
            postedBy: this.postedBy,
            last_Time: firebase.database.ServerValue.TIMESTAMP
        })
        .then( () =>{
            this.$store.commit('setloading', false)
          this.post = ''
        })
      },
       form() {
        this.$router.push('/form')
      }

    },
    computed: {
         user() {
        this.postedBy = this.$store.getters.user
      },
       finduser () {
       return this.$store.getters.user
     }
    },
    created() {
      this.user
      this.$store.dispatch('getuser')
      firebase.database().ref('Forum/')
    .on('value', snapshot => {
     const val = []
    const obj = snapshot.val()
    for (let key in obj) {
        val.push({
        id: key,
        name: obj[key].postedBy.first_name,
        surname: obj[key].postedBy.surname,
        time: obj[key].last_Time,
        post: obj[key].post
       
      })
    }
    this.forums = val
    });
    }
  }
</script>
<style scoped>
   .con{
       max-height: 200px;
       overflow: hidden;
   }
 .com{
     max-height: 200px;
     overflow: scroll;
 }
 .content{
     padding: 20px;
     margin-bottom: 20px; 
 }
</style>

