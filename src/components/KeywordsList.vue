<template>
    <div v-show="showList" class="ui segment">
        <div class="ui labels">
            <a class="ui label blue">
                <span>还能输入{{remainWordsCount}}个关键词</span>
            </a>        
            <a v-for="keyword in this.$store.getters.keywords" @click="deleteKeyword(keyword)"  class="ui label">
                <span>{{keyword}}</span>
                <i :data-word="keyword" class="icon close"></i>
            </a>
            <a @click="deleteAllKeywords" class="ui label red">
                <span>删除全部</span>
            </a>            
        </div>
    </div>
</template>

<script>
    export default {
        name: "KeywordsList",
        methods: {
            deleteKeyword(word) {
                this.$store.dispatch('deleteKeyword', word);
            },
            deleteAllKeywords() {
                this.$store.dispatch('deleteAllKeywords');                
            }
        },
        computed: {
            showList() {
                let state = this.$store.getters;
                if (state.keywords.length) {
                    return true;
                }
                return false;
            },
            remainWordsCount() {
                let state = this.$store.getters;
                return state.maxKeywordsCount - state.keywords.length;             
            }
        }
    }
</script>