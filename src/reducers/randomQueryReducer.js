const randomQueryReducer = (state={}, action) => {
  switch (action.type) {
    case "RAND_QUERY":
      state = action.payload
      break;
  }
  return state;
}

export default randomQueryReducer
