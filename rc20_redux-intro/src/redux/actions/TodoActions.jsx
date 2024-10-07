
export const del =(id)=>({


    type:"DELETE",payload:id
})

export const add = (todo) => ({
  type: "ADD",
  payload: todo,
});