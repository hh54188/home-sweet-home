import Vue from 'vue'
import Vuex from 'vuex'
import { mapGetters } from 'vuex'

import {moduleSearch} from './ModuleSearch.js'
import {moduleKeywords} from './ModuleKeywords.js'
import {moduleLatest} from './ModuleLatest.js'
import {moduleUI} from './ModuleUI.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
 
    },
    mutations: {

    },
    actions: {

    },
    modules: {
        moduleSearch,
        moduleKeywords,
        moduleLatest,
        moduleUI
    },
    getters: {
        loading: state => state.moduleUI.loading,
        errorHappened: state => state.moduleUI.errorHappened,
        selectedTabName: state => state.moduleUI.selectedTabName,
        modalErrorIsShow: state => state.moduleUI.modalErrorIsShow,

        searchResult: state => state.moduleSearch.searchResult,
        latestResult: state => state.moduleLatest.latestResult,

        inputKeyword: state => state.moduleKeywords.inputKeyword,
        maxInputCharacters: state => state.moduleKeywords.maxInputCharacters,
        keywords: state => state.moduleKeywords.keywords,
        maxKeywordsCount: state => state.moduleKeywords.maxKeywordsCount
    }
})