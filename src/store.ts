import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";

import { configureStore } from "@reduxjs/toolkit";

import historyReducer from "@/reducers/history.reducer";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "redux",
  storage: storage,
  timeout: 250,
};

const store = configureStore({
  reducer: {
    history: persistReducer<ReturnType<typeof historyReducer>>(
      persistConfig,
      historyReducer
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
