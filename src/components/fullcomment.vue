<template>
  <v-layout row>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
      <v-btn color="cyan darken-3" outline large dark slot="activator">Read More & add comment</v-btn>
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
      <v-container class="home2" >
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
         
                 <v-layout wrap="" class="content">
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
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
                <addcomment :forum = "forum"/>
                        <v-expansion-panel focusable class="com" inset>
                        <v-expansion-panel-content class="head" v-for="comment in comments" :key="comment.id">
                            <div slot="header">
                                 <v-list-tile avatar>
                            <v-list-tile-content>
                                <v-list-tile-title> {{comment.name}} {{comment.surname}}  </v-list-tile-title>
                                <v-btn v-if="comment.userid == authid" outline color="red" small @click="deletecomment">delete</v-btn>
                            </v-list-tile-content> 
                            </v-list-tile>
                            </div>
                            <v-card>
                            <v-card-text class="grey lighten-3"> {{comment.comment}}</v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                         
                           <v-card-text  v-if="comments == ''" >No Comment</v-card-text>
                         
                        </v-expansion-panel>
     </v-layout>

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import addcomment from './addcomment.vue'
import firebase from 'firebase'
  export default {  
    props:['forum'],
    components: {addcomment:addcomment},
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        comments: '',
        authid: null
      }
    },
    methods: {
         open () {
        this.$router.push('/')
      },
      deletecomment(){
        console.log('press')
      }
    },
    created() {
      this.authid = firebase.auth().currentUser.uid
      this.$store.dispatch('getuser')
      firebase.database().ref('Comment/' + this.forum.id)
    .on('value', snapshot => {
     const val = []
    const obj = snapshot.val()
    for (let key in obj) {
        val.push({
        id: key,
        name: obj[key].postedBy.first_name,
        surname: obj[key].postedBy.surname,
        userid: obj[key].postedBy.userid,
        time: obj[key].last_Time,
        comment: obj[key].comment
       
      })
    }
    this.comments = val
    });
    }
  }
</script>

<style scoped>
 .home{
   cursor: pointer;
   color: rgb(11, 20, 153) !important;
 }
 .com{
   margin-bottom: 100px;
   
 }
 .head{
   border: 1px solid black;
 }
 .home2{
   background-color: rgb(190, 203, 211);
 }
</style>
