import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: null
  }),
  getters: {
    tokenVal: (state) => state.token,
    isAuth: (state) => Boolean(state.token)
  }
})