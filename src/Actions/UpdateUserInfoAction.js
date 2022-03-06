import axios from 'axios'

/**
 * Api call to update user info (Action)
 * @param {object} name 
 * @returns {Function} dispatch
 */
const UpdateUserInfo = (name) => (dispatch) => {
  axios
    .put('http://localhost:3001/api/v1/user/profile', name, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    .then((res) => {
      dispatch({
        type: 'USER_INFO',
        payload: {
          firstName: res.data.body.firstName,
          lastName: res.data.body.lastName,
        },
      })
    }).catch((error)=>{
      console.log(error)
    })
}

export default UpdateUserInfo
