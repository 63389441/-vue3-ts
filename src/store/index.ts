import { defineStore } from 'pinia'
import getters from './getters'
import actions from './actions'
export const useStore = defineStore('main', {
  state: () => {
    return {
      name: '张三'
    }
  },
  getters,
  actions
})