
// const counterReducer = (state = { counter: 0, text1: "" }, action1) => {
    const counterReducer = (state = { counter: 0, text1: "" }, {type,payload1}) => {
 

        switch (type) {
          case "increase":
            return { counter: state.counter + 1, text: payload1 };
        
          case "reset":
            return { counter: 0, text: payload1 };
        
          case "decrease":
            return { counter: state.counter - 1 };
          default:
            return state;
        }
        
        
        
        };
        
        export default counterReducer