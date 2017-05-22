<template>
	<div id="modal-error" v-bind:class="{'active': this.$store.getters.modalErrorIsShow}" class="ui small modal center">
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
</style>