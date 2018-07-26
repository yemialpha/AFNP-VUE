import firebase from 'firebase';
const state = {
    User : null,

    formpayment: false,

    year: null
}
const getters = {
    user (state) {
          return state.User
      },
    formpayment(state) {
        return state.formpayment
    },
    getyear(state) {
        return state.year
    }
}
const mutations = {
    getUser(state, payload){
        state.User = payload
    },
    setFormpayment(state, payload) {
        state.formpayment = payload
    },

    addyear(state, payload) {
        state.year = payload
    },
    signout(state, payload){
        state.User = payload
    }
}


const actions = {
    getuser({commit}) {
        this.commit('setloading', true)
        const userId = firebase.auth().currentUser.uid;
        firebase.database().ref('Member/' + userId).once('value')
        .then(data => {
            this.commit('setloading', false)
          const val = data.val()
          console.log(val)
          if(val == null){
            this.commit('getUser', null) 
          }else{
              this.commit('getUser', val)
          }
        })
        .catch(error => {
          console.log(error)
      //  Actions.createcard()
        })
    },
    addUser({commit}, payload) {
        this.commit('setloading', true)
        const userId = firebase.auth().currentUser.uid;
        firebase.database().ref('FormRegistrationPayment/' + userId ).set({
            Register: true,
            last_Time: firebase.database.ServerValue.TIMESTAMP
        })
        this.commit('setFormpayment', true)
        this.commit('setloading', false)         
    },
    formpayment({commit}) {
      this.commit('setloading', true) 
      const userId = firebase.auth().currentUser.uid;
      firebase.database().ref('FormRegistrationPayment/' + userId).once('value')
      .then(data => {
          this.commit('setloading', false)
        const val = data.val()
        console.log(val)
        if(val == null){
          this.commit('setFormpayment', null) 
        }else{
            this.commit('setFormpayment', true)
        }
      })
      .catch(error => {
        console.log(error)
    //  Actions.createcard()
      })
    }
}


export default {
    state,
    mutations,
    getters,
    actions
  }