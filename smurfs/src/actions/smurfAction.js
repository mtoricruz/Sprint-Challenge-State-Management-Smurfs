import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURF_START });
        axios.get('http://localhost:3333/smurfs/')
            .then(res => {
                console.log('This is fetching from api',res.data)
                dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
            })
            .catch(err => console.log(err))
    }
}

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const postSmurf = smurf => {
  return dispatch => {
    dispatch({ type: POST_SMURF_START });
    axios.post('http://localhost:3333/smurfs/', smurf)
      .then(res => {
        const postedSmurfAction = { type: POST_SMURF_SUCCESS, payload: res.data }
        dispatch(postedSmurfAction)
      })
  }
}