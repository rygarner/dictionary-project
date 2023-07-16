import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handelResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handelResponse);
    console.log(apiUrl);
  }
  function handelKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <p>What would you like to search for?</p>
      <form className="Dictionary-form" onSubmit={search}>
        <input
          type="search"
          placeholder="search"
          autoFocus={true}
          onChange={handelKeywordChange}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
