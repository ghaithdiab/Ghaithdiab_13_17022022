import axios from 'axios'

const GetUserInfo = () => (dispatch) => {
  axios
    .post(
      'http://localhost:3001/api/v1/user/profile',
      {},
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    )
    .then((res) => {
      dispatch({
        type: 'USER_INFO',
        payload: {
          firstName: res.data.body.firstName,
          lastName: res.data.body.lastName,
        },
      })
    })
    .catch((error) => {
      console.log(error)
    })
}
export default GetUserInfo
