import React from "react";
import "./styles.css";

function Sort(props) {
  return (
    <ul id="sorts">
      <li>
        <input
          type="radio"
          name="flags"
          value="newFirst"
          checked={props.newFirstActive}
          onChange={props.onSortChenge}
        />
        <span>Сначала новые</span>
      </li>
      <li>
        <input
          type="radio"
          name="flags"
          value="oldFirst"
          checked={props.oldFirstActive}
          onChange={props.onSortChenge}
        />
        <span>Сначала старые</span>
      </li>
      <li>
        <input
          type="radio"
          name="flags"
          value="alphabetical"
          checked={props.alphabeticalActive}
          onChange={props.onSortChenge}
        />
        <span>По алфавиту</span>
      </li>
    </ul>
  );
}

export default React.memo(Sort);
