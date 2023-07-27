// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const initialState = {
  selectedRegion: {
    lat: 0,
    lng: 0,
    zoom: 2,
    region: '',
  },
};

const selectedRegionReducer = (state = initialState.selectedRegion, action) => {
  switch (action.type) {
    case 'SET_SELECTED_REGION':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = {
  selectedRegion: selectedRegionReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
