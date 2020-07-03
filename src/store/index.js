'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource'
import createLogger from 'vuex/dist/logger'
import journal from './modules/journal'

Vue.use(Vuex)
Vue.use(VueResource)

Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		journal
	},
	strict: false,
	middlewares: debug ? [createLogger()] : []
})
