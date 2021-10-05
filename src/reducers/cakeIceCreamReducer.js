const initialState = {
  numOfCake: 10,
  numOfIceCream: 20,
  numOfCookiesMade: 0
}

export const cakeIceCream = (state = initialState, action) =>{
  switch(action.type){
    case "BUY_CAKE":
    return{
      ...state,
      numOfCake: state.numOfCake - action.payload,
    }
    case "BUY_ICECREAM":
      return{
        ...state,
        numOfIceCream: state.numOfIceCream - 1
      }
      case 'MAKE_COOKIES':
        return {
          ...state, 
          numOfCookiesMade: state.numOfCookiesMade + 1
        }
    default:
      return state
    
  }
}