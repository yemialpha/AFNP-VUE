<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" :overlay="false">
      <v-btn color="info" outline dark slot="activator">Add Merchandise</v-btn>
      <v-card>
        <v-toolbar dark color="info">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Add Merchandise</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-divider></v-divider>
          <form class="container">
    <v-text-field
      label="Product Name"
      v-model="postdata.name"
      required
    ></v-text-field>
     <v-text-field
      type="number"
      label="Price"
      v-model="postdata.price"
      required
    ></v-text-field>
    <v-text-field
      label="Details"
      v-model="postdata.detail"
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
          name: '',
          price: '',
          detail: ''
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
       this.$store.dispatch('merchandise', this.postdata)
       this.postdata.name = ''
       this.postdata.price = ''
       this.postdata.detail = ''
       this.img = ''

     }
    }
  }
</script>