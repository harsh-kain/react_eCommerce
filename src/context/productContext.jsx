import axios from 'axios';
import React, { useContext, useEffect , useReducer} from 'react'
import { createContext } from 'react';
import reducer from '../reducer/productReducer'

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading : false,
    isError : false,
    products : [],
    featureProduct : [],
    isSingleLoading : false,
    singleProduct : {},
}


const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer , initialState);

    const getProduct = async(url) =>{
        dispatch({type : "SET_LOADING"})
       try {
         const res = await axios.get(url);
         const product = await res.data;
         dispatch({type : "SET_API_DATA", payload : product})
       } 
       catch (error) {
            dispatch({type : "API_ERROR"})
       }
    }

    const getSingleProduct = async (url) =>{
      dispatch({type : "SET_SINGLE_LOADING"})
      try{
        const res = await axios.get(url);
        const singleProduct = await res.data;
        dispatch({type : "SET_SINGLE_PRODUCT", payload : singleProduct})
        
      }
      catch(error){
        dispatch({type : "SET_SINGLE_ERROR"})

      }
    }
    useEffect(() => {
      getProduct(API);
    
    }, [])
    
    return <AppContext.Provider value={{...state,getSingleProduct}}>{children}</AppContext.Provider>
};

// custom hook `  
const useProductContext = () =>{
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext  };