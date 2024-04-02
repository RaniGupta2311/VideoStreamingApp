import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        isSearchQuery:{
            isSearchQueryFlag:false,
            isSearchQueryResult:""
        },
    },
    reducers:{
        toggleMenu:(state,action)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        closeMenu:(state,action)=>{
            state.isMenuOpen=false
        },
        toggleSearchQuery:(state,action)=>{
            state.isSearchQuery=action.payload
        }
    }
})
export const {toggleMenu,closeMenu,toggleSearchQuery}=appSlice.actions;
export default appSlice.reducer;