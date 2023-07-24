import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="ResultsInfo">
          <div className="Meaning">
            <h1 className="Word">{props.results.word}</h1>
            <h4 className="Phonetics">{props.results.phonetic}</h4>
          </div>

          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
