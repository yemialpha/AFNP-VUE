<template>
<v-content>
  <div class="admin">
      <v-layout row>
          <v-flex xs2>
              <div class="side">
              <h3 class="dash">Dashborad</h3>
              <v-divider></v-divider>
              <br>
        <v-expansion-panel popout>
           <v-expansion-panel-content>
            <div slot="header">Membership Update</div>
            <v-card>
                <div class="text-xs-center">
                    <v-btn round color="info" dark>Activate New member</v-btn>
                </div>
              <v-card-text></v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
         <v-expansion-panel popout>
           <v-expansion-panel-content>
            <div slot="header">Payment Update</div>
            <v-card>
                 <div class="text-xs-center">
                    <v-btn round color="primary" dark>Rounded Button</v-btn>
                </div>
              <v-card-text></v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <br>
    <v-divider></v-divider>
              </div>
          </v-flex>
          <v-flex xs10>
               <div class="front">
                  <div class="pan">
                   <h3>Event&Update-Panel</h3>
                  </div>
              <v-layout wrap>
            <event></event>
              </v-layout>
              </div>
              <div class="front">
                  <div class="pan">
                   <h3>Front-Panel</h3>
                  </div>
              <v-layout wrap>
              <member></member>
              <aboutus></aboutus>
              <award></award>
              <conference></conference>
              <mission></mission>
              <partner></partner>
              <training></training>
              </v-layout>
              </div>
               <div class="front">
                  <div class="pan">
                   <h3>Resource-Panel</h3>
                  </div>
              <v-layout wrap>
              <publication></publication>
              <merchandise></merchandise>
              <library></library>
              </v-layout>
              </div>
          </v-flex>
      </v-layout>
  </div>
</v-content>
</template>
<script>
import member from './front/member.vue'
import aboutus from './front/aboutus.vue'
import award from './front/award.vue'
import conference from './front/conference.vue'
import mission from './front/mission.vue'
import partner from './front/partner.vue'
import training from './front/training.vue'
import event from './event/event.vue'
import publication from './resource/publication.vue'
import merchandise from './resource/merchandise.vue'
import library from './resource/library.vue'
export default {
  components:{member, aboutus, award, conference, mission, partner, training, event, publication, merchandise, library}
}
</script>

<style scoped>
.side{
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    background-color: rgb(45, 58, 82);
    color: black;
    min-height: 600px;
}
.dash{
    margin-left: 50px;
    margin-right: 50px;
}
.admin{
    min-height: 500px;
}
.front{
    padding: 20px;
}
.pan{
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 10px;
    border: 1px solid white;
    margin-bottom: 20px; 
    background-color: rgb(97, 106, 235);
    color: rgb(253, 250, 250);
}
</style>

