import { useEffect, useState } from "react";
import { states } from "./citys";
import "./styles.css";

export default function App() {
  const [state, setState] = useState("Haryana");
  const [citys, setCitys] = useState([]);
  useEffect(() => {
    const getCitys = () => {
      states.filter((item) => {
        if (item.state === state) {
          setCitys([...item.citys]);
        }
      });
    };
    getCitys();
  }, [state]);
  return (
    <div className="App">
      <select
        onChange={(e) => {
          setState(e.target.value);
        }}
        value={state}
      >
        {states.map((item) => {
          return (
            <>
              <option>{item.state}</option>
            </>
          );
        })}
      </select>
      <div>
        <select>
          {citys?.map((item) => {
            return (
              <>
                <option>{item}</option>
              </>
            );
          })}
        </select>
      </div>
    </div>
  );
}
