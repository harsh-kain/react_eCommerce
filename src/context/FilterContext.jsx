import { createContext, useEffect, useReducer, useContext } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/FilterReducer";
import React from "react";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value : "lowest",
  filters : {
    text : ""
  }

};
export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };
  // sorting
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({type:"GET_SORT_VALUE", payload : userValue});
  };

  const updateFilter = (event) =>{
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({type : "UPDATE_FILTER_VALUE" , payload : {name,value}})

  }
  useEffect(() =>{

    dispatch({type:"FILTER_PRODUCTS",payload : products});
    dispatch({type:"SORTING_PRODUCTS"})
  },[products, state.sorting_value , state.filters])


  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider value={{ ...state, setGridView, sorting ,updateFilter}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
