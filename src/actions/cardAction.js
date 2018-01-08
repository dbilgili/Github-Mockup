export function modalToggle(){
  return{
    type: "MODAL_TOGGLE"
  }
}

export function selectedCard(data){
  return{
    type: "CARD_SELECTED",
    payload: data
  }
}

export function bgStyleToggle(){
  return{
    type: "BGSTYLE_TOGGLE"
  }
}
