import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="Partofspeech">{props.meaning.partOfSpeech}</h3>
      <p className="Definition">{props.meaning.definition}</p>
      {props.meaning.example && (
        <p>
          {" "}
          <em>"{props.meaning.example}"</em>
        </p>
      )}
      {!props.meaning.example && <div className="Meaning-noexamples"></div>}
      <Synonyms synonyms={props.meaning.synonyms} />
      <div className="Meaning-separator"></div>
    </div>
  );
}
