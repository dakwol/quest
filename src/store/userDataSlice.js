import { createSlice } from '@reduxjs/toolkit'

const userData = {
    token: localStorage.getItem("token"),
    refresh: localStorage.getItem("refresh"),
    user_id: localStorage.getItem("user_id"),
    user: localStorage.getItem("user"),
    name: localStorage.getItem("name"),
}

export const userDataSlice = createSlice({
    name: 'user_data',
    initialState: {
        userData
    },
    reducers: {
        setUserDataItem(state, action) {
            state.userData[action.payload[0]] = action.payload[1]
        }
    }
})

export const { setUserDataItem } = userDataSlice.actions
export default userDataSlice.reducer