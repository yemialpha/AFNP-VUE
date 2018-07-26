<template>
  <v-container fluid>
     <v-parallax height="350" src= "https://firebasestorage.googleapis.com/v0/b/afpn-906a9.appspot.com/o/ThinkstockPhotos-457091621-1100x300.jpg?alt=media&token=e142cfea-5a89-4ddd-840e-c1429f940120"
>
      <v-layout class="banner ban" column align-center>
          <h1  class="black--text ban1 "><strong> Association of Forensic Professionals of Nigeria</strong></h1>
           <Menu class="homeview" />
              <router-link to="/becomeamember">
              <v-menu
              v-if="!user"
                open-on-hover
                origin="center center"
                transition="slide-x-transition"
                bottom
              >
            <v-chip color="white hov" text-color="info" slot="activator">
                 <v-icon left>account_circle</v-icon>
              Become a Member
            </v-chip>
             </v-menu>
              </router-link>
             <tips class="tip"/>
        </v-layout>
     </v-parallax>
     <v-divider></v-divider>
       <v-flex xs12>
      <About />
       </v-flex>
       <v-divider></v-divider>
  <v-carousel hide-controls>
      <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i">
    
      </v-carousel-item>
    </v-carousel>
    <v-divider></v-divider>
    <br>
      <v-layout class="addresstab">
      <v-flex xs4>
        <v-card-text class="office">
          <h4>Our Office Address</h4>
          <p>Suite F10,<br>
           Pathfield Mall,<br>
           4th Avenue, Gwarimpa,<br>
            Abuja, FCT Nigeria
          </p>
          <p>
            Tel: +234(0) 92 921 159,
            +234(0) 708 888 4488
          </p>
        </v-card-text>
          </v-flex>
      <v-flex xs4>
        <v-card-text class="office">
          <h4>Recent Event</h4>
          <v-layout>
               <img src="">
               <p>recent post</p>
          </v-layout>
        </v-card-text>
      </v-flex>
      <v-flex xs4>
        <v-card-text class="office">
          <h4>Our Objective</h4>
          <ul>
            <li>To create awareness to the general public on forensic science and its roles in society.</li>
            <li>To encourage the dissemination of professional information within the field of forensic science and to discuss problems of common interest.</li>
            <li>To foster cooperation among forensic scientists.</li>
            <li>To stimulate research and development of new techniques within the field.</li>
            <li>To protect the interest and image of all forensic practitioners.</li>
          </ul>
        </v-card-text>
      </v-flex>
      </v-layout>
  </v-container>
</template>
<script>
import Menu from './Homeveiw.vue'
import About from './About.vue'
import tips from './tips.vue'

  export default {
    components:{ Menu: Menu, About:About, tips:tips},
    data () {
      return {
        items: [
          {
            src: "https://firebasestorage.googleapis.com/v0/b/afpn-906a9.appspot.com/o/slide1.jpg?alt=media&token=17847da1-4093-49c4-8193-c22bb5815881"
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/afpn-906a9.appspot.com/o/slide2.jpg?alt=media&token=808742a8-ecb5-4296-ab82-94330d231889'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/afpn-906a9.appspot.com/o/slide3.jpg?alt=media&token=d2d960a7-d1b2-40b7-af7b-0137b17a4fbb'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/afpn-906a9.appspot.com/o/slide4.jpg?alt=media&token=1619b050-f8c3-4415-9008-aab58a4d02aa'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/afpn-906a9.appspot.com/o/slide5.jpg?alt=media&token=496f6306-910c-44ce-876e-63042714641b'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/afpn-906a9.appspot.com/o/slide6.JPG?alt=media&token=bf39f57b-9729-43af-b636-2dd2b9aafc87'
          }
        ]
      }
    },
     computed:{
        user() {
        return this.$store.getters.user
      }
     }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.addresstab{
  background-color: gray;
  color: #181818;
}
.banner{
  margin-top: 20px;
  color: #181818;
}
.hov :hover{
  cursor: pointer;
}
.tip :hover{
  cursor: pointer;
}
 @media screen and (max-width: 480px) {
    .homeview{
        display: none;
    }
    .ban{
      justify-content: center;
      align-items: center;
    }
    .ban1{
      margin-top: 30px;
      align-self: center;
      justify-content: center;

    }
}
</style>
