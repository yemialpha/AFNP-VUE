<template>
<div class="bak">
  <div
    id="e3"
    style="max-width: 800px; margin: auto;"
    class="grey lighten-3"
  >
    <v-card class="bak">
      <v-container
        style="min-height: 0;"
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12 class="mag">
            <v-card color="cyan darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">Forensic Education</div>
                      <div>Churchill B. Torru</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      src="https://firebasestorage.googleapis.com/v0/b/afpn-906a9.appspot.com/o/hqdefault.jpg?alt=media&token=4e2b85c0-837f-4826-95a4-fb28fc8d5850"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
                 <v-card-actions>
                     <full/>
              </v-card-actions>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card color="purple" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">FORENSIC HISTORY</div>
                      <div>By : Olayiwola Yemi</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      src="https://firebasestorage.googleapis.com/v0/b/afpn-906a9.appspot.com/o/download%20(1).jpg?alt=media&token=91bfc972-0c9e-4c59-8d3e-ca134682af38"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
                 <v-card-actions>
                <full/>
              </v-card-actions>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</div>
</template>
<script>
import full from './fullwriteup.vue'
export default {
    components:{full:full}
}
</script>

<style scoped>
 .bak{
   background-color: #181818;
   height: 100%;
 }
 .mag{
   margin-top: 20px;
 }
</style>

