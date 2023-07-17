import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      {props.meaning.example && (
        <p>
          {" "}
          <em>"{props.meaning.example}"</em>
        </p>
      )}
      {!props.meaning.example && (
        <div className="Meaning-noexamples">No example</div>
      )}
      <Synonyms synonyms={props.meaning.synonyms} />
      <div className="Meaning-separator"></div>
    </div>
  );
}
