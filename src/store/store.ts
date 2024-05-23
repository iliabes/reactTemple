import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  usersSlice  from './redusers/UsersSlice'
import counterSlice from './redusers/CounterSlice'
import firebaseReduser from './redusers/firebaseReduser'

const rootReduser = combineReducers({
  counterSlice,
  usersSlice,
  firebaseReduser
})

export const store = configureStore({
  reducer: {
    rootReduser
  },
})




// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
// export type AppDispatch = AppStore['dispatch']


// export type RootState = ReturnType<typeof rootReduser>
// export type AppStore = ReturnType<typeof store.getState>
// export type AppDispatch = AppStore['dispatch']


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch