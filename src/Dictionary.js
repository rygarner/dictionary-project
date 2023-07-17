import React, { useState } from "react";
import "./Dictionary.css";
import Result from "./Result";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handelResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "098ccb45o7c850a3f13da84004ctd40d";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handelResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <p>What would you like to search for?</p>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="search"
          onChange={handleKeywordChange}
        />
      </form>
      <Result results={results} />
    </div>
  );
}
