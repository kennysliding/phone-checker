import { useNavigate } from "react-router-dom";

import HistoryContainer from "@/containers/History";

function HistoryPage() {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <button className="underline" onClick={() => navigate("/")}>
        Home
      </button>
      <HistoryContainer />
    </div>
  );
}

export default HistoryPage;
