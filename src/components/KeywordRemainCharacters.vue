<template>
    <div class="ui pointing label">
        还能输入<span>{{remainCharacters}}</span>个字符
    </div>
</template>

<script>
    export default {
        name: 'KeywordRemainCharacters',
        computed: {
            remainCharacters() {
                let state = this.$store.getters.state;
                return state.maxInputCharacters - state.inputKeyword.length;
            }
        }
    }
</script>