import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


export const store=configureStore({
    reducer:{
        cart:cartReducer,
    },

});

export type RootState=ReturnType<typeof store.getState> //blueprint of redux store
export type AppDispatch=typeof store.dispatch;//what kind of actions are allowed to be sent to the store