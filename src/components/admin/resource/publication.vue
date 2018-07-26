<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" :overlay="false">
      <v-btn color="info" outline dark slot="activator">Add Publication</v-btn>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Publication</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-divider></v-divider>
          <form class="container">
    <v-text-field
      label="Title"
      v-model="postdata.title"
      required
    ></v-text-field>
     <v-text-field
      label="Writer"
      v-model="postdata.writer"
      required
    ></v-text-field>
    <v-text-field
      label="Content"
      v-model="postdata.content"
      multi-line
      required
    ></v-text-field>
    <input type="file" style="display:none" @change="loadImg"  ref="imageInput"> 
     <v-btn color="info" @click='pickImage'>Add Cover Image</v-btn>
     <br>
      <v-layout wrap>
       <v-card>
           <img :src="img" height="300px">
       </v-card>
     </v-layout>
    <br>
    <hr>
    <v-btn class="sub" @click="sendata">submit</v-btn>
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
          title: '',
          writer: '',
          content: ''
        }
      }
    },
      methods: {
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
     sendata () {
       this.$store.dispatch('publication', this.postdata)
       this.postdata.title = ''
       this.postdata.content = ''
       this.postdata.writer = ''
       this.img = ''

     }
    }
  }
</script>