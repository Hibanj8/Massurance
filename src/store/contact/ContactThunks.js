"use client"
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const token= localStorage.getItem('access_token');

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (contactData) => {
    try {
      const response = await axios.post(`http://localhost:3000/api/contact`, contactData);
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/contact`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },   
      });
      return response.data.message;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, contactData }) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/contact/${id}`, contactData , {
        headers: {
          Authorization: `Bearer ${token}`,
        },   
      });
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/contact/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },   
      });
      return id;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);