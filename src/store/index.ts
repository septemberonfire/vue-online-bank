import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null
  }),
  getters: {
    tokenVal: (state) => state.currentUser,
    isAuth: (state) => Boolean(state.currentUser)
  }
})