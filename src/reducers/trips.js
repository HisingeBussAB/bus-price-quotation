export default function trips(state = [], action) {
  console.log(state)
  console.log(action)
  switch(action.type){
    case "ADD_TRIP_TRIP":
      return [...state, action.payload]

    case "ADD_TRIP_BREAK":
      return [...state, action.payload]
    
    default:
      return state

  }
}