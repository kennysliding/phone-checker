import { Route, Routes, useLocation } from "react-router-dom";

import Error404Page from "@/pages/Error404.page";
import HistoryPage from "@/pages/History.page";
import HomePage from "@/pages/Home.page";

function Router() {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
}

export default Router;
