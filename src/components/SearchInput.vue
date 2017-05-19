<template>
    <form @submit="submitInputKeyword">
        <div class="ui action input">
            <input minlength="1" :maxlength="this.$store.getters.state.maxInputCharacters" v-model="keyword" @input="updateInputKeyword" type="text" value="">
            <button @click="submitInputKeyword" :disabled="disableSearch" type="button" class="ui teal right labeled icon button primary">
                <i class="search icon"></i>
                <span>输入搜索关键词</span>
            </button>
        </div>
        <KeywordRemainCharacters></KeywordRemainCharacters>
    </form>
</template>

<script>
    import KeywordRemainCharacters from './KeywordRemainCharacters.vue';

    export default {
        name: 'SearchInput',
        components: {
            KeywordRemainCharacters
        },
        methods: {
            updateInputKeyword(event) {
                let state = this.$store.getters.state;
                let maxInputCharacters = state.maxInputCharacters;
                let word = event.target.value.slice(0, maxInputCharacters);
                
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
            disableSearch() {
                let state = this.$store.getters.state;
                if (!state.inputKeyword 
                    || state.inputKeyword.length >= state.maxInputCharacters
                    || state.keywords.length >= state.maxKeywordsCount) {
                    return true;
                }
                return false;
            }
        }
    }
</script>