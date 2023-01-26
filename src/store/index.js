import Reactotron from './../ReactotronConfig'
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import combinedReducers from "./combinedReducers";
import combinedSagas from "./combinedSagas";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    
const middleware =
    window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === "development"
        ? compose(applyMiddleware(sagaMiddleware), reduxDevTools)
        : applyMiddleware(sagaMiddleware);

const store = createStore(combinedReducers, compose(middleware, Reactotron.createEnhancer()))

combinedSagas.forEach(saga => {
  sagaMiddleware.run(saga)
})

export default store
