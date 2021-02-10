import {
  ADD_CHAT_ITEM,
  CLEAR_CHAT,
} from '../mutations'

const state = {
  chatItems: [],
}

const mutations = {
  [ADD_CHAT_ITEM] (state, message) {
    const items = [].concat(state.chatItems).concat([message])
    state.chatItems = items
  },
  [CLEAR_CHAT](state) {
    state.chatItems = []
  },
}

export default {
  namespace: true,
  state,
  mutations,
}