import { useContext } from "react";
import { FlatContext } from "../context/FlatContext";
import { FlatFilter } from "./FlatFilter";
import { FlatList } from "./FlatList";

export const Flats = () => {
  const { filter, flats } = useContext(FlatContext);

  let flatsFiltered = flats;

  if (filter.country) {
    flatsFiltered = flats.filter((flat) =>
      flat.country.toLowerCase().includes(filter.country.toLowerCase())
    );
  }

  if (filter.city) {
    flatsFiltered = flats.filter((flat) =>
      flat.city.toLowerCase().includes(filter.city.toLowerCase())
    );
  }

  if (filter.categories.length) {
    flatsFiltered = flatsFiltered.filter((flat) =>
      filter.categories.includes(flat.category)
    );
  }

  if (filter.equipment.length) {
    console.log(filter.equipment);
    filter.equipment.forEach((criteria) => {
      flatsFiltered = flatsFiltered.filter((flat) => flat[criteria]);
    });
  }

  if (filter.priceMin || filter.priceMax) {
    console.log(filter.priceMin, filter.priceMax);

    flatsFiltered = flatsFiltered.filter((flat) => {
      
      if (filter.priceMin && filter.priceMax) {
        return (
          flat.pricePerNight >= filter.priceMin &&
          flat.pricePerNight <= filter.priceMax
        );
      }
      else if (filter.priceMin){
        return flat.pricePerNight >= filter.priceMin
      }
      else if (filter.priceMax){
        return flat.pricePerNight <= filter.priceMax
      }
    });
  }

  return (
    <div className="flats">
      <FlatFilter />
      <FlatList flats={flatsFiltered} />
    </div>
  );
};
