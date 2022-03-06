import axios from 'axios'

/**
 * Login Action (Api call to sign in )
 * @param {object} info 
 * @returns {Function} dispatch
 */
const Login = (info) => (dispatch) => {
    dispatch({type:"POST_REQUEST" ,payload:info})
    axios
      .post('http://localhost:3001/api/v1/user/login', info)
      .then((res) => {
        const token=res.data.body.token
        localStorage.setItem('token', token)
        dispatch({type:"POST_SUCCESS",payload:token})
        }).catch((error)=>{
          dispatch({type:"POST_FAIL"})
          console.log(error)
        })
    }


export default Login
