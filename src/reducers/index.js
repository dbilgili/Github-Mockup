import {combineReducers} from 'redux'
import cardReducer from './cardReducer'
import locationReducer from './locationReducer'
import randomQueryReducer from './randomQueryReducer'

const allReducers = combineReducers({
  cardReducer,
  locationReducer,
  randomQueryReducer
})

export default allReducers
