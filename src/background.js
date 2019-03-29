import { applyMiddleware, createStore } from 'redux';
import { alias, wrapStore } from 'react-chrome-redux';
import createSagaMiddleware from 'redux-saga';
import * as Effects from 'redux-saga/effects';



function rootReducer(state={}, action){
  switch (action.type) {
    case 'save':
      return Object.assign({}, state, action.payload || {})
    default:
      return state;
  }
}
const middleware = createSagaMiddleware()
const store = createStore(rootReducer,
  applyMiddleware(
    middleware,
  )
);

const sagas = {
  *init({}, {put}){
    console.log('start init')
    yield put({ type: 'get_996_icu' })
  }
}
middleware.run(function* (action) {
    for (const name in sagas) {
        try {
            yield Effects.fork(Effects.takeEvery, name, function* (action) {
                try {
                    if (action) {
                        action.store = store;
                    }
                    else {
                        action = { store };
                    }
                    yield sagas[name](action, Effects);
                }
                catch (err) {
                    console.error('catch error in takeEvery', err);
                }
            });
        }
        catch (err) {
            console.error('catch error in fork', err);
        }
    }
});

wrapStore(store, {
  portName: 'natasha',
});

store.dispatch({ type: 'init' })

