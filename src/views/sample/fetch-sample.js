import React, { useState, useEffect } from "react";
import FetchService from "./fetch-service";

import { Link } from "react-router-dom";
function FetchSample() {
  const [url, setUrl] = useState("https://hn.algolia.com/api/v1/search?query=react");
  const [data, setData] = useState({ hits: [] });
  const [search, setSearch] = useState("react");

  useEffect(() => {
    let loading = false;
    FetchService.fetchData(url).then((res) => {
      if (!loading) setData(res.data);
      loading = true;
    });
  }, [url]);

  useEffect(() => {
    return () => {
      setData({});
    };
  }, []);

  return (
    <>
      <Link to='/counter'>
        <span>Counter</span>
      </Link>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ margin: 20, width: 150, height: 30, fontSize: 16, padding: 0 }}
      ></input>
      <button
        style={{ margin: 20, width: 100, height: 30, fontSize: 20 }}
        onClick={() => setUrl("https://hn.algolia.com/api/v1/search?query=".concat(search))}
      >
        Search
      </button>
      <ul style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: 50 }}>
        {data.hits.map((item) => {
          return (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FetchSample;
