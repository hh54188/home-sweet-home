<template>
    <div class="ui list result-list">
        <div v-bind:class="{ 'result-list__item--fav': item.fav == true }" v-for="item in data" class="item result-list__item">
            <i v-bind:class="{ 'empty star teal' : item.fav == false, 'star olive' : item.fav == true }" class="icon result-list__item__icon"></i>
            <div class="content">
                <a target="_blank" :href="item.link">{{item.title}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'List',
        props: ['data']
    }
</script>

<style>
    .result-list__item__icon {
        opacity: 0!important;
        display: none!important;
        transition: opacity 0.3s ease-out;
    }
    /*
    .result-list__item--fav .result-list__item__icon {
        opacity: 1!important;        
    }

    .result-list__item:hover .result-list__item__icon{
        opacity: 1!important;
    }
    */
</style>