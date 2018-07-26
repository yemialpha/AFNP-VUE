<template>
  <v-layout row>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
 
      <v-btn fab outline slot="activator" class="cyan"><v-icon>edit</v-icon></v-btn>
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
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
         <h1>Edit Profile</h1>
    <v-layout wrap="" class="content">                    
    
<v-card>
     <v-card-title>
          <span class="headline">Membership Form</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
           <v-flex xs3 sm3>
                <v-select
                disabled
                  label="Title"
                  v-model="signup.title"
                  required
                  :items="['Mr', 'Mrs', 'Dr', 'Prof', 'Other']"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field disabled v-model="signup.surname" label="Surname"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field disabled v-model="signup.first_name" label="First Name" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field disabled v-model="signup.middle_name" label="Middle Name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field disabled type="number" v-model="signup.phone" label="Phone Number"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field disabled type="text" v-model="signup.Reg_No" label="Reg No"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field disabled v-model="signup.address" label="House Address" hint="example No 40 Akeem Salami street Ayobo Ipaja Lagos"
                  required
                ></v-text-field>
              </v-flex>
               <v-flex xs3 sm3>
                <v-select
                 v-model="signup.convicted"
                  label="convicted?"
                  hint="Have you ever been convicted of a crime?"
                  persistent-hint
                  required
                  :items="['No', 'Yes']"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field 
                v-model="signup.employer"
                 label="Employer/School"
                hint="Full name of employer/school"
                 required></v-text-field> 
              </v-flex>
                <v-flex xs12 sm6>
                <v-text-field disabled
                v-model="signup.recommender"
                 label="Recommender"
                hint="Recommender Membership code"
                type="number"
                 required></v-text-field> 
              </v-flex>
               <v-flex xs3 sm3>
                <v-select
                v-model="signup.apply"
                  label="I Apply For"
                  required
                  :items="['Student', 'Fellow', 'Active', 'Associate']"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                v-model="signup.expertise"
                  label="AREAS OF EXPERTISE"
                  hint="PLEASE IDENTIFY AREAS OF EXPERTISE"
                  persistent-hint
                  multiple
                  autocomplete
                  chips
                  :items="['General Forensic Disciplines',
                   'Bloodstain Pattern Identification',
                   'Crime Scene Examination',
                   'Digital Forensics', 'Footwear and Tire Track Examination ', 
                   'Forensic Document Examination',
                   'Forensic Photography and Electronic Digital Imaging',
                   'Latent Print Development', 'Fingerprint Analysis',
                   'DNA Analysis', 'Forensic Fire Investigation ']"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-btn outline color="info" >save</v-btn>
      </v-card>
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
  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        signup: { }
      }
    },
    methods: {
         open () {
        this.$router.push('/')
      }
    },
    computed: {
      user() {
        this.signup = this.$store.getters.user
      }
    },
    created() {
      this.user
    }
  }
</script>

<style scoped>
 .home{
   cursor: pointer;
   color: rgb(11, 20, 153) !important;
 }
</style>
