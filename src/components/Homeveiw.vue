<template>
    <div class="pan">
         <v-menu
                open-on-hover
                origin="center center"
                transition="slide-x-transition"
                bottom
              >
            <v-chip color="primary hov" text-color="white" slot="activator">
                 <v-icon left>account_circle</v-icon>
              Membership
            </v-chip>
              <v-list class="liste">
                  <v-list-tile-content class="listm">
                   <Member :getmembershiptype = "getmembershiptype" v-for="getmembershiptype in getmembershiptypes" :key="getmembershiptype.id" />
                  </v-list-tile-content>
                </v-list>
             </v-menu>
         
              <v-menu
                open-on-hover
                origin="center center"
                transition="slide-x-transition"
                bottom
              >
            <v-chip color="info hov" text-color="white" slot="activator">
                 <v-icon left>folder</v-icon>
              Tarining
            </v-chip>
             <v-list class="liste">
                    <v-list-tile-content class="listm">
                    <Training :gettraning = "gettraning" v-for="gettraning in gettranings" :key="gettraning.id"/> 
                  </v-list-tile-content>
                </v-list>
             </v-menu>
          
              <v-menu
                open-on-hover
                origin="center center"
                transition="slide-x-transition"
                bottom
              >
            <v-chip color="orange hov" text-color="white" slot="activator">
                 <v-icon left>work</v-icon>
              Conference
            </v-chip>
             <v-list class="liste">
                    <v-list-tile-content class="listm">
                    •	Future Conference  
                  </v-list-tile-content>
                   <v-list-tile-content class="listm">
                    •	Past Conference  
                  </v-list-tile-content>
                  <v-list-tile-content class="listm">
                    •	Future Workshop  
                  </v-list-tile-content>
                  <v-list-tile-content class="listm">
                    •	Past Workshop  
                  </v-list-tile-content>
                </v-list>
             </v-menu>
              <router-link to="/partner">
              <v-menu
                open-on-hover
                origin="center center"
                transition="slide-x-transition"
                bottom
              >
            <v-chip color="grey hov" text-color="white" slot="activator">
                 <v-icon left>group</v-icon>
              Partner
            </v-chip>
             </v-menu>
              </router-link>
              <v-menu
                open-on-hover
                origin="center center"
                transition="slide-x-transition"
                bottom
              >
            <v-chip color="black hov" text-color="white" slot="activator">
                 <v-icon left>star</v-icon>
              Awards
            </v-chip>
             <v-list class="liste">
                <v-list-tile-content class="listm">
                  <Awards :getaward="getawrd" v-for="getawrd in getawrds" :key="getawrd.id"/>  
                  </v-list-tile-content>     
                </v-list>
             </v-menu>
              <v-menu
                open-on-hover
                origin="center center"
                transition="slide-x-transition"
                bottom
              >
            <v-chip color="indigo hov" text-color="white" slot="activator">
                 <v-icon left>work</v-icon>
              Resource
            </v-chip>
             <v-list class="liste">
               <router-link to="/writeup">
                  <v-list-tile-content class="listm">
                   Nigeria CSI
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
                open-on-hover
                origin="center center"
                transition="slide-x-transition"
                bottom
              >
            <v-chip color="info hov" text-color="white" slot="activator">
                 <v-icon left>comments</v-icon>
              Community Forum
            </v-chip>
             </v-menu>
              </router-link>
              <router-link to="/profile">
              <v-menu
                open-on-hover
                origin="center center"
                transition="slide-x-transition"
                bottom
              >
            <v-chip color="success hov" text-color="white" slot="activator">
                 <v-icon left>map</v-icon>
              Member Portal
            </v-chip>
            
             </v-menu>
              </router-link>
    </div>
</template>
<script>
import Member from './membership.vue'
import Training from './traing.vue'
import Awards from './awards.vue'
export default {
        components:{Member:Member, Training:Training, Awards: Awards},

        computed: {
          getmembershiptypes() {
            return this.$store.getters.getmembershiptype
          },
             gettranings() {
            return this.$store.getters.gettraning
          },
             getawrds() {
            return this.$store.getters.getawards
          }
        }
    }

</script>

<style scoped>
.liste{
  background-color: rgb(99, 131, 131);
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
  color: white;
}
.hov :hover{
  cursor: pointer;
}
.listm{

   cursor: pointer;
   margin-bottom: 5px;
}
.pan{
 margin-top: 40px;
}
 a{
   text-decoration-line: none;
   color: white;
 }

</style>
