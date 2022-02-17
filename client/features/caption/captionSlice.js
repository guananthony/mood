import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const syncCaptions = createAsyncThunk(
	'captions/syncCaptionsStatus',
	async () => {
		try {
			console.log('in the syncCaptions Thunk function');
			const response = await axios.get('/api/captions');
			console.log('Here is your data: ', response);
			return response.data.reverse();
		} catch (e) {
			console.log(e);
		}
	}
);

export const deleteCaption = createAsyncThunk(
	'captions/deleteStatus',
	async (id) => {
		try {
			console.log('in the deleteCaption Thunk function');
			const response = await axios.delete(`/api/captions/${id}`);
			// const newCaptions = await axios.get('/api/captions');
			console.log('Here is your response: ', response);
			return response;
		} catch (e) {
			console.log(e);
		}
	}
);

const initialState = {
	captions: [],
	filter: '',
};

export const captionSlice = createSlice({
	name: 'caption',
	initialState,
	reducers: {
		setFilter: (state, action) => {
			state.filter = action.payload;
		},
	},
	extraReducers: (builder) => {
		//
		builder
			.addCase(syncCaptions.fulfilled, (state, action) => {
				console.log('In builder ');
				console.log(action.payload);
				state.captions = action.payload;
			})
			// .addCase(filterCaptions.fulfilled, (state, action) => {
			// 	console.log('In filterCaptions reducer');
			// 	state.captions = action.payload
			// })
			.addCase(deleteCaption.fulfilled, (state, action) => {
				// console.log(action.payload);
				// state.captions = action.payload;
			});
	},
});

export const { setFilter } = captionSlice.actions;

export default captionSlice.reducer;
