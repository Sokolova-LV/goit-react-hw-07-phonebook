import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const pending = state => {
    state.isLoading = true;
    state.error = null;
};

const fulfilled = (state, { payload }) => {
    state.items = payload;
    state.isLoading = false;
    state.error = null;
};

const rejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const addSuccess = (state, { payload }) => {
    state.items = [...state.items, payload]; // state.items.push(payload);
    state.isLoading = false;
    state.error = null;
};

const deleteSuccess = (state, { payload }) => {
    state.items = state.items.filter(item => item.id !== payload.id);
    state.isLoading = false;
    state.error = null;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [fetchContacts.pending]: pending,
        [addContact.pending]: pending,
        [deleteContact.pending]: pending,

        [fetchContacts.fulfilled]: fulfilled,
        [addContact.fulfilled]: addSuccess,
        [deleteContact.fulfilled]: deleteSuccess,

        [fetchContacts.rejected]: rejected,
        [addContact.rejected]: rejected,
        [deleteContact.rejected]: rejected,
    },
});

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter: (state, action) => {
            return action.payload;
        },
    },
});

export const contactsReducer = contactsSlice.reducer;

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;