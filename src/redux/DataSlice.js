import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const getData = createAsyncThunk("getData",async() => {
    const response = await axios.get("")
    return response.data
})
const DataSlice = createSlice ({


name: "data",
initialState: {
    data:[],
    loading: "false",
    error:""
},
reducers: {

},
extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action)=>{
        state.loading= true,
        state.error=""
    })
    builder.addCase(getData.fulfilled,(state,action)=>{
        state.loading=false,
        state.error="",
        state.data=action.payload
        console.log(action.payload)
    })
    builder.addCase(getData.rejected,(state,action)=>{
        state.error=action.payload,message,
        state.loading=false
    })
}
}
)
export default DataSlice.reducer