import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
	state : {
		'searchTop250' : '',
		'ComingSoon': ''
	},
	mutations: {
		SET_SEARCHTOP250(state, searchTop250) {
		state.searchTop250 = searchTop250;
		},
		SET_COMMINGSOON(state,ComingSoon){
		state.ComingSoon = ComingSoon
		}
	},
	actions: {
		setSearchTop250({commit}, searchTop250) {
		commit('SET_SEARCHTOP250', searchTop250);
	},
		setComingSoon({commit}, ComingSoon) {
		commit('SET_COMMINGSOON', ComingSoon);
	}	
	},
	getters: {
		getSearchTop250: (state) => state.searchTop250,
		getComingSoon: (state) => state.ComingSoon
	}
})