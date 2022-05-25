import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
import reducer from './reducers'
// import logger from 'redux-logger'
// const middlewares = [thunk]
// const enhancers = [applyMiddleware(...middlewares)]

export default configureStore({reducer})
