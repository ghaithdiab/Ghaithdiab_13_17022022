import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
const initState = {
  email: null,
  token: null,
  loading:false,
  isLoggedin:false,
  error:false
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
const AuthReduser = (state = initState, action) => {
  switch(action.type){
    case  "POST_REQUEST" :
      return {
        ...initState,
        loading:true
      }
    case "POST_SUCCESS": 
    return {
      ...initState,
      token:action.token,
      isLoggedin:true
    }
    case "POST_FAIL":
      return{
        ...initState,
        error:true
      }

    default : return state
  }
 
  // return state
}

const store = createStore(AuthReduser,composeEnhancers(applyMiddleware(thunk)) )

export default store
