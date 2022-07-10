import { createContext, useState } from "react"
import flatsData from "../data/flats.json";

export const FlatContext = createContext()

const filterDefault={ 
  country: "",
  city: "",
  categories: [],
  equipment: [],
  priceMin: false,
  priceMax: false,      
}

export const FlatContextProvider = ({children}) => {

  const [flats, setFlats] = useState(flatsData);


  const [filter, setFilter] = useState(filterDefault);

  const sharedData={flats, filter, setFilter};

  return (
<FlatContext.Provider value={sharedData}>
  {children}
</FlatContext.Provider>
    )
}
