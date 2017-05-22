<template>
	<transition name="fade">
	<div v-if="this.$store.getters.modalErrorIsShow" id="modal-error" v-bind:class="{'active': this.$store.getters.modalErrorIsShow}" class="ui small modal center">
	  	<div class="ui header">
	  		<span>出错啦</span>
	  	</div>
	  	<div class="content">
	    	<p>抱歉，稍后再试试吧</p>
	    	<p>总是出错的话请联系 juststayinvegas@gmail.com</p>
	  	</div>
	  	<div class="actions">
	   		<div @click="closeModal" class="ui green ok inverted button">
	      		<i class="checkmark icon"></i>
	      		<span>好吧</span>
	    	</div>
	  	</div>
	</div>
	</transition>
</template>

<script>
    export default {
        name: 'MoalError',
		methods: {
			closeModal() {
				this.$store.dispatch('hideModalError');
			}			
		}
    }
</script>

<style>
	.center {
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
		opacity: 0;
	}
</style>