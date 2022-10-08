import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    donor: {email:'', amount:''},
}

export const Slice = createSlice({
    name: 'mainStore',
    initialState,
    reducers:{
        setDonor: ( state, action ) => {state.donor = { ...state.donor, ...action.payload } }, 
    }
})

export const { setDonor } =  Slice.actions
export default Slice.reducer