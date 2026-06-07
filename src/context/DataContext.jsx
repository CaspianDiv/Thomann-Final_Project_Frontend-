import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { getAllProducts, getCountriesThomman } from "../services/ThommanServices";

const ThommanData = createContext();

function DataContext({ children }) {

    const [products, setProducts] = useState({});
    const [countries , setCountries] = useState([]);
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(true);

  
    useEffect(() => {
      getAllProducts()
      .then(item => setProducts(item))
      .catch(err => setError(err))
      .finally(() => setLoader(false));

      getCountriesThomman()
      .then(item => setCountries(item))
      .catch((err) => console.error(err))
    }, []);

  const obj = {
    products,
    countries,
    error,
    loader,
    setProducts
    };

  return (
    <>
        <ThommanData.Provider value={obj}>
              {children}
        </ThommanData.Provider>
    </>
  )
};

export function useThomman() {
  return useContext(ThommanData)
};

export default DataContext
