import React, { useState, useEffect } from "react";
import { categories } from "../../Service/getallproducts";
import "./SearchComponent.css";
import { Dropdown } from "semantic-ui-react";
const SearchComponent = () => {
  const [dropvalue, setDropvalue] = useState([]);
  const [slectedvalue, setSlectedvalue] = useState("");

  useEffect(() => {
    categories().then((res) => {
      setDropvalue(res);
    });
  }, [setDropvalue]);

  let finalArray = [];
  dropvalue.map((item, index) => {
    let x = { key: item, text: item, value: item };
    finalArray.push(x);
  });
    
  return (
    <div>
      {finalArray && (
        <Dropdown
          placeholder="Select fav"
          fluid
          clearable
          selection
                  options={finalArray}
        />
      )}
    </div>
  );
};

export default SearchComponent;
