<template>
  <div class="person">
    <div class="person__video" ref="person"></div>
    <div class="person__name">
      {{ client.peer.nick }}
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'

  export default {
    props: ['client'],
 
    mounted () {
      this.$refs.person.appendChild(this.client.video)
    }
  }
</script>
