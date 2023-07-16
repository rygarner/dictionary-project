import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handelResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition...`);

    let key = `098ccb45o7c850a3f13da84004ctd40d`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
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
    </div>
  );
}
