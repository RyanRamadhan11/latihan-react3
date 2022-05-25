import { combineReducers } from "@reduxjs/toolkit"

import counter from './counter'
import product from './products'

export default combineReducers({
    counter,
    product
})