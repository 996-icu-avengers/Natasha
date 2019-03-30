import { getAllCompany } from '../services/background'

export default {

  namespace: 'background',

  state: {
    show: true,
    icu996: [],
    wlb955: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({ type: 'init' })
    },
  },

  effects: {
    *init({ }, { call, put }) {  // eslint-disable-line
      console.debug('init')
      yield put({ type: 'getAllCompany' });
    },
    *getAllCompany({ }, { call, put }) {  // eslint-disable-line
      const {code, icu996=[], wlb955=[]} = yield call(getAllCompany)
      if (code === 0) {
        yield put({ type: 'save', payload: {icu996, wlb955} })
      }
    },
    *chaneShowStatus({ show, actionId }, { call, put }) {  // eslint-disable-line
      yield put({
        type: 'save',
        payload: {
          response: {
            type: 'chaneShowStatus',
            actionId,
          },
          show,
        }
      });
    },
    *getTagByCompanyName({ name, actionId }, { call, put, select }) {  // eslint-disable-line
      const { icu996=[], wlb955=[] } = yield select(s => s.background)
      const tag = icu996.indexOf(name) !== -1 ? 'icu996' : wlb955.indexOf(name) !== -1 ? 'wlb955' : ''

      yield put({
        type: 'save',
        payload: {
          response: {
            type: 'getTagByCompanyName',
            actionId,
            tag,
          }
        }
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
