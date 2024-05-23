import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import IUser from '../../models/IBla'
import axios from "axios"
import { setLocalItem } from '../../lib/localStore'
import { doc, getDoc ,collection, setDoc,query, getDocs, addDoc } from "firebase/firestore";
import { docSnap,users } from '../firebase/index'

const testUser = {
  email: 'ilon',
  id:2,
  phone: 880055545,
  username: 'pepewarior',
  website: 'bar.com',
  wirewolf: true,
  age:25
}

let init = []
init.push(testUser)


interface IUsersSlice {
  fireUsers: IUser[],
  error:string,
  isLoading:boolean
}

const initialState: IUsersSlice = {
  fireUsers  : init ,
  error:'',
  isLoading:false
}



export const fetchFireUsers = createAsyncThunk(
  'users/fetchFireUsers',
  async (_,thunkAPI) => {
    try{
      let fireUsers:any = [] 
      const querySnapshot = await getDocs(users);
      querySnapshot.forEach((doc) => {
        let elem = {...doc.data()}
        elem.id = doc.id
        console.log
        fireUsers.push(elem)
      });
      return fireUsers
    }catch(e){
      throw  thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const addFireUsers = createAsyncThunk(
  'users/addFireUsers',
  async (data:IUser,thunkAPI) => {
    try{
      console.log('addFireUsers',data)
      await addDoc(users, data)
        .then(()=>{
          console.log('addFireUsers then',data)
        })
        return data
    }catch(e){
      throw  thunkAPI.rejectWithValue(e.message)
    }
  }
)


// const docRef = await addDoc(users,{
//   email: 'ilon',
//   id:2,
//   phone: 880055545,
//   username: 'pepewarior',
//   website: 'bar.com'
// });


export const firebaseReduser = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    usersFetching: (state) => {
        state.isLoading = true
    },
    usersFetchingSucces: (state,action: PayloadAction<IUser[]>) => {
        state.isLoading = false
        state.error = ''
        state.fireUsers = action.payload
    },
    usersFetchingError: (state, action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
    },
    getDataStorege: (state, action: PayloadAction<IUser[]>) => {
      state.fireUsers = action.payload
  },
  fireUsersAdd: (state, action: PayloadAction<string>) => {
    state.isLoading = false
    state.error = action.payload
},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFireUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
      state.fireUsers = action.payload
      state.isLoading = false
      state.error = ''
    }),
    builder.addCase(fetchFireUsers.rejected, (state,action)=>{
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
    builder.addCase(fetchFireUsers.pending, (state)=>{
      state.isLoading = true
    }),
    builder.addCase(addFireUsers.fulfilled, (state, action: PayloadAction<IUser>) => {
      console.log('addCase ',action.payload)
      state.fireUsers.push(action.payload)
      state.isLoading = false
      state.error = ''
    })
  },
})


export const { usersFetching, usersFetchingSucces, usersFetchingError, getDataStorege} = firebaseReduser.actions
export default firebaseReduser.reducer

