export const moduleUI = {
    state: {
        loading: false,
        errorHappened: false, 
        selectedTabName: 'latest',

        modalErrorIsShow: false
    },
    mutations: {
        UPDATE_LOADING_STATE(state, val) {
            state.loading = val;
        },
        SELECT_TAB(state, tabName) {
            state.selectedTabName = tabName;
        },
        TOGGLE_MODEAL_ERROR(state, val) {
            state.modalErrorIsShow = val;
        }
    },
    actions: {
        selectTab({commit}, name) {
            commit('SELECT_TAB', name);
        },
        showModalError({commit}) {
            commit('TOGGLE_MODEAL_ERROR', true);
        },
        hideModalError({commit}) {
            commit('TOGGLE_MODEAL_ERROR', false);            
        }        
    }
}