import {createStore} from 'vuex'
import {VuexPersistence} from 'vuex-persist'

const vuexPersist = new VuexPersistence({
  storage: localStorage
})

export default createStore({
  state: {
    count: 0,
    memos: []
  },
  getters: {
    getCount: (state) => {
      return state.memos.length
    },
    getAll: (state) => {
      return state.memos
    },
    getMemo: (state) => (id) => {
      return state.memos.find(memo => memo.id === id)
    }
  },
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
    save (state, newMemo) {
      if (newMemo.id) {
        let edit = state.memos.find(memo => memo.id === newMemo.id)
        edit.title = newMemo.title
        edit.content = newMemo.content
      } else {
        newMemo.id = Date.now()
        state.memos.unshift(newMemo)
      }
    },
    delete (state, id) {
      state.memos = state.memos.filter(memo => memo.id !== id)
    }
  },
  actions: {},
  modules: {},
  plugins: [vuexPersist.plugin]
})
