import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSwapi = createAsyncThunk(
    'swapi/fetchSwapi',
    async (inputValue, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://swapi.dev/api/${inputValue}`);

            if (!response.ok) throw new Error(response.status);

            const data = await response.json();

            return data;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const getInfoSwapiSlice = createSlice({
    name: 'swapi',
    initialState: {
        inputValue: '',
        objDataSwapi: {},
        status: null,
        error: null,

    },
    reducers: {
        setSwapi: (state, action) => {
            state.inputValue = action.payload.inputValue;
        },
        delSwapi: (state) => {
            state.inputValue = '';
            state.objDataSwapi = {};
            state.status = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSwapi.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchSwapi.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.objDataSwapi = action.payload;
                state.error = null;
            })
            .addCase(fetchSwapi.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            });
    }
});

export const { setSwapi, delSwapi } = getInfoSwapiSlice.actions;

export default getInfoSwapiSlice.reducer;