// import "./App.css";
// import { useEffect, useState } from "react";
// import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Listing from "./Listing";
// import { sendGET } from "./api_utils";

require("./App.css");
const { useEffect, useState } = require("react");
const { ImageList, ImageListItem, ImageListItemBar } = require("@mui/material");
const { BrowserRouter: Router, Route, Routes } = require("react-router-dom");
const Listing = require("./Listing");
const { sendGET } = require("./api_utils");

function Home({ results, updateResults }) {
  const [keyword, setKeyword] = useState("");
  // const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchQuery = (e) => {
    e.preventDefault();
    sendGET("/get_best_images?", { q: keyword }).then((res) => {
      updateResults(res.results);
    });
  };

  // use effect for results
  useEffect(() => {
    if (results.length > 0) {
      setLoading(false);
    }
  }, [results]);

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
            position: "absolute",
            // backgroundColor: "yellow",
            top: 20,
          }}>
          <b
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
            }}>
            UO powered by glace
          </b>
          <form
            style={{
              display: "flex",
              width: "30%",
            }}
            onSubmit={searchQuery}>
            <input
              className="Search-bar"
              key="search-bar"
              value={keyword}
              placeholder={"colorful graphic tshirt"}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "medium",
              }}
              type="submit">
              Search
            </button>
          </form>
        </div>
        <hr
          style={{
            width: "100%",
            position: "absolute",
            top: 55,
            color: "gainsboro",
          }}
        />
        <div>
          {results.length > 0 && !loading && (
            <ImageList
              style={{
                paddingTop: 60,
                marginLeft: 40,
                marginRight: 40,
              }}
              cols={3}>
              {results.map((item) => (
                <ImageListItem
                  onClick={() => {
                    window.open(
                      item.link
                      // "https://www.urbanoutfitters.com/shop/hoka-one-one-clifton-9-sneaker?category=SEARCHRESULTS&color=048&searchparams=q%3Dhoka%2520one&type=REGULAR&quantity=1"
                    );
                    // navigate("/listing", { state: { item } });
                  }}
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                  }}
                  key={item.img}
                  title={item.title}
                  position="bottom">
                  <img
                    src={item.image_paths[0]}
                    // src={require(`.${item.image_paths[0].slice(36)}`)}
                    // srcSet={require(`.${item.image_paths[0].slice(36)}`)}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    sx={{
                      color: "black",
                      textAlign: "left",
                    }}
                    title={item.title}
                    subtitle={item.formatted_address}
                    position="below"
                    actionPosition="left"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </div>
      </header>
    </div>
  );
}

function App() {
  const [results, setResults] = useState([]);
  const updateResults = (newResults) => {
    setResults(newResults);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home results={results} updateResults={updateResults} />}
        />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </Router>
  );
}

export default App;
