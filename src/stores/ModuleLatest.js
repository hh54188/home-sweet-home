export const moduleLatest = {
    state: {
        latestResult: {
            data: [
                {
                    fav: true,
                    id: '1',
                    title: '这是测试链接',
                    link: 'http://baidu.com'
                },
                {
                    fav: false,
                    id: '2',                    
                    title: '这是测试链接',
                    link: 'http://baidu.com'
                },
                {
                    fav: false,
                    id: '3',                    
                    title: '这是测试链接',
                    link: 'http://baidu.com'
                }
            ],
            pagination: {
                total: 15,
                cur: 10
            }
        }        
    },
    mutations: {
        FILL_LATEST_RESULT(state, result) {
            state.latestResult = result;
        },
        LATEST_RESULT_PAGING(state, pageNum) {
            state.latestResult.pagination.cur = pageNum;
        }
    },
    actions: {
        latestResultPaging({dispatch, commit}, pageNum) {
            commit('LATEST_RESULT_PAGING', pageNum);
            dispatch('refreshLatest');
        },
        refreshLatest({dispatch, commit, state}) {
            commit('UPDATE_LOADING_STATE', true);

            let pageNum = state.latestResult.pagination.cur;
            
            fetch('/api/latest?page=' + pageNum, {
                method: 'get',
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
                commit('FILL_LATEST_RESULT', result);
                dispatch('selectTab', 'latest');
            });
        }
    }
}