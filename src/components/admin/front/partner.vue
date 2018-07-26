<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" :overlay="false">
      <v-btn color="info" outline dark slot="activator">Partner</v-btn>
      <v-card>
        <v-toolbar dark color="info">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Partner</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
       
        <v-divider></v-divider>
          <form class="container">
    <v-text-field
     v-model="postdata.name"
      label="Organization Name"
      required
    ></v-text-field>
    <v-text-field
      label="Details"
      v-model="postdata.detail"
      multi-line
      required
    ></v-text-field>
    <input type="file" style="display:none" @change="loadImg"   ref="imageInput"> 
     <v-btn color="info" @click='pickImage'>Add Cover Image</v-btn>
     <br>
       <img :src="img" height="200px">
    <br>
    <hr>
    <v-btn class="sub" @click.prevent="sendata">submit</v-btn>
  </form>
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
        img: '',
        postdata: {
          name: '',
          detail: '',
          imgurl: ''
        }
      }
    },
    methods: {
      sendata () {
      this.$store.dispatch('partner', this.postdata)
      this.postdata.name = '',
      this.postdata.detail = '',
      this.img = ''
      },
       pickImage () {
         this.$refs.imageInput.click()
       },
          loadImg (e) {
        console.log(e.target.files[0])
        this.postdata.imgurl = e.target.files[0]
          var fileReader = new FileReader()

          fileReader.readAsDataURL(e.target.files[0])

          fileReader.onload = (e) => {
              this.img = e.target.result
          }
       },
    }
  }
</script>