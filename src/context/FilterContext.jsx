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
};
export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };
  // sorting
  const sorting = () => {
    dispatch({type:"GET_SORT_VALUE"})
  };


  useEffect(() =>{
    dispatch({type:"SORTING_PRODUCTS" , payload : products})
  },[state.sorting_value])


  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView, sorting }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
