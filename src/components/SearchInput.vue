<template>
    <form @submit="submitInputKeyword">
        <div class="ui action input">
            <input v-model="keyword" @input="updateInputKeyword" type="text" value="">
            <button :disabled="enableSearch" type="submit" class="ui teal right labeled icon button primary">
                <i class="search icon"></i>
                <span>输入搜索关键词</span>
            </button>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'SearchInput',
        methods: {
            updateInputKeyword(event) {
                this.$store.dispatch('updateInputKeyword', event.target.value);
            },
            submitInputKeyword(event) {
                this.$store.dispatch('submitInputKeyword');
                event.preventDefault();
            }
        },
        computed: {
            keyword() {
                let state = this.$store.getters.state;
                return state.inputKeyword;        
            },
            enableSearch() {
                let state = this.$store.getters.state;
                if (!state.inputKeyword || state.inputKeyword.length >= state.maxInputCharacters) {
                    return true;
                }
                return false;
            }
        }
    }
</script>