import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        inputKeyword: '',
        maxInputCharacters: 20,

        keywords: [],
        maxKeywordsCount: 3,

        latestResult: {
            data: [
                {
                    fav: false,
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
        updateInputKeyword ({commit}, text) {
            commit('UPDATE_INPUT_KEYWORD', text);
        },
        submitInputKeyword({commit}) {
            commit('SUBMIT_INPUT_KEYWORD');
            // 弹出加载框
            // fetch 搜索结果
                // - 取消加载框
                // - 成功：填充搜索结果
                // - 失败（超时）：提示用户
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