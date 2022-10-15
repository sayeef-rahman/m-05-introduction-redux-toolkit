const store = require("./app/store");

// subscribe to store chnage
store.subscribe(()=>{
    console.log(store.getState());
})