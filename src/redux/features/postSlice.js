//  here in the   file we create the  action and reducer

import {createSlice,  createAsyncThunk} from "@reduxjs/toolkit";

export const getPost =createAsyncThunk("post/getPost",async({id}) =>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=> res.json()
    );

})

export const deletePost =createAsyncThunk("post/deletePost",async({id}) =>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method:"DELETE",
    }).then((res)=> res.json());

})

export const createPost =createAsyncThunk("post/createPost",
async({values}) =>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/`,{
        method:"pOST",
        headers:{
            Accept:"application/json",
           "Content-type":"application/json"
        },
        body:JSON.stringify({
            title:values.title,
            body:values.body
        }),
    }).then((res)=> res.json());

})
const postSlice =createSlice({
    // line no.13 is the name of the slice
    name:'post',
    initialState:{
        post:[],
        loading:false,
        error:null,
    },
    extraReducers:{
        // get reducer
        [getPost.pending]:(state, action)=>{
            state.loading= true
        },
        [getPost.fulfilled]:(state, action)=>{
            state.loading= false;
            state.post = [action.payload];
        },
        [getPost.rejected]:(state, action)=>{
            state.loading= false;
            state.error= action.payload;
        },
        // delete reducer
        [deletePost.pending]:(state, action)=>{
            state.loading= true
        },
        [deletePost.fulfilled]:(state, action)=>{
            state.loading= false;
            state.post = action.payload;
        },
        [deletePost.rejected]:(state, action)=>{
            state.loading= false;
            state.error= action.payload;
        },

        [createPost.pending]:(state, action)=>{
            state.loading= true
        },
        [createPost.fulfilled]:(state, action)=>{
            state.loading= false;
            state.post = action.payload;
        },
        [createPost.rejected]:(state, action)=>{
            state.loading= false;
            state.error= action.payload;
        }

    }


    

})
export default postSlice.reducer;