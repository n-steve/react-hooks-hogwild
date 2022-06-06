import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";
import Filter from "./Filter";

function App() {
  // const [hogsData, setHogsData] = useState(hogs);
  const [greased, setGreased] = useState(false);
  const [sort, setSortBy] = useState("All");

  const hogData = hogs
    .filter((hog) => {
      if (greased) {
        return hog.greased;
      } else return true;
    })
    .sort((a, b) => {
      if (sort === "weight") {
        return a.weight - b.weight;
      } else if (sort === "name") {
        return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="card">
      <div className="ui grid container">
        <div className="ui eight wide column">
          <Nav />
          <Filter
            greased={greased}
            setGreased={setGreased}
            sort={sort}
            setSortBy={setSortBy}
          />
          <HogList hogs={hogData} />
        </div>
      </div>
    </div>
  );
}

export default App;

// const onClickGreased = () => {
//   setGreased(() => !greased);

//   if (greased) {
//     const filteredHog = hogs.filter((pig) => {
//       if (pig.greased) return pig.greased;
//     });
//     setHogsData(filteredHog);
//   } else {
//     setHogsData(hogs);
//   }
// };

// const sortData = (e) => {
//   if (e.target.value === "name") {
//     const sorted = hogsData.sort((a, b) => {
//       return a.name.localeCompare(b.name);
//     });
//     setHogsData(sorted);
//   } else if (e.target.value === "weight") {
//     setHogsData(() => [
//       ...hogsData.sort((a, b) => {
//         return a.weight - b.weight;
//       }),
//     ]);
//   } else {
//     setHogsData(hogs);
//   }
// };

//{
/* <input
type="checkbox"
placeholder="Greased Pigs"
onClick={() => onClickGreased()}
/>{" "}
<label>Greased Pigs </label>
<p>Sort by:</p>
<select
className="ui selection dropdown"
name="sort"
placeholder="select"
onChange={sortData}
>
<option>All</option>
<option value="name" placeholder="name">
  Name
</option>
<option value="weight" placeholder="weight">
  Weight
</option>
</select> */
//}
