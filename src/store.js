import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        inputKeyword: '',
        maxInputCharacters: 20,

        keywords: [],
        maxKeywordsCount: 10,

        latestResult: {
            data: [],
            pagination: {
                total: 10,
                cur: 1
            }
        },
        searchResult: {
            data: [],
            pagination: {
                total: 10,
                cur: 1
            }            
        }
    },
    mutations: {
        UPDATE_INPUT_KEYWORD(state, text) {
            state.inputKeyword = text;
        },
        SUBMIT_INPUT_KEYWORD(state) {
            state.keywords.push(state.inputKeyword);
            state.inputKeyword = '';
        }
    },
    actions: {
        updateInputKeyword ({commit}, text) {
            commit('UPDATE_INPUT_KEYWORD', text);
        },
        submitInputKeyword({commit}) {
            commit('SUBMIT_INPUT_KEYWORD');
        }
    },
    modules: {

    },
    getters: {
        state: state => state
    }
})