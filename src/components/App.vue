<template>
    <div v-bind:class="{'loading': this.$store.getters.loading}" class="column ten wide ui form">
        <!--<MyTitle></MyTitle>-->
        <ModalError ></ModalError>
        <Dimmer></Dimmer>
        <div class="field">
            <SearchInput></SearchInput>
        </div>
        
        <KeywordsList></KeywordsList>

        <div id="my-tab" class="ui top attached tabular menu">
            <a @click="selectTab('latest')" v-bind:class="{'active': this.$store.getters.selectedTabName === 'latest'}" class="item" data-tab="latest">
                <span>最新</span>
                <i @click="refreshLatestResult" v-bind:class="{'loading': this.$store.getters.loading}" class="btn-refresh icon Refresh"></i>
            </a>
            <a @click="selectTab('search')" v-bind:class="{'active': this.$store.getters.selectedTabName === 'search'}" class="item" data-tab="search">
                <span>搜索结果</span>
                <i @click="refreshSearchResult" v-bind:class="{'loading': this.$store.getters.loading}" class="btn-refresh icon Refresh"></i>                
            </a>
            <a @click="selectTab('fav')" v-bind:class="{'active': this.$store.getters.selectedTabName === 'fav'}" class="item" data-tab="fav">
                <span>收藏</span>
            </a>
        </div>
        <div v-bind:class="{'active': this.$store.getters.selectedTabName === 'latest'}" class="ui bottom attached tab segment" data-tab="latest">
            <List :data="this.$store.getters.latestResult.data"></List>
            <Pagination :pageAction="'latestResultPaging'" :data="this.$store.getters.latestResult.pagination"></Pagination>
        </div>
        <div v-bind:class="{'active': this.$store.getters.selectedTabName === 'search'}" class="ui bottom attached tab segment" data-tab="search">
            <List :data="this.$store.getters.searchResult.data"></List>
            <Pagination :pageAction="'searchResultPaging'" :data="this.$store.getters.searchResult.pagination"></Pagination>     
        </div>
        <div v-bind:class="{'active': this.$store.getters.selectedTabName === 'fav'}" class="ui bottom attached tab segment" data-tab="fav">
            <!--<List></List>-->
            <!--<Pagination></Pagination>-->
        </div>
    </div>
</template>

<script>
    import KeywordsList from './KeywordsList.vue';
    import MyTitle from './MyTitle.vue';
    import SearchInput from './SearchInput.vue';
    import KeywordRemainCharacters from './KeywordRemainCharacters.vue';
    import List from './List.vue';
    import Pagination from './Pagination.vue';

    import ModalError from './Modals/ModalError.vue';
    import Dimmer from './Modals/Dimmer.vue';

    export default {
        name: "App",
        components: {
            KeywordsList,
            MyTitle,
            SearchInput,
            KeywordRemainCharacters,
            List,
            Pagination,
            ModalError,
            Dimmer
        },
        methods: {
            selectTab(tabName) {
                this.$store.dispatch('selectTab', tabName);
            },
            refreshLatestResult() {
                this.$store.dispatch('refreshLatest');
            },
            refreshSearchResult() {
                this.$store.dispatch('search');
            }
        }
    }
</script>

<style>
    span, label, p {
        font-family: "微软雅黑", "Microsoft Yahei", "Source Han Sans"!important;
    }
    .btn-refresh {
        margin-left: 10px!important;
    }
</style>