import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// Ініціалізація бекенд URL
const BASE_URL = 'https://667294606ca902ae11b0dc96.mockapi.io/contacts';

// Асинхронні операції
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, { rejectWithValue }) => {
  try {
    const response = await axios.post(BASE_URL, contact);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

  export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
      //console.error('Error deleting contact:', error);
      //throw error;
    }
  });
 