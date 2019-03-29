
export default {

  namespace: 'popup',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({ type: 'init' })
    },
  },

  effects: {
    *init({ }, { call, put }) {  // eslint-disable-line
      console.log('init')
    },
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
