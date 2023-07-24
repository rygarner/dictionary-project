import React, { useState } from "react";
import "./Dictionary.css";
import Result from "./Result";
import axios from "axios";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [loaded, setLoaded] = useState(false);
  let [results, setResults] = useState(null);
  let [photo, setPhoto] = useState(null);

  function handelResponse(response) {
    console.log(response.data);
    setResults(response.data);
    let apiKey = "098ccb45o7c850a3f13da84004ctd40d";
    let apiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handlePhotos);
  }

  function handlePhotos(response) {
    console.log(response.data.photos);
    setPhoto(response.data.photos);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search(event) {
    let apiKey = "098ccb45o7c850a3f13da84004ctd40d";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handelResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div>
        <div className="Search">
          <div className="Question">
            <p>What would you like to search for?</p>
          </div>
          <br />
          <div>
            <form className="Form" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="search"
                defaultValue={props.defaultKeyword}
                onChange={handleKeywordChange}
                autoFocus={true}
              />
            </form>
          </div>
        </div>
        <div className="ResultsAndPhotosContainer">
          <div className="ResultsContainer">
            <Result results={results} />
          </div>
          <div className="PhotosContainer">
            <Photos photos={photo} />
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
