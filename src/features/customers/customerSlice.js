const initialStateCustomer = {
  fullName: '',
  nationalId: '',
  createdAt: '',
}

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      }
    case 'customer/updateName':
      return {
        ...state,
        fullName: action.payload,
      }

    default:
      return state
  }
}

// store.dispatch({ type: 'account/deposit', payload: 500 })
// console.log(store.getState())
// store.dispatch({ type: 'account/withdraw', payload: 200 })
// console.log(store.getState())
// store.dispatch({
//   type: 'account/requestLoan',
//   payload: { amount: 1000, purpose: 'Buy A Car' },
// })
// console.log(store.getState())

// store.dispatch({ type: 'account/payLoan' })

export function creatCustomer(fullName, nationalId) {
  return {
    type: 'customer/createCustomer',
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  }
}
export function updateName(fullName) {
  return { type: 'customer/updateName', payload: fullName }
}
