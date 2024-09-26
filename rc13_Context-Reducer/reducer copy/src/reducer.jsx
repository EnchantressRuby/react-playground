export const state1 = {
  loading: false,
  dog: "",
  error: "",
};
// messages=payload dispatch=yakala
export const reducerAA = (state1, {type,messages}) => {
  switch (type) {
    case "START":
      return { ...state1, loading: true };
    case "SUCCESS":
      return { ...state1, dog: messages, loading: false };
    case "FAIL":
      return { ...state1, error: messages, loading: false };
    default:
      return state1;
  }
};
