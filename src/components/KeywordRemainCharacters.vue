<template>
    <div v-show="showReminder" class="ui pointing label">
        还能输入<span>{{remainCharacters}}</span>个字符
    </div>
</template>

<script>
    export default {
        name: 'KeywordRemainCharacters',
        computed: {
            showReminder() {
                let state = this.$store.getters;                
                if (state.maxInputCharacters - state.inputKeyword.length < 10) {
                    return true;
                }
                return false;
            },            
            remainCharacters() {
                let state = this.$store.getters;
                return state.maxInputCharacters - state.inputKeyword.length;
            }
        }
    }
</script>