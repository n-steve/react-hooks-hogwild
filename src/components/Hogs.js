import React, { useState } from "react";

function Hogs({ hog }) {
  const [clicked, setClicked] = useState(false);

  const clickedDetails = () => (
    <div>
      <div>Specialty:{hog.specialty}</div>
      <div>Weight:{hog.weight}lb</div>
      <div>{hog.greased ? "Greased" : "Not Greased"}</div>
      <div>Highest medal achieved: {hog["highest medal achieved"]}</div>
    </div>
  );

  return (
    <div style={{ textAlign: "center" }} onClick={() => setClicked(!clicked)}>
      <div>{hog.name}</div>
      <img alt="" src={hog.image}></img>

      {clicked && clickedDetails()}
    </div>
  );
}

export default Hogs;
