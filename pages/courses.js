import React, { useState } from "react";
// Import your classes js file and and div component

function Courses() {
  // TODO: Add your course fiters variables here
  // Add your course abrs to the state array filters
  const [filters, setFilters] = useState({
    "Example": false
  });
  const [noneSelected, setNoneSelected] = useState(true);


  // TODO: Function that sets the filters to those selected. Changes button to on or off depending on previous state
  // HINT: Use the id of the buttons to get the value for the filter
  const handleClick = (e) => {
    
  };

  return (
    <>
      <div className="h-64"></div>
      <div className="h-32 text-black block">
        <p className="">Type</p>
        <div className="flex flex-row">
            {/* Feel Free To Design Website */}
          {Object.keys(filters).map((key) => (
            <>
              {filters[key] ? (
                <div
                  className=" text-black bg-purple-500 font-bold py-2 px-3 rounded-lg border-purple-400 border-2 text-xl w-fit"
                  id={key}
                  onClick={handleClick}
                >
                  {key}
                </div>
              ) : (
                <div
                  className=" text-black font-bold py-2 px-3 rounded-lg border-purple-400 border-2 text-xl w-fit"
                  id={key}
                  onClick={handleClick}
                >
                  {key}
                </div>
              )}
            </>
          ))}
        </div>
      </div>
      <div className="flex -mt-8 min-h-[20rem] flex-row overflow-auto ">
        {/** Create a component for your classes **/}
      </div>
    </>
  );
}

export default Courses;
