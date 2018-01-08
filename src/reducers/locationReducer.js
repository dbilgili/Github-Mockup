const locationReducer = (state={}, action) => {
  switch (action.type) {
    case "LOCATION_TRACK":
      state = action.payload
      break;
  }
  return state;
}

export default locationReducer
