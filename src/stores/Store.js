import Vue from 'vue'
import Vuex from 'vuex'

import {moduleSearch} from './ModuleSearch.js'
import {moduleKeywords} from './ModuleKeywords.js'
import {moduleLatest} from './ModuleLatest.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loading: false,
        errorHappened: true, 
    },
    mutations: {
        UPDATE_LOADING_STATE(state, val) {
            state.loading = val;
        }
    },
    actions: {

    },
    modules: {
        moduleSearch,
        moduleKeywords,
        moduleLatest
    },
    getters: {
        loading: state => state.loading,
        errorHappened: state => state.errorHappened,

        searchResult: state => state.moduleSearch.searchResult,
        latestResult: state => state.moduleLatest.latestResult,

        inputKeyword: state => state.moduleKeywords.inputKeyword,
        maxInputCharacters: state => state.moduleKeywords.maxInputCharacters,
        keywords: state => state.moduleKeywords.keywords,
        maxKeywordsCount: state => state.moduleKeywords.maxKeywordsCount
    }
})