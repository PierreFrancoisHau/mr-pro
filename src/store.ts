import { createStore } from 'vuex'
import axios from "axios";
import {getTexts} from "@/services/jsonTest.js";
import state from "@/store/state";
import mutations from "@/store/mutations";


// Create a new store instance.
export default createStore({
	state() {
		return state
	},
	// Synchronous
	mutations: mutations,
	// Asynchronous
	actions: {
		getFormTexts(context) {
			axios
				.get(process.env.VUE_APP_FORM_TEXTS_URL)
				.then(function (response) {
					context.commit('setFormTexts', response.data);
					context.commit('setPrevoyanceProducts');
				}).catch( () => {
				context.commit('setFormTexts', getTexts());
			});
		}}
})
