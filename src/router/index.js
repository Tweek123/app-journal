'use strict';

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Journal from '../pages/Journal.vue'

Vue.use(Router)


const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: Home,
			name: 'home'
		},
		{
			path: '/journal',
			component: Journal,
			name: 'journal'
		}
	]
})

export default router
