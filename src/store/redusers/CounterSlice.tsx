import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'



interface CounterState {
  value: number,
}

const initialState: CounterState = {
  value: 123,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})


export const selectCount = (state: RootState) => state.rootReduser.counterSlice.value
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer