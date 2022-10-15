//createSlice default from redux toolkit
const createSlice = require("@reduxjs/toolkit");

// initial State
const initialState = {
  count: 0,
};


const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) =>{
        state.count--;
    }
  },
});


module.exports.counterActions = counterSlice.actions;
module.exports = counterSlice.reducer;