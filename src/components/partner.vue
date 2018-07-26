<template>
<div class="back">
  <div
    id="e3"
    style="max-width: 800px; margin: auto;"
    class="grey lighten-3"
  >
    <v-card>
      <v-container
        grid-list-lg
        class="back"
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="cyan" class="white--text">
              <v-container class="partner" fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">AlphaVision Technologies</div>
                     
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      src="https://firebasestorage.googleapis.com/v0/b/afpn-906a9.appspot.com/o/alphalogo.jpg?alt=media&token=dc6614c7-12e6-44ff-a390-909bb5809c65"
                      height="115px"
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
import full from './fullpartner.vue'
export default {
    components:{full:full}
}
</script>
<style scoped>
  .back{
    background-color: black;
    height: 100%;
  }
  .partner{
    border: 8px solid white;
  }
</style>

