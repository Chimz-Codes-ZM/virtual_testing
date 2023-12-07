import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    overview: true,
    approved: {},
    denies: {}
}

const InternSlice = createSlice({
    name: 'interns_applications',
    initialState
},


)