// Importing action types
import { fetchData, filterSearch, formData } from "./ActionType";

// Action creator to fetch data
export const FetchData = (data) => {
    return {
        type: fetchData,
        payload: data
    };
};

// Action creator to filter search
export const FilterSearch = (data) => {
    return {
        type: filterSearch,
        payload: data
    };
};

// Action creator to store form data
export const storeData = (data) => {
    return {
        type: formData,
        payload: data
    };
};
