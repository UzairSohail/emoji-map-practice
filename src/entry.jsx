import React from "react";

function Entry(props) {
  return (
    <div class="term">
      <dt>
        <span class="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Entry;
