<template>
  <v-tabs icons-and-text centered dark color="cyan">
    <v-tabs-slider color="yellow"></v-tabs-slider>
    <v-tab href="#tab-1">
        About Us
      <v-icon>group</v-icon>
    </v-tab>
    <v-tab href="#tab-2">
      Mission & Vision
      <v-icon>tachometer</v-icon>
    </v-tab>
    <v-tab href="#tab-3">
      Contact Us
      <v-icon>phone</v-icon>
    </v-tab>
    <v-tab-item
      id="tab-1"
    >
      <v-card flat>
        <v-card-text>
            First and foremost, <strong>AFPN</strong> is a collection of experts in the various fields of Forensic
             Science with common ideology.<br>
              The mission of the Association projects towards addressing the
              dearth and optimizing the potentials and practice of Forensic Science in Nigeria, with overall 
              objective of assisting the Courts of Law in the delivery of objective and reliable justice.<br>
               The Association hopes to achieve this through creation of awareness; propagation of the roles
                and activities of forensic experts in society in the areas of education and research; <br> providing
                 a platform for obtaining the services of qualified forensic experts in the country; <br>
             standardization and institutionalization of the profession and its codes of conduct within the country.

             <h3>OBJECTIVES OF AFPN</h3>
         <ol>
             <li>To create awareness to the general public on forensic science and its roles in society. </li>
             <li>To encourage the dissemination of professional information within the field of forensic science and to discuss problems of common interest</li>
            <li>To foster cooperation among forensic scientists.</li>
            <li>To stimulate research and development of new techniques within the field.</li>
            <li>To protect the interest and image of all forensic practitioners.</li>
         </ol>
        </v-card-text>
      </v-card>
    </v-tab-item>
     <v-tab-item
      id="tab-2"
    >
     <v-card>
         <v-card-text>
             'The Association of Forensic Professionals of Nigeria is a collection of experts in the various
              fields of forensic science with common ideology. The establishment of the association is geared
               towards addressing the dearth and optimizing the potentials of the field and practice of forensic
                science in Nigeria. This is hope to be achieved through creation of awareness, propagation of the
                 role and activities of forensic experts in society in the area of education and research and providing 
                 a platform for obtaining the services of qualified forensic experts in the country.t is the hope of the
                  association to provide services to law enforcement agencies and other relevant government establishments 
                  in the way of collaboration. Having the right information at the right time from qualified experts in our 
                  doorsteps will bring about sanity in the justice system, hence issues relating to wrong conviction of innocent 
                  persons, delay in the dispensation of justice, resolved cases as a result of insufficient or lack of evidence 
                  would consequently be address of. In a nut shell, the Association aims at providing assistance to the justice
                   delivery system. To assist in the building of the prestige of the country’s justice system, the association 
                   can help to provide services in the resolution of cold cases. Furthermore, and importantly, it is one of the objectives
                    of the association to foster cooperation among forensic scientists, protect the image of the profession in the country by raising the standards of the profession to world standard; thereby enhancing and building trust in the justice system.COMPOSITION OF THE ASSOCIATION Interestingly, the association has members with expertise in different areas of forensics which include: forensic document examination, crime scene management, and fingerprint identification, digital forensic and forensic photography.
              It is also noteworthy that members of the association are drawn from both the public and private sectors.
         </v-card-text>
     </v-card>
    </v-tab-item>
     <v-tab-item
      id="tab-3"
    >
      <v-card >
                    <v-card-text>
                         <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                              v-model="message.name"
                              :rules="nameRules"
                              :counter="25"
                              label="Name"
                              required
                            ></v-text-field>
                             <v-text-field
                              v-model="message.Organization"
                              :rules="nameRules"
                              label="Organization"
                              required
                            ></v-text-field>
                            <v-text-field
                              v-model="message.email"
                              :rules="emailRules"
                              label="E-mail"
                              required
                            ></v-text-field>
                             <v-layout row>
                                <v-text-field
                                v-model="message.message"
                                name="input-7-1"
                                label="Your Message"
                                multi-line
                                ></v-text-field>
                            </v-layout>
                            <v-spacer></v-spacer>
                            <v-btn v-if="message.email == '' || message.message == ''" disabled outline @click="sendMessage" color="info">submit</v-btn>
                            <v-btn v-else name='submit' outline @click="sendMessage" color="info">submit</v-btn>
                            <v-btn @click="clear">clear</v-btn>
                          </v-form>
                    </v-card-text>
                  </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import firebase from'firebase'
import swal from 'sweetalert'
  export default {
    data () {
      return {
         valid: true,
          nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 25) || 'Name must be less than 10 characters'
          ],
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
          ],
        message:{
          name: null,
          Organization: '',
          email: '',
          message: '',
        }
      }
    },
    methods : {
  clear () {
        this.$refs.form.reset()
      },
      sendMessage(){
        this.$store.commit('setloading', true)
         firebase.database().ref('contactUs').push(this.message)
         .then( (data) => {
           this.$store.commit('setloading', false)
           this.clear()
            swal({
          title: "Your Message is well receive we will get back to you as soon as possible Thanks",
          text: "You clicked the button!",
          icon: "success",
          button: "Okay!",
        })
         })
         .catch( (error) => {
           console.log(error)
         })
         
      } 
    }
  }
</script>