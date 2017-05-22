export const moduleKeywords = {
    state: {
        inputKeyword: '',
        maxInputCharacters: 20,

        keywords: [],
        maxKeywordsCount: 3,       
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
        submitInputKeyword({dispatch, commit}) {
            commit('SUBMIT_INPUT_KEYWORD');
            dispatch('searchNewKeywords');
        },
        deleteKeyword({dispatch, commit}, word) {
            commit('DELETE_KEYWORD', word);
            dispatch('searchNewKeywords');            
        },
        deleteAllKeywords({dispatch, commit}) {
            commit('DELETE_ALL_KEYWORDS');
            dispatch('searchNewKeywords');            
        }        
    }      
}