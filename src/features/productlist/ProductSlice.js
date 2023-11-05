import fetchCount from "./counterApi";
const initialState = {
    value : 0,
    status : 'idle'
}
const counterSlice = createSlice({
    
    name : 'counter',
    initialState,

    reducers : {
        increment : (state)=>{
            state.value += 1
        },
        decrement : (state)=>{
            state.value -= 1
        },
        incrementByAmount : (state,action)=>{
            state.value += action.payload
        }
    },
    extraReducers : {
        [fetchCount.pending] : (state,action)=>{
            state.status = 'loading'
        },
        [fetchCount.fulfilled] : (state,action)=>{
            state.status = 'succeeded'
            state.value += action.payload.data
        },
        [fetchCount.rejected] : (state,action)=>{
            state.status = 'failed'
        } 
    }
})