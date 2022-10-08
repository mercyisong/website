import { configureStore } from '@reduxjs/toolkit'
import Slice from './Splice'

export  const  Store = configureStore({
    reducer : { mainStore : Slice }
})