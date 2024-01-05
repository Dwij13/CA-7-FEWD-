// Importing necessary dependencies and files
import React, { useEffect } from "react";
import axios from "axios";
import loading from "./../assets/loading.gif";
import { FetchData } from "../util/redux/Action"; // Importing action creator
import { useDispatch, useSelector } from "react-redux";

// Functional component for the Home page
export default function Home() {
  const dispatch = useDispatch();
  
  // Retrieving data from Redux store
  const books = useSelector((data) => {
    return data.books;
  });
  const FormData = useSelector((res) => {
    return res.formData;
  });

  const filter = useSelector((data) => {
    return data.search;
  });

  // Fetching data from an API when the component mounts
  useEffect(() => {
    // Checking if books are already available in the Redux store
    if (books.length === 0) {
      // Fetching books data from the API
      axios
        .get("https://reactnd-books-api.udacity.com/books", {
          headers: { Authorization: "whatever-you-want" },
        })
        .then((res) => {
          const data = res.data.books;
          console.log(data);
          // Dispatching action to store data in Redux
          dispatch(FetchData(data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  console.log(FormData);

  // Function to open a link in a new window
  const toLink = (e) => {
    window.open(e);
  };

  return (
    <>
      {/* Conditional rendering based on FormData existence */}
      {Object.keys(FormData).length !== 0 ? (
        ""
      ) : (
        <div className="register-msg">Please Register to see the content</div>
      )}
      {/* Displaying books grid or loading animation */}
      <div className={Object.keys(FormData).length !== 0 ? "" : "books-box"}>
        {books.length !== 0 ? (
          <div className="grid-box">
            {/* Filtering and mapping through books data */}
            {books
              .filter((e) => {
                return e.title.toLowerCase().includes(filter.toLowerCase());
              })
              .map((e, i) => {
                return (
                  <div className="book-item" key={i} onClick={() => {
                    toLink(e.previewLink);
                  }}>
                    <img className="books" src={e.imageLinks.thumbnail} alt={e.title} />
                    <p>{e.title}</p>
                    <p className="rate">
                      {e.averageRating ? e.averageRating : "4.69"}⭐
                    </p>
                  </div>
                );
              })}
          </div>
        ) : (
          // Displaying loading animation if books data is not available yet
          <div style={{ textAlign: "center", height: "92vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={loading} alt="Loading" />
          </div>
        )}
      </div>
    </>
  );
}
