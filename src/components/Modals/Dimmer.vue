<template>
	<transition name="fade">
    <div v-if="showDimmer" v-bind:class="{'active': showDimmer}" class="ui page dimmer">
        <div class="content">
        </div>
    </div>
    </transition>
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

<style>
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
		opacity: 0;
	}
</style>