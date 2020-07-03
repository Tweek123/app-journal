'use strict';

import Vue from 'vue'
import * as type from './types'
import router from '../../../router/index'

let post;

const actions = {	
	login({ commit }, form){
		post = {
			message: 'Попытка авторизации',
			time: new Date(Date.now())
		};

		commit(type.LOGIN, {
			form
		})

		commit(type.ADD_POST, {
			post
		})

		Vue.http.post('http://www/api/auth', {
			login: form.login,
			password: form.password
	   }).then(resp => {
			post = {
				message: 'Авторизация успешна',
				time: new Date(Date.now())
			}

			commit(type.ADD_POST, {
				post
			})

			commit(type.AUTH_SUCCESS, {
				authorization: true,
				error: false
			})

			alert('Вы успешно авторизовались');
			setTimeout(() => {
				router.push({ path: 'journal' })
			}, 2000);
		}).catch(error => {
			post = {
				message: 'Ошибка авторизации',
				time: new Date(Date.now())
			}

			commit(type.ADD_POST, {
				post
			})

			commit(type.LOGIN_ERROR, {
				error: true
			})
		})
	},
	clearJournal({ commit }) {
		commit(type.CLEAR_JOURNAL);
	}
}

export default actions;
