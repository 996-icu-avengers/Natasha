import { store, bind, action } from '../utils/store';


export default {

  namespace: 'common',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      bind(store, dispatch)
      dispatch({ type: 'init' })
    },
  },

  effects: {
    *init({ }, { call, put }) {  // eslint-disable-line
      console.debug('init')
      //yield put({ type: 'getTagByCompanyName', name: '58' })
    },
    *chaneShowStatus({ show=true }, { call, put }) {  // eslint-disable-line
      const {err, status, res, req} = yield call(action, { type: 'background/chaneShowStatus', show })
      console.debug(err, status, res, req)
    },
    *getTagByCompanyName({ name }, { call, put }) {  // eslint-disable-line
      const {err, status, res, req} = yield call(action, { type: 'background/getTagByCompanyName', name })
      console.debug(err, status, res, req)
      if (!err) {
        yield put({ type: 'save', payload: res });
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
