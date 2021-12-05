import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      changePosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
        state.loadedPosts[postIndex] = editedPost
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios.$get("/posts.json")
          .then(data => {
            const postsArray = []
            for (const key in data) {
              postsArray.push({...data[key], id: key })
            }
            vuexContext.commit('changePosts', postsArray)
          })
          .catch(e => context.error(e))
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          date: new this.$moment().format('DD.MM.YYYY HH:mm:ss')
        }
        return this.$axios
          .$post("/posts.json?=auth=" + vuexContext.state.token, createdPost)
          .then(result => {
            vuexContext.commit('addPost', {...createdPost, id: result.data.name })
          })
          .catch((e) => {
            console.log(e);
          });
      },
      editedPost(vuexContext, editedPost) {
        return this.$axios
          .$put("/posts/" + editedPost.id + ".json?=auth=" + vuexContext.state.token, {...editedPost, date: new this.$moment().format('DD.MM.YYYY HH:mm:ss') })
          .then(() => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch((e) => {
            context.error(e);
          });

      },
      authenticateUser(vuexContext, authData) {
        let authUrl =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
          process.env.authApiKey;
        if (!authData.isLogin) {
          authUrl =
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
            process.env.authApiKey;
        }
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          })
          .then((result) => {
            vuexContext.commit('setToken', result.idToken)
            localStorage.setItem('token', result.idToken)
            localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)
            Cookie.set('jwt', result.idToken);
            Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)
          })
          .catch((e) => console.log(e));
      },
      setLogoutTimer(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearToken')
        }, duration);
      },
      initAuth(vuexContext, req) {
        let token;
        let expirationDate;
        if (req) {
          if (!req.headers.cookie) {
            return
          }
          const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
          if (!jwtCookie) {
            return
          }
          expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate=')).split('=')[1]
          token = jwtCookie.split('=')[1]
        } else {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpiration')
        }
        if (new Date().getTime() > Number.parseInt(expirationDate) || !token) {
          vuexContext.dispatch('toLogout')
          return
        }
        vuexContext.commit('setToken', token)
      },
      toLogout(vuexContext) {
        vuexContext.commit('clearToken')
        Cookie.remove('jwt')
        Cookie.remove('expirationDate')
        if (process.client) {
          localStorage.removeItem('token')
          localStorage.removeItem('tokenExpiration')
        }
      },
      initPosts(vuexContext, posts) {
        vuexContext.commit('changePosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}

export default createStore
