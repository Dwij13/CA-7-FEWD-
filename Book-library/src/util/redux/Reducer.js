// Function to get initial form data from localStorage or return an empty object
const initialForm = () => {
    if (localStorage.getItem("form-data")) {
        return JSON.parse(localStorage.getItem("form-data"));
    } else {
        return {};
    }
};

// Initial state of your Redux store
const initialState = {
    books: [],          // Array to hold book data
    search: "",         // String to hold search query
    formData: initialForm()  // Holds form data retrieved from localStorage or an empty object
};

// Reducer function to manage state changes based on dispatched actions
export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH-DATA":
            return {
                ...state,
                books: action.payload  // Update books array with fetched data
            };
        case "FILTER":
            return {
                ...state,
                search: action.payload  // Update search query
            };
        case "DATA":
            return {
                ...state,
                formData: action.payload  // Update form data
            };
        default:
            return state;
    }
}
