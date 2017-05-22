<template>
    <div v-bind:class="{'active': showDimmer}" class="ui page dimmer">
        <div class="content">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Dimmer',
        computed: {
            showDimmer() {
                return this.$store.getters.modalErrorIsShow;
            }
        }
    }
</script>