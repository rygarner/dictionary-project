import React from "react";
import "./Synonyms";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <strong>Synonyms: </strong>

        <p>
          {props.synonyms.map(function (synonym, index) {
            return <span key={index}>{synonym} </span>;
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
