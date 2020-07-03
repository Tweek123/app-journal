<template>
        <div>
        	<h2>Login</h2>
        	<input @keyup="change" v-model="form.login" placeholder="Login" />
        	<input @keyup="change" v-model="form.password" placeholder="Password" />
        	<button :disabled="disabled" @click="loginClick">Войти</button>
            <p v-if="journal.loginForm.error">Неверный логин или пароль</p>
        </div>
</template>

<script type="text/babel">
	import { mapActions, mapState } from 'vuex'

	export default {
		data: () => {
			return {
				form: {
					login: '',
					password: ''
				},
				disabled: true
			}
		},

		methods: {
			...mapActions([
				'login'
			]),

			loginClick(){
				this.login(this.form)
			},
			change() {
				if (this.form.login !== '' && this.form.password !=='') {
					this.disabled = false;
				} else {
					this.disabled = true;
				}
			}
		},

		mounted(){
			this.update()
		},

		computed: mapState([
			'journal'
		])
	}
</script>
