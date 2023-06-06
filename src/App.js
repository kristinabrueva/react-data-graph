import React, { useEffect, useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";

const datas = [
  [60, 30, 30],
  [10, 30, 40, 20],
  [60, 30, 40, 20, 30],
  [10, 40, 30, 20, 50, 10],
];

let i = 0;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    changeData();
  }, []);

  const changeData = () => {
    setData(datas[i++]);
    if (i === datas.length) i = 0;
  };

  return (
    <div className="App">
      <div className="App-body">
        <h2>Graphs with React and D3</h2>
        <button className="App-button" onClick={changeData}>
          Change Data
        </button>
        <BarChart width={600} height={400} data={data} />
      </div>
    </div>
  );
}

export default App;
