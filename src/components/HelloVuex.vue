<template>
<div>
	<span>{{ message }}</span>
	<router-link tag="a" to='/HelloWorld'>{{ num }}</router-link>
	<input type="text" @input="actionInputIfTrue" />
</div>
  
</template>

<script>
import { mapActions } from 'vuex'
export default {
	data() {
		return {
			message: "hello!"
		};
	},
	computed: {
		num() {
			return this.$store.getters.getCount
		}	
	},
	methods: {
		...mapActions([
			'increment'
		]),
		actionInputIfTrue: function actionInputIfTrue (event) {
			const inputValue = event.target.value
			if (inputValue === 'input') {
				this.$store.dispatch('actionInput', { inputValue })
			}
		}
	},
	created() {
		this.message = "bye!";
	}
};
</script>