<template>
<v-container>
     <v-card class="pay" height="400" v-if="!checkpayment">
        <div  style="margin: auto;">
     <v-card-title class="pink white--text">
          <span class="headline">Registration Fees N5,000</span>
        </v-card-title>
        <br>
      <v-card-text>Become a member of Association Forenic Practisional of Nigeria</v-card-text> 
    <div class="payment">
      <payment></payment>
    </div>
        </div>
  </v-card>
<v-card v-else>
     <v-card-title>
          <v-card-text class="headline">Membership Form</v-card-text>
        </v-card-title>
        <v-card-text>
          <v-container>
              <form @submit.prevent="register">
           <v-flex xs12>
                <v-select
                  label="Title"
                  v-model="signup.title"
                  required
                  :items="['Mr', 'Mrs', 'Dr', 'Prof', 'Other']"
                ></v-select>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="signup.surname" label="Surname" required  v-validate="'required'" name="surname"></v-text-field>
                <span>{{ errors.first('surname') }}</span>
              </v-flex>
            <v-flex xs12>
              <v-text-field  v-validate="'required'" name="name" v-model="signup.first_name" label="First Name" required></v-text-field>
               <span>{{ errors.first('name') }}</span>
            </v-flex>
              <v-flex xs12>
                <v-text-field v-validate="'required'" required name="middlename" v-model="signup.middle_name" label="Middle Name"></v-text-field>
                <span>{{ errors.first('middlename') }}</span>
              </v-flex>
              <v-flex xs12>
                <v-text-field type="number" required v-model="signup.phone" label="Phone Number"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="signup.address" label="House Address" hint="example No 40 Akeem Salami street Ayobo Ipaja Lagos"
                  required
                ></v-text-field>
              </v-flex>
               <v-flex xs12>
                <v-select
                 v-model="signup.convicted"
                  label="convicted?"
                  hint="Have you ever been convicted of a crime?"
                  persistent-hint
                  required
                  :items="['No', 'Yes']"
                ></v-select>
              </v-flex>
              <v-flex xs12 >
                <v-text-field 
                v-model="signup.employer"
                 label="Employer/School"
                hint="Full name of employer/school"
                 required></v-text-field> 
              </v-flex>
                <v-flex xs12>
                <v-text-field
                v-model="signup.recommender"
                 label="Recommender"
                hint="Recommender Membership code"
                type="text"
                 required></v-text-field> 
              </v-flex>
               <v-flex xs3>
                <v-select
                v-model="signup.apply"
                  label="I Apply For"
                  required
                  :items="['Student', 'Fellow', 'Active', 'Associate']"
                ></v-select>
              </v-flex>
              <v-flex xs12 >
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
              <v-flex xs12>
                <input required type="file" style="display:none" @change="loadImg"  ref="imageInput"> 
               <v-btn block outline color="info" @click='pickImage'>Add Image</v-btn>
              </v-flex>
                <v-card>
                    <img :src="img" height="300px">
                </v-card>

           <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="home">Close</v-btn>
          <input class="btn"  type="submit" value="Register">
          <v-spacer></v-spacer>
        </v-card-actions>

              </form>
          </v-container>
        </v-card-text>
      </v-card>
</v-container>
</template>
<script>
import payment from './formpayment.vue'
import firebase from 'firebase'
import swal from 'sweetalert'
  export default {
    components: {payment:payment},
    data () {
      return {
        img: '',
        signup: {
          title: '',
          surname: '',
          first_name: '',
          middle_name: '',
          phone: '',
          address: '',
          convicted: '',
          employer: '',
          recommender: '',
          apply: '',
          expertise: '',
          userid: '',
          Status: true,
          imgurl: '',
          email: '',
          Reg_No: 'AFPN/'
         }
      }
    },
  methods:{
        pickImage () {
         this.$refs.imageInput.click()
       },
          loadImg (e) {
        console.log(e.target.files[0])
        this.signup.imgurl = e.target.files[0]
          var fileReader = new FileReader()

          fileReader.readAsDataURL(e.target.files[0])

          fileReader.onload = (e) => {
              this.img = e.target.result
          }
       },
    async register () {
       this.$validator.validateAll()
       .then( () =>{
          let imgurl = ''
        let key = ''
       var d = new Date();
       var n = d.getFullYear();
       var m = d.getMonth();
       var a = d.getMinutes();
       this.$store.commit('setloading', true)
      this.signup.userid = firebase.auth().currentUser.uid 
      this.signup.email = firebase.auth().currentUser.email 
      var userid = firebase.auth().currentUser.uid 
     firebase.database().ref('Member/').once('value')
      .then( (data) => {
       var z = data.val()
        const val = []
         for (let id in z) {
        val.push({
            id: id,
        })
       }
       var x = val.length
        this.signup.Reg_No = `AFPN${n}${m}0${x}`
          const filename = this.signup.imgurl.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          var storageRef = firebase.storage().ref();
          var uploadTask = storageRef.child('Member/' + userid + '.' + ext).put(this.signup.imgurl);
            uploadTask.on('state_changed', (snapshot) =>{
              var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                  console.log('Upload is paused');
                  break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                  console.log('Upload is running');
                  break;
              }
            },(error)=> {
            }, ()=> {
              uploadTask.snapshot.ref.getDownloadURL().then( (downloadURL) => {
                 this.signup.imgurl = downloadURL
                 firebase.database().ref('Member/' + userid).set(this.signup)
                 .then( () =>{
                    swal({
                        title: "Congratulation Your Request is well receive",
                        text: "You clicked the button!",
                        icon: "success",
                        button: "Okay!",
                      });
                      this.$store.commit('setloading', false)
                     this.$router.push('/profile')
                 })
                console.log('File available at', downloadURL);
              })
            });
      })
       })
       
    },
    home () {
       this.$router.push('/')
    },
  },
    computed: {
      checkpayment() {
        return this.$store.getters.formpayment 
      }
    },
    mounted() {
      this.$store.dispatch('getuser')
      this.$store.dispatch('formpayment')
    }
  }
</script>
<style scoped>
.payment{
  float: 1;
  margin-top: 20px;
  border: 1px solid black;
  background-color: skyblue;
  width: 150px;
  padding: 10px;
  align-items: center;
}
span{
  color: red;
}
.pay{
  background-color: rgb(39, 116, 141);
  padding: 10px;
}
</style>
