import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getkeyword } from "./action";

function App() {
  const [text, setText] = useState();
  const { data, error, status } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getkeyword({ text }));
  };

  console.log(data?.result?.map((item) => item));
  return (
    <>
      {status === "succeed" && (
        <div className="bg" style={{ position: "absolute", zIndex: "-1" }}>
          <video autoPlay loop muted src="/bg.mp4"></video>
        </div>
      )}

      <h1 style={{ backgroundImage: "url('/three.png')" }}>
        SEO Google <br /> Keyword Search <br /> Tool
      </h1>

      <div className="input-section">
        <div>
          <input type="text" onChange={(e) => setText(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className="info">
        {status === "loading" && (
          <div className="loading">
            {" "}
            <video autoPlay loop muted src="/load.mp4">
              {" "}
            </video>{" "}
          </div>
        )}

        {status === "succeed" && (
          <table>
            <thead>
              <tr>
                <th>Competition Index</th>

                <th>Keyword</th>
                <th>Average Monthly Searches</th>
                <th>High CPC</th>
                <th>Low CPC</th>
                <th>Competition Value</th>
              </tr>
            </thead>

            <tbody>
              {data?.result?.slice(0, 10).map((item) => (
                <tr>
                  <td>{item?.competition_index}</td>
                  <td>{item?.keyword}</td>
                  <td>{item?.avg_monthly_searches}</td>
                  <td>{item?.["High CPC"]}</td>
                  <td>{item?.["Low CPC"]}</td>
                  <td>{item?.competition_value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default App;
