import firebase from 'firebase';

export default function (Vue) {
    let authenticatedUser = {}
    
    Vue.auth = {
        setToken (token) {
            localStorage.setItem('token', token)
           // localStorage.setItem('expiration', expiration)
        },
        getToken ()  {
            const token = firebase.auth().currentUser

            if (! token ) 
              return null
            else
              return token
        },
            destoryToken ()  {
                localStorage.removeItem('token')
              //  localStorage.removeItem('expiration')
            },

            isAuthenticated ()  {
                if(this.getToken())
                    return true
                else
                    return false
            },

            setAuthenticatedUser(data){
                authenticatedUser = data
            },

            getAuthenticatedUser(){
                return authenticatedUser
            }
    }
        Object.defineProperties(Vue.prototype, {
            $auth : {
                get () {
                    return Vue.auth;
                }
            }
        })
}