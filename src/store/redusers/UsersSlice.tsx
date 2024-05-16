import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import initState from '../initalState'
import IBla from '../../models/IBla'
import axios from "axios"
import { setLocalItem } from '../../lib/localStore'


interface IUsersSlice {
  users: IBla[],
  error:string,
  isLoading:boolean
}

const initialState: IUsersSlice = {
  users: initState,
  error:'',
  isLoading:false
}


export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_,thunkAPI) => {
    console.log('fetchUsers')
    try{
      const response = await axios.get<IBla[]>('https://jsonplaceholder.typicode.com/users')
      return response.data
    }catch(e){
      throw  thunkAPI.rejectWithValue(e.message)
    }

  }
)



export const usersSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    usersFetching: (state) => {
        state.isLoading = true
    },
    usersFetchingSucces: (state,action: PayloadAction<IBla[]>) => {
        state.isLoading = false
        state.error = ''
        state.users = action.payload
    },
    usersFetchingError: (state, action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
    },
    getDataStorege: (state, action: PayloadAction<IBla[]>) => {
      state.users = action.payload
  },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IBla[]>) => {
      setLocalItem('users',action.payload)
      state.users = action.payload
      state.isLoading = false
      state.error = ''
    }),
    builder.addCase(fetchUsers.rejected, (state,action)=>{
      state.isLoading = false
      if (
        action.payload &&
        typeof action.payload === "object" &&
        "message" in action.payload
      ) {
        state.isLoading = false;
        state.error = action.payload.message as string;
      } else {
        state.isLoading = false;
        state.error = "An error occurred";
      }

    }),
    builder.addCase(fetchUsers.pending, (state)=>{
      state.isLoading = true
    })
  },
})


export const { usersFetching, usersFetchingSucces, usersFetchingError, getDataStorege} = usersSlice.actions
export default usersSlice.reducer