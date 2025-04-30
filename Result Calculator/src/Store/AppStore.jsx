import { configureStore } from "@reduxjs/toolkit";
import Reducers from "./Reducers"
let AppStore = configureStore({
reducer :{
    Reducers:Reducers
  }
})
export default AppStore;