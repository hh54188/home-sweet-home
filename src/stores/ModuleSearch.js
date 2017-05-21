export const moduleSearch = {
    state: {
        searchResult: {
            data: [],
            pagination: {
                total: 10,
                cur: 1
            }            
        }
    },
    mutations: {
        FILL_SEARCH_RESULT(state, result) {
            state.searchResult = result;
        }
    },
    actions: {
        search({dispatch, commit, state, rootState}, pageNum) {
            commit('UPDATE_LOADING_STATE', true);
            
            let keywords = rootState.moduleKeywords.keywords;
            pageNum = pageNum || state.searchResult.pagination.cur || 1;

            fetch('/api/search/', {
                method: 'post',
                body: JSON.stringify({
                    "keywords": keywords,
                    pageNum
                })
            }).then((response) => {
                commit('UPDATE_LOADING_STATE', false);
                if (response && response.status !== 200) {
                    return;
                }
                return response.json();
            }).then((result) => {
                if (!result) {
                    return;
                }
                result.data = result.data.map((info) => {
                    info.fav = false;
                    return info;
                });
                commit('FILL_SEARCH_RESULT', result);
                dispatch('selectTab', 'search');
            });
        }
    }
}