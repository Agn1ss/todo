import React from "react";
import "./styles.css";

function Filter(props) {
  return (
    <div id="filter">
      <div id="filter-box">
        <input
          type="checkbox"
          checked={props.active}
          onChange={() => props.onActive()}
        />
        <span>Только невыполненные</span>
      </div>
    </div>
  );
}

export default React.memo(Filter);
