export const increment = (number) =>{
  return {
    type: 'INCREMENT',
    payload: number 
  }
}

export const decrement = () =>{
  return {
    type: 'DECREMENT'
  }
}

export const addFive = () =>{
  return {
    type: 'ADDFIVE'
  }
}

export const login = (boolean) =>{
  return {
    type: "SIGN_IN",
    payload: boolean
  }
}

export const formData = (e) =>{
  return {
    type: 'FORM_DATA',
    payload: e
  }
}



////////cake and ice cream
const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"
const MAKE_COOKIES = "MAKE_COOKIES"

export const buyCake = () =>{
  return {
    type: BUY_CAKE,
  }
}

export const buyIceCream = () =>{
  return{
    type: BUY_ICECREAM
  }
}

export const makeCookies = () =>{
  return {
    type: MAKE_COOKIES
  }
}