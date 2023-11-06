import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65460783fe036a2fa95516c9.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const contacts = await axios.get('/contacts');
            return contacts;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const contacts = await axios.post('/contacts', contact);
            return contacts;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const contacts = await axios.delete(`/contacts/${contactId}`);
            return contacts;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

    