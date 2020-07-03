'use strict';

import * as type from './types'
import actions from './actions'

const state = {
	loginForm: {
		login: '',
		password: '',
		authorization: false,
		error: false
	},
	journalArray: []
}

const mutations = {
	[type.LOGIN](state, action) {
		state.loginForm.login = action.form.login,
		state.loginForm.password =action.form.password
	},
	[type.LOGIN_ERROR](state, action) {
		state.loginForm.error = action.error
	},
	[type.AUTH_SUCCESS](state, action) {
		state.loginForm.error = action.error,
		state.loginForm.authorization = action.authorization
	},
	[type.ADD_POST](state, action) {
		state.journalArray.push(action.post);
	},
	[type.CLEAR_JOURNAL](state) {
		state.journalArray = []
	}
}

export default {
	state,
	mutations,
	actions
}
