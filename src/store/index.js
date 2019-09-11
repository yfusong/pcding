import vuex from 'vuex';
import action from 'action';
import mutation from 'mutation';

const store = new vuex({
	state: {
		userInfo: {
			userId:'',
			userName: ''
		}
	},
	action,
	mutation,
});

export default store;