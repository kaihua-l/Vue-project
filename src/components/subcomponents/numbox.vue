<template>
	<div class="mui-numbox" id="" data-numbox-min="1">
		<button class="mui-btn mui-btn-numbox-minus" type="button" disabled="">-</button>
		<input id="test" class="mui-input-numbox" type="number" value="1" @change="numChange" ref="numbox">
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>
<script>
	import mui from '../../lib/mui/js/mui.min.js';
	export default {
		methods:{
			numChange(){
				this.$emit('fun',parseInt(this.$refs.numbox.value))
			}
		},
		mounted(){
			mui('.mui-numbox').numbox()
		},
		props:["maxNum"],
		watch:{
			'maxNum':function(newVal,oleVal){
				mui('.mui-numbox').numbox().setOption('max',newVal)
			}
		}
	}
</script>
<style></style>