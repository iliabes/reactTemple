import axios from "axios"
import IBla from "../models/IBla"
import { createAsyncThunk  } from "@reduxjs/toolkit"





// асинхронный экшен на rtc query
export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_,thunkAPI) => {
      try{
        const response = await axios.get<IBla[]>('https://jsonplaceholder.typicode.com/users')
        return response.data
      }catch(e){
        throw  thunkAPI.rejectWithValue(e.message)
      }

    }
)






// import { usersFetching,usersFetchingSucces,usersFetchingError } from "./redusers/UsersSlice"
// import { AppDispatch } from "./store"
// import { useAppDispatch } from "../hooks/redux"

// асинхронный экшен на нативый (без thunk и rtk querry) 
//   export const fetchUsers = () => async(dispatch:AppDispatch) => {
//     console.log('hook fetch')
//     try{
//         dispatch(usersFetching())
//         const response = await axios.get<IBla[]>('https://jsonplaceholder.typicode.com/user2s')
//         dispatch(usersFetchingSucces(response.data))
//     }catch(e:any){
//         console.log('erreo',e)
//         dispatch(usersFetchingError(e.message))
//     }
// }