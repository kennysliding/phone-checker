import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { clearHistory } from "@/reducers/history.reducer";
import type { RootState } from "@/store";

type HistoryContainerProps = {
  limit?: number; // 0 means no limit
};

function HistoryContainer({ limit = 0 }: HistoryContainerProps) {
  const navigate = useNavigate();
  let { phoneRecords } = useSelector((state: RootState) => state.history);
  const dispatch = useDispatch();
  if (limit !== 0) {
    phoneRecords = phoneRecords.slice(0, limit);
  }

  return (
    <div className="text-center m-5">
      <div className="text-center">
        <p>History {limit !== 0 && `(displaying the top ${limit} records)`}</p>
        {limit !== 0 && (
          <button
            onClick={() => navigate("/history")}
            className="mr-5 underline"
          >
            View all records
          </button>
        )}
        <button className="underline" onClick={() => dispatch(clearHistory())}>
          Clear
        </button>
        <table className="table-auto mx-auto lg:w-1/6">
          <thead>
            <tr>
              <th>Area Code</th>
              <th>Phone Number</th>
              <th>Valid</th>
            </tr>
          </thead>
          <tbody>
            {phoneRecords.map((record, index: number) => (
              <tr
                key={index}
                className={`${
                  record.isValid ? "bg-green-800" : "bg-red-800"
                } hover:bg-slate-400`}
              >
                <td>{record.countryCode}</td>
                <td>{record.phoneNumber}</td>
                <td>{record.isValid ? "valid" : "invalid"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default HistoryContainer;
