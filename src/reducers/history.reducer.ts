import { createSlice } from "@reduxjs/toolkit";

interface PhoneRecord {
  countryCode: string;
  phoneNumber: string;
  isValid: boolean;
}

type HistoryState = {
  phoneRecords: PhoneRecord[];
};

const initialState: HistoryState = {
  phoneRecords: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    appendHistory(
      state,
      action: {
        payload: PhoneRecord;
        type: string;
      }
    ) {
      state.phoneRecords.unshift(action.payload);
    },
    clearHistory(state) {
      state.phoneRecords = [];
    },
  },
});

export const { appendHistory, clearHistory } = historySlice.actions;
export default historySlice.reducer;
