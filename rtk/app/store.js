const configureStore = require("@reduxjs/toolkit").configureStore;
const counterReducer = require("../features/counter/CounterSlice");

const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})

module.exports = store;