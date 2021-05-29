<template>
	<div class="mui-numbox" id="" data-numbox-min="1" style="height:25px">
		<button class="mui-btn mui-btn-numbox-minus" type="button" disabled="">-</button>
		<input id="test" class="mui-input-numbox" type="number" :value="inpCou" @change="countChange" ref="carNumbox">
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>
<script>
	import mui from '../../lib/mui/js/mui.min.js';
	export default {
		methods:{
			countChange(){
				var num = this.$refs.carNumbox.value
				this.$store.commit('update',{id:this.inpId,num:num})
			}
		},
		mounted(){
			mui('.mui-numbox').numbox();
			
		},
		props:['inpCou','inpId']

	}
</script>
<style></style>