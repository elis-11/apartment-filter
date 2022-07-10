import { useContext } from "react";
import { FlatContext } from "../context/FlatContext";

export const FlatFilter = () => {
  const { filter, setFilter } = useContext(FlatContext);

  const onTextChange = (e) =>
  setFilter({ ...filter, [e.target.name]: e.target.value });
  
  const onCheckboxChange = (e) => {
    const filterKey = e.target.name;
    const selectedItem = e.target.value;
    console.log(e.target.name, e.target.value);
    let selectionNew = [...filter[filterKey]];

console.log(selectionNew);

e.target.checked
? selectionNew.push(selectedItem)
: (selectionNew = selectionNew.filter((item) => item !== selectedItem));

console.log(selectionNew);
setFilter({ ...filter, [filterKey]: selectionNew });
};


  return (
    <form className="flat-filter">
      <h3>Location</h3>

      {/* LOCATION */}
      <div className="location">
        {/* COUNTRY */}
        <div className="country">
          <label>Country: </label>
          <input type="text" name="country" onChange={onTextChange} />
        </div>

        {/* CITY */}
        <div className="city">
          <label>City:</label>
          <input type="text" name="city" onChange={onTextChange} />
        </div>
      </div>
      {/* END of Location*/}

      {/* CATEGORY  */}
      <div className="categories">
        <h3>Type</h3>

        <div className="filter-item">
          <input
            name="categories"
            type="checkbox"
            value="Apartment"
            onChange={onCheckboxChange}
          />
          <span>Apartment</span>
        </div>

        <div className="filter-item">
          <input
            name="categories"
            type="checkbox"
            value="Holiday House"
            onChange={onCheckboxChange}
          />
          <span>House</span>
        </div>
      </div>
      <div className="equipments">
        <h3>Equipment</h3>

        <div className="filter-item">
          <input
            name="equipment"
            type="checkbox"
            value="doubleBeds"
            onChange={onCheckboxChange}
          />
          <span>Double Beds</span>
        </div>
        <div className="filter-item">
          <input
            name="equipment"
            type="checkbox"
            value="wlan"
            onChange={onCheckboxChange}
          />
          <span>WLAN</span>
        </div>
        <div className="filter-item">
          <input
            name="equipment"
            type="checkbox"
            value="seaview"
            onChange={onCheckboxChange}
          />
          <span>Seaview</span>
        </div>
      </div>
      {/* end of ausstattung */}

      {/* PRICE RANGE */}
      <div className="priceRange">
        <h3>Price Range</h3>
        {/* MIN */}
        <div className="min">
          <label>Min:</label>
          <input
            type="number"
            min="0"
            name="priceMin"
            onChange={onTextChange}
          />
        </div>

        {/* MAX */}
        <div className="max">
          <label>Max:</label>
          <input
            type="number"
            min="0"
            name="priceMax"
            onChange={onTextChange}
          />
        </div>
      </div>
      {/* END of Location*/}
    </form>
  );
};
