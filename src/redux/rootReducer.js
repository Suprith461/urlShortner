import { combineReducers } from 'redux'

import userReducer from './user/userReducer'
import urlReducer from './url/urlReducer'

const rootReducer = combineReducers({
 

user:userReducer,
url:urlReducer


})

export default rootReducer;
