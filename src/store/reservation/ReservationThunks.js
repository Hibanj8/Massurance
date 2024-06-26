"use client"
import { createAsyncThunk  } from '@reduxjs/toolkit';
import axios from 'axios';
// const token = localStorage.getItem('access_token') || undefined;

export const fetchReservations = createAsyncThunk(
    'reservations/fetchReservations',
    async () => {
      try {
        token = localStorage.getItem('access_token') || undefined;
        const response = await axios.get(`http://localhost:3000/api/reservation`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },   
        });
        return response.data.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
export const addReservation = createAsyncThunk(
  'reservations/addReservation',
  async (reservationData) => {
    try {
      token = localStorage.getItem('access_token') || undefined;
      const response = await axios.post(`http://localhost:3000/api/reservation`, reservationData);
      return response.data;
    } catch (error) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateReservation = createAsyncThunk(
  'reservations/updateReservation',
  async ({ id, reservationData }) => {
    try {
      token = localStorage.getItem('access_token') || undefined;
      const response = await axios.put(`http://localhost:3000/api/reservation/${id}`, reservationData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },   
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteReservation = createAsyncThunk(
  'reservations/deleteReservation',
  async (id) => {
    try {
      token = localStorage.getItem('access_token') || undefined;
      await axios.delete(`http://localhost:3000/api/reservation/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },   
      });
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);