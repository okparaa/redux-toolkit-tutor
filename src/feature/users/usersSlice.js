import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', name: 'Dude Lebowski'},
    {id: '2', name: 'Neil Young'},
    {id: '3', name: 'Dave Grey'}
]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})
export const selectAllUsers = (state) => state.users
export default usersSlice.reducer