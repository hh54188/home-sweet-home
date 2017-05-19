import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loading: false,

        inputKeyword: '',
        maxInputCharacters: 20,

        keywords: [],
        maxKeywordsCount: 3,

        latestResult: {
            data: [
                {
                    fav: true,
                    title: '这是测试链接',
                    link: 'http://baidu.com'
                },
                {
                    fav: false,
                    title: '这是测试链接',
                    link: 'http://baidu.com'
                },
                {
                    fav: false,
                    title: '这是测试链接',
                    link: 'http://baidu.com'
                }
            ],
            pagination: {
                total: 15,
                cur: 10
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
        UPDATE_LOADING_STATE(state, val) {
            state.loading = val;
        },
        UPDATE_INPUT_KEYWORD(state, text) {
            state.inputKeyword = text;
        },
        SUBMIT_INPUT_KEYWORD(state) {
            if (state.keywords.indexOf(state.inputKeyword) > -1) {
                return;
            }
            state.keywords.push(state.inputKeyword);
            state.inputKeyword = '';
        },
        DELETE_KEYWORD(state, word) {
            state.keywords.splice(state.keywords.indexOf(word), 1);
        },
        DELETE_ALL_KEYWORDS(state) {
            state.keywords = [];
        }
    },
    actions: {
        fetch({state, commit}) {
            commit('UPDATE_LOADING_STATE', true);
            $.ajax({
                url: '/api/search',
                method: 'get',
                dataType: 'json',
                timeout: 1000 * 2,
                data: {
                    keywords: state.keywords,
                    page: 1
                },
                success: function (data, textStatus, jqXHR) {

                },
                error: function (jqXHR, textStatus, errorThrown) {

                },
                complete: function (jqXHR, textStatus) {
                    commit('UPDATE_LOADING_STATE', false);                    
                }

            })
        },
        updateInputKeyword ({commit}, text) {
            commit('UPDATE_INPUT_KEYWORD', text);
        },
        submitInputKeyword({dispatch, commit}) {
            commit('SUBMIT_INPUT_KEYWORD');
            dispatch('fetch');
        },
        deleteKeyword({commit}, word) {
            commit('DELETE_KEYWORD', word);
        },
        deleteAllKeywords({commit}) {
            commit('DELETE_ALL_KEYWORDS');
        }
    },
    modules: {

    },
    getters: {
        state: state => state
    }
})