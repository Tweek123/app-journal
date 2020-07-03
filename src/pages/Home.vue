<template>
	<div>
		<!-- Logins -->
		<app-login></app-login>
	</div>
</template>

<script type="text/babel">
	import appLogin from '../components/LoginForm.vue'
	import { mapActions } from 'vuex'
	export default {
		components: {
			appLogin
		}
	}
</script>


