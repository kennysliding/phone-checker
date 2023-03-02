import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persistStore } from "redux-persist";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Router from "@/Router";
import store from "@/store";

import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App w-screen py-10">
      <ReduxProvider store={store}>
        <PersistGate persistor={persistStore(store)}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </QueryClientProvider>
        </PersistGate>
      </ReduxProvider>
    </div>
  );
}

export default App;
