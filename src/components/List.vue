<template>
    <div class="ui list result-list">
        <div v-for="item in data" class="item result-list__item">
            <i class="empty star icon teal result-list__item__icon"></i>
            <div class="content">
                <a target="_blank" :href="item.link">{{item.title}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'List',
        props: ['data'],
        mounted() {
            console.log(this.data);
        }
    }
</script>

<style lang="less">
    // .result-list {
    //     &__item {

    //         &__icon {
    //             opacity: 0;
    //         }

    //         &--fav {

    //         }
    //     }
    // }
</style>