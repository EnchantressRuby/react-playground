//!


const initial = {
    orders: [
      { id: 0, text: "Redux", completed: false },
      { id: 1, text: "Take the dogs outside", completed: true },
    ],
  };
  
  
  const todoReducer = (state=initial, {type,payload}) => {
  
  switch (type) {
    
  case "DELETE":
    return {orders:state.orders.filter((a)=>a.id !== payload) }
  
  case "ADD":
    return {orders: [...state.orders, {id:3, text:payload , completed: false}]}
  
    default: return state
   
  }
  
  
  
  }
  
  export default todoReducer