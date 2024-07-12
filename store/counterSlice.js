// import {createReducer, combineReducers} from '@reduxjs/toolkit';
// import AuthReducer from '../api/AuthReducer';

// const appState = {
//   name: 'GymApp',
//   url: '',
//   version: '1.0.0',
// };

// const appReducer = createReducer(appState, _ => {
//   return appState;
// });

// export const RootReducer = combineReducers({
//   app: appReducer,
//   AuthReducer: AuthReducer,
// });
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
    },
    decrement: state => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;
