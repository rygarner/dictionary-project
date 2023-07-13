import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition...`);
  }
  function handelKeywordChange(event) {
    console.log(event);
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <p>What would you like to search for?</p>
      <form className="Dictionary-form" onSubmit={search}>
        <input
          type="search"
          placeHolder="search"
          autoFocus={true}
          onChange={handelKeywordChange}
        />
      </form>
    </div>
  );
}
