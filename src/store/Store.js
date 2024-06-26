"use client"
import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from "./reservation/ReservationSlice.js";
import adminReducer from './admin/adminSlice.js';
import contactReducer from './contact/contactSlice.js';

const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    contact:contactReducer,
    admin: adminReducer,
  },
});

export default store;