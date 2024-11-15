import {configureStore} from '@reduxjs/toolkit'
import counter from './Slice'
const store = configureStore({
    reducer:{
    counterReducer : counter
    }
})
export default store;