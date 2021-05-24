import React, { useEffect, useState } from "react";
import Card from "./Card.js";
import "./App.css";

function App() {
  let [data, setData] = useState([{}]);
  let [loading, setLoading] = useState(false); //false initially
  let [query, setQuery] = useState("");

  const fetchdata = async () => {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );
    const data = await response.json();
    setLoading(true);
    setData(data);
  };

  useEffect(() => {
    fetchdata();
  }, [query]);
  if (loading) {
    return (
      <>
        <nav>
          <img
            src="https://raw.githubusercontent.com/bradtraversy/breaking-bad-cast/master/src/img/logo.png"
            alt="breaking bad logo"
            className="logo"
          ></img>
        </nav>
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="eg. Walter"
            className="input"
          ></input>
        </div>
        <section>
          {data.map((item) => {
            return <Card value={item} key={item.char_id}></Card>;
          })}
        </section>
      </>
    );
  } else {
    return (
      <section>
        <img src="https://raw.githubusercontent.com/bradtraversy/breaking-bad-cast/master/src/img/spinner.gif"></img>
      </section>
    );
  }
}

export default App;
