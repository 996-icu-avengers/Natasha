import { isEqual } from  'lodash'
import { Store } from 'react-chrome-redux';

// The `change` value for updated or inserted fields resulting from shallow diff
export const DIFF_STATUS_UPDATED = 'updated';

// The `change` value for removed fields resulting from shallow diff
export const DIFF_STATUS_REMOVED = 'removed';
/**
 * Returns a new Object containing only the fields in `new` that differ from `old`
 *
 * @param {Object} old
 * @param {Object} new
 * @return {Array} An array of changes. The changes have a `key`, `value`, and `change`.
 *   The change is either `updated`, which is if the value has changed or been added,
 *   or `removed`.
 */
export function shallowDiff(oldObj, newObj) {
  let difference = [], diff_detail = {};

  Object.keys(newObj).forEach((key) => {

    if (!isEqual(oldObj[key],newObj[key])) {

      Object.keys(newObj[key]).forEach(k => {
        if(!isEqual(newObj[key][k], (oldObj[key] || {})[k])) {
          diff_detail[k] = newObj[key][k]
        }
      })

      difference.push({
        key,
        value: newObj[key],
        change: DIFF_STATUS_UPDATED,
        diff_detail,
      });
    }
  });

  Object.keys(oldObj).forEach(key => {
    if (!newObj[key] && key !== '@@dva') {
      difference.push({
        key,
        change: DIFF_STATUS_REMOVED,
      });
    }
  });

  return difference;
};



if (!chrome.runtime.onMessage) { // eslint-disable-line
  chrome.runtime.onMessage = { addListener: function() { console.log(arguments) } } // eslint-disable-line
}
const extensionId = chrome.runtime && chrome.runtime.id ? chrome.runtime.id : ''; // eslint-disable-line 
const state = {}
export const store = new Store({
  portName: 'natasha',  // communication port name
  state,
  extensionId: extensionId || 'holoihkehkoakpgponhnilbamngclcfn',  // TODO test extensionid
});

export const bind = (store, dispatch) => {
  let prevState = store.getState();
  store.ready().then(() => {
    console.log('state: ', store.getState())
    store.subscribe(() => {
      const state = store.getState();
      const diff = shallowDiff(prevState, state);
      if (diff.length) {  // 
        prevState = state;
        console.debug('subscribe', store.getState())
        dispatch({ type: 'save', payload: store.getState() })
      }
    })
  });
}

export const action = (actionOrType, timeout) => {
  return new Promise((resolve, reject) => {
    const action = typeof actionOrType === 'object' && actionOrType.type ? actionOrType : { type: actionOrType }
    if (!action.actionId){ // 如果没有actionid就随机生成一个
      action.actionId = Math.random().toString().substr(2);
    }
    console.log('action', action)
    const unsubscribe = store.subscribe(() => {
      const { response={type:'', actionId: ''} } = store.getState()['background'];
      if (response && `background/${response.type}` === action.type && ((response.actionId && response.actionId === action.actionId) || !response.actionId)){
        // 当返回的结果里面有actionid的时候，就判断一下和发出去的actionid是不是一致，如果没有返回就不判断
        resolve({
          err: false,
          status: 'SUCCESS',
          res: response,
          req: action 
        })
        unsubscribe()
      }
      if (Object.keys(store.getState()).indexOf(action.type) !== -1){
        // 如果是某一个reducer那就监听对应的reducer变化，然后返回
        resolve({
          err: false,
          status: 'SUCCESS',
          res: store.getState()[action.type],
          req: action 
        })
        unsubscribe()
      }
    })
    store.dispatch(action)
    if (0 === timeout){
      resolve({
        err: false,
        status: 'SUCCESS',
        msg: '',
        req: action 
      })
      unsubscribe()
    }else if(false !== timeout){ // 只有显示的将超时设置为false或者负数才不启动超时
      setTimeout(() => {
        resolve({
          err: true,
          status: 'TIMEOUT',
          msg: `timeout: ${parseInt(timeout, 10) || 3000} for action: ${action.type}`,
          req: action 
        })
        unsubscribe()
      }, parseInt(timeout, 10) || 3000)
    }
  })
}

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
      console.log('init')
      //yield put({ type: 'getTagByCompanyName', name: '58' })
    },
    *chaneShowStatus({ show=true }, { call, put }) {  // eslint-disable-line
      const {err, status, res, req} = yield call(action, { type: 'background/chaneShowStatus', show })
      console.debug(err, status, res, req)
    },
    *getTagByCompanyName({ name }, { call, put }) {  // eslint-disable-line
      const {err, status, res, req} = yield call(action, { type: 'background/getTagByCompanyName', name })
      console.log(err, status, res, req)
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
