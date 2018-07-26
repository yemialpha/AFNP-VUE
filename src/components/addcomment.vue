<template>
  <div>
     <v-tooltip top>
         <v-btn fab slot="activator" dark @click.native.stop="dialog = true" outline color="pink"> <v-icon>add</v-icon></v-btn>
                    <span>Add Comment</span>
                    </v-tooltip>
     <v-layout row>
    <v-dialog v-model="dialog" max-width="590">
      
      <v-card>
           <v-card-text>
        <v-subheader>Add Comment</v-subheader>
        <v-container fluid>
          <v-layout row>
            <v-flex xs12>
              <v-text-field
              v-model="comment"
                name="input-1"
                label="Comment..."
                textarea
              ></v-text-field>
               <v-tooltip top>
      <v-btn @click="addcomment" dark outline fab color="cyan" slot="activator">  <v-icon>add</v-icon></v-btn>
      <span> <v-icon>add</v-icon> Comment</span>
    </v-tooltip>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      </v-card>
      
    </v-dialog>
  </v-layout>
  </div>
</template>
<script>

 import  firebase from 'firebase'
  export default {
    props: ['forum'],
    data () {
      return {
        dialog: false,
        comment: '',
        postedBy: ''
      }
    },
    created() {
      this.user
    },
    computed: {
      user() {
      this.postedBy = this.$store.getters.user
      }
    },
    methods: {
       addcomment() {
           this.$store.commit('setloading', true)
         firebase.database().ref('Comment/' + this.forum.id ).push({
            comment: this.comment,
            postedBy: this.postedBy,
            last_Time: firebase.database.ServerValue.TIMESTAMP
        })
        .then( () =>{
            this.$store.commit('setloading', false)
          this.comment = ''
        })
      }
    }
  }
</script>