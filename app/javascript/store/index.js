import Vue from 'vue'
import Vuex from 'vuex'

import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formState: {},
    lists: []
  },
  mutations: {
    UPDATE_LIST (state, payload) {
      state.lists = _.map(state.lists, (list) => {
        return list.id === payload.id ? payload : list;
      })
       console.log(state.lists);
    },
    CLOSE_FORM (state) {
      state.formState = {}
    },
    ADD_LIST (state, payload) {
      this.state.lists.push(payload)
    },
    SET_LISTS (state, payload) {
      this.state.lists = payload
    },
    NEW_LIST (state) {
      state.formState = {
        name: 'Add list',
        path: 'lists.json',
        action: 'POST',
        active: true
      }
    },
    EDIT_LIST (state, payload) {
      state.formState = {
        name: 'Edit list',
        path: `lists/${payload.id}.json`,
        action: 'PUT',
        active: true,
        title: payload.name
      }
    }
  },
  actions: {
    setLists ({ commit }, payload) {
      commit('SET_LISTS', payload)
    },
    addList ({ commit }, payload) {
      commit('ADD_LIST', payload)
    },
    closeForm ({ commit }) {
      commit('CLOSE_FORM')
    },
    newList ({ commit }) {
      commit('NEW_LIST')
    },
    editList ({ commit }, payload) {
      commit('EDIT_LIST', payload)
    },
    updateList ({ commit }, payload) {
      commit('UPDATE_LIST', payload)
    }
  },
  modules: {
  }
})
