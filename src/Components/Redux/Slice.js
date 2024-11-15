import { createSlice } from "@reduxjs/toolkit";
 const initialState={
    
        count: []
     
 }
 const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        add:(state,action)=>{
           state.count.push(action.payload)
        },
        deleteData:(state,action)=>{
        const newArr = [...state.count]
        newArr.splice(action.payload,1)
        state.count= newArr
        },
        updateData:(state,action)=>{
          const {val,index}=action.payload  
          const newArr=[...state.count]
          newArr[index]=val
          state.count= newArr
        }
    }
 }) 
 export const {add  } =  counterSlice.actions
 export const {deleteData,updateData} =  counterSlice.actions
 export default counterSlice.reducer