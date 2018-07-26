<template>
  <v-content>
      <v-toolbar class="mt-4 mr-1 ml-1" color="teal">
            <span white>Video Conference</span>
          </v-toolbar>
          <v-layout wrap class="allvid">
          <div class="mt-2 mr-2 ml-2 mb-5">
          <video ref="me"></video>
          <p>you</p>
          </div>
           <person v-for="client in clients" :client="client" :key="client.peer.id"></person>
          <!--
            <div class="vid2 mt-2 mr-2 ml-2 mb-5">
          <video></video>
          <p>you</p>
          </div>
            <div class="vid2 mt-2 mr-2 ml-2 mb-5">
          <video></video>
          <p>you</p>
          </div>
            <div class="vid2 mt-2 mr-2 ml-2 mb-5">
          <video></video>
          <p>you</p>
          </div>
          -->
          </v-layout>
  </v-content>
</template>
<script>
import person from './person'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {person},
  data () {
      return{
          room: 'you'
      }
  },
   computed: {
      ...mapGetters({
        clients: 'getClients',
        state: 'getState'
      })
    },
        methods: {
      ...mapMutations([
        'removePeer',
        'addPeer'
      ])
    },
  mounted () {
     window.webrtc.joinRoom(this.room)

      window.webrtc.on('videoAdded', (video, peer) => {
        this.addPeer({ video, peer })
      })

      window.webrtc.on('videoRemoved', (video, peer) => {
        this.removePeer(peer)
      })

      window.webrtc.on('localStream', (stream) => {
        let attachMediaStream = require('attachmediastream')

        attachMediaStream(stream, this.$refs.me, {
          autoplay: true,
          mirror: true,
          muted: true
        })
      })
  }
}
</script>
<style scoped>
.vid{
    height: 50px;
    border: 1px solid black;
    background: gray;
}
.vid2{
    height: 150px;
    border: 1px solid black;
    background: gray;
}
.allvid{
  display: flex;
  justify-content: center; 
  min-height: 350px;

}
video{
  max-height:150px;
  border: 4px solid white;
}
</style>
