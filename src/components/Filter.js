import React from "react";

function Filter({ greased, setGreased, sort, setSortBy }) {
  return (
    <div>
      <label>Click for the Greasers!</label>
      <input
        type="checkbox"
        checked={greased}
        onChange={(e) => setGreased(!greased)}
      ></input>
      <select
        className="ui selection dropdown"
        value={sort}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option>Sort By</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default Filter;
