import React from "react";

import Hogs from "./Hogs";

function HogList({ hogs }) {
  return (
    <div>
      {hogs.map((hog) => (
        <Hogs key={hog.name} hog={hog} />
      ))}
    </div>
  );
}

export default HogList;
