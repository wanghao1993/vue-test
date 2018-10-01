<template>
<div>
	<span>{{ message }}</span>
	<router-link tag="a" to='/HelloWorld'>router</router-link>
    <router-link tag="a" to='/HellowVuex'>vuex</router-link>
</div>
  
</template>

<script>
export default {
	data() {
		return {
			message: "hello!"
		};
    },
    methods: {
		getUserInfo() {
			this.$http.get('/tools/get_user_info/').then(res => {
				console.log(res)
			})
		}
	},
	created() {
        this.message = "bye!";
        this.getUserInfo()
	}
};
</script>