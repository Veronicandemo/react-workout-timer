// import { applyMiddleware, combineReducers, createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './features/accounts/accountSlice'
import customerReducer from './features/customers/customerSlice'
// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// })
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk)),
// )
const store = configureStore({
  rootReducer: {
    account: accountReducer,
    customer: customerReducer,
  },
})

export default store
