import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
const initState = {
  email: null,
  firstName: null,
  lastName: null,
  token: null,
  isLoggedin: false,
  error: false,
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const AuthReduser = (state = initState, action) => {
  switch (action.type) {
    case 'POST_REQUEST':
      return {
        ...initState,
      }
    case 'POST_SUCCESS':
      return {
        ...initState,
        token: action.token,
        isLoggedin: true,
      }
    case 'POST_FAIL':
      return {
        ...initState,
        error: true,
      }
    case 'LOG_OUT':
      return {
        ...initState,
      }
    case 'USER_INFO':
      return {
        ...initState,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        isLoggedin: true,
      }

    default:
      return state
  }

  // return state
}

const store = createStore(AuthReduser, composeEnhancers(applyMiddleware(thunk)))

export default store
