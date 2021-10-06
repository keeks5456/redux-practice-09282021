const initialState = {username: "akiko", password: "akiko"}
const isLoggedIn = false

const formData = ( state = initialState, action) =>{ 
  switch(action.type){
    case "FORM_DATA":
      // debugger
      return  {username: action.payload.username, password: action.payload.password}//or true
      
    default:
      return  state
  }
}

export default formData