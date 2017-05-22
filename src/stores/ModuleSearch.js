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
        },
        SEARCH_RESULT_PAGING(state, pageNum) {
            state.searchResult.pagination.cur = pageNum;
        }
    },
    actions: {
        searchResultPaging({dispatch, commit}, pageNum) {
            commit('SEARCH_RESULT_PAGING', pageNum);
            dispatch('search');
        },
        searchNewKeywords({dispatch, commit, state, rootState}) {
            dispatch('searchResultPaging', 1);
        },
        search({dispatch, commit, state, rootState}) {
            commit('UPDATE_LOADING_STATE', true);
            
            let keywords = rootState.moduleKeywords.keywords;
            let page = state.searchResult.pagination.cur;

            fetch('/api/search/', {
                method: 'post',
                headers: {
                    // 'Content-Type': 'application/x-www-form-urlencoded'
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    keywords,
                    page
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