<template>
    <div v-show="showList" class="ui segment">
        <div class="ui labels">
            <a class="ui label red">
                <span>还能输入{{remainWordsCount}}个关键词</span>
            </a>        
            <a v-for="keyword in this.$store.getters.state.keywords" class="ui label">
                <span>{{keyword}}</span>
                <i :data-word="keyword" @click="deleteKeyword(keyword)" class="icon close"></i>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "KeywordsList",
        methods: {
            deleteKeyword(word) {
                console.log(word);
            }
        },
        computed: {
            showList() {
                let state = this.$store.getters.state;
                if (state.keywords.length) {
                    return true;
                }
                return false;
            },
            remainWordsCount() {
                let state = this.$store.getters.state;
                return state.maxKeywordsCount - state.keywords.length;             
            }
        }
    }
</script>