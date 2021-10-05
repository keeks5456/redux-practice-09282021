const initialState = {
  loading: false,
  users: [],
  error: ''
}

const userReducer = (state = initialState, action )=>{
  switch(action.type){
    case 'FETCH_USERS_REQUEST':
      return {
        loading: true
      }
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        users: action.payload
      }
      case 'FETCH_FAILURES':
        return {
          ...state,
          loading: false,
          users: [],
          error: action.payload
        }
        default:
          return state
  }
}
export default userReducer