export function randomQuery(query){
  return{
    type: "RAND_QUERY",
    payload: query
  }
}
