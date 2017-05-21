export const moduleUI = {
    state: {
        loading: false,
        errorHappened: false, 
        selectedTabName: 'latest'
    },
    mutations: {
        UPDATE_LOADING_STATE(state, val) {
            state.loading = val;
        },
        SELECT_TAB(state, tabName) {
            state.selectedTabName = tabName;
        }
    },
    actions: {
        selectTab({commit}, name) {
            commit('SELECT_TAB', name);
        }
    }
}