const filterReducer = (state, action) =>{
    switch (action.type) {
        
        case "LOAD_FILTER_PRODUCTS":
            
            return {
                ...state,
                filter_products : [...action.payload],
                all_products : [...action.payload],
            };
    
        case "SET_GRIDVIEW":
            
            return {
                ...state,
                grid_view : true,
            };
    
        case "GET_SORT_VALUE":
            // let userSortvalue= document.getElementById('sort');
            // let sort_value = userSortvalue.options[userSortvalue.selectedIndex].value;
           
            return {
                ...state,
                sorting_value : action.payload,
            };

        case "SORTING_PRODUCTS":
            let newSortData;
            const {filter_products, sorting_value} = state;
            let tempSortData = [...filter_products];

            const sortingProducts = (a,b) =>{
                if(sorting_value === "lowest"){
                    return a.price - b.price;
                }
                if(sorting_value === "highest"){
                    return  b.price - a.price;
                }
                if(sorting_value === "a-z"){
                    return a.name.localeCompare(b.name)
                }
                if(sorting_value === "z-a"){
                    return b.name.localeCompare(a.name)
                }
            }
            newSortData = tempSortData.sort(sortingProducts);

            return {
                ...state,
                filter_products : newSortData,
            };
        
        case "UPDATE_FILTER_VALUE":
            const {name ,value} = action.payload
            return {
                ...state,
                filters:{
                    ...state.filters,
                    [name]:value
                },
            };

        case "FILTER_PRODUCTS":
            let {all_products} = state;
            let tempFilterProducts = [...all_products];
            const {text} = state.filters;
            if(text){
                tempFilterProducts = tempFilterProducts.filter((curr) =>{
                    return curr.name.toLowerCase().startsWith(text);
                })
            }
            return {
                ...state,
                filter_products : tempFilterProducts,
            };

        default:
            return state;
    }
}

export default filterReducer;