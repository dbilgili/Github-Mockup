const cardReducer = (state={modal: false, bgStyle: false, data: {}}, action) => {
  switch (action.type) {
    case "MODAL_TOGGLE":
      state = {...state, modal: !state.modal}
      break;
    case "BGSTYLE_TOGGLE":
      state = {...state, bgStyle: !state.bgStyle}
      break;
    case "CARD_SELECTED":
      state = {...state, data: action.payload}
      break;
  }
  return state;
}

export default cardReducer
