const initialState = {
  numOfCake: 10,
  numOfIceCream: 20,
  makeCookies: 0
}

export const cakeIceCream = (state = initialState, action) =>{
  switch(action.type){
    case "BUY_CAKE":
    return{
      ...state,
      numOfCake: state.numOfCake - 1,
    }
    case "BUY_ICECREAM":
      return{
        ...state,
        numOfIceCream: state.numOfIceCream - 1
      }
      case 'MAKE_COOKIES':
        return {
          ...state, 
          makeCookies: state.makeCookies + 1
        }
    default:
      return state
    
  }
}