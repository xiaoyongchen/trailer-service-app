// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'

/**
 * Simulate a login
 */
function apiLogin(a: string, p: string) {
  if (p === '123456') return Promise.resolve({ name: a, isAdmin: false })
  return Promise.reject(new Error('invalid credentials'))
}

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => ({
    name: 'admin',
    isAdmin: true,
  }),

  actions: {
    logout() {
      this.$patch({ name: '', isAdmin: false })

      // we could do other stuff like redirecting the user
    },

    /**
     * Attempt to login a user
     */
    async login(name: string, password: string) {
      const userData = await apiLogin(name, password)

      this.$patch({
        ...userData,
      })
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
