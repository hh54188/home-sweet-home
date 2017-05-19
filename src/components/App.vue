<template>
    <div class="column ten wide ui form">
        <!--<MyTitle></MyTitle>-->
        <div class="field">
            <SearchInput></SearchInput>
        </div>
        
        <KeywordsList></KeywordsList>

        <div id="my-tab" class="ui top attached tabular menu">
            <a class="active item" data-tab="latest"><span>最新</span></a>
            <a class="item" data-tab="search"><span>搜索结果</span></a>
            <!--<a class="item" data-tab="fav"><span>收藏</span></a>-->
        </div>
        <div class="ui bottom attached active tab segment" data-tab="latest">
            <List :data="this.$store.getters.state.latestResult.data"></List>
            <Pagination></Pagination>
        </div>
        <div class="ui bottom attached tab segment" data-tab="search">
            <List></List>
            <Pagination></Pagination>     
        </div>
        <!--<div class="ui bottom attached tab segment" data-tab="fav">
            <List></List>
            <Pagination></Pagination>
        </div>-->
    </div>
</template>

<script>
    import KeywordsList from './KeywordsList.vue';
    import MyTitle from './MyTitle.vue';
    import SearchInput from './SearchInput.vue';
    import KeywordRemainCharacters from './KeywordRemainCharacters.vue';
    import List from './List.vue';
    import Pagination from './Pagination.vue';

    export default {
        name: "App",
        components: {
            KeywordsList,
            MyTitle,
            SearchInput,
            KeywordRemainCharacters,
            List,
            Pagination
        },
        mounted: function () {
            $('#my-tab .item').tab();
        }
    }
</script>

<style>
    span, label, p {
        font-family: "微软雅黑", "Microsoft Yahei", "Source Han Sans"!important;
    }
</style>