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
  const [loading, setLoading] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  const searchQuery = (e) => {
    setLoading(true);
    setImageLoading(true);
    e.preventDefault();
    sendGET("", { q: keyword }).then((res) => {
      updateResults(res.results);
    });
  };

  // use effect for results
  useEffect(() => {
    if (results.length > 0) {
      setLoading(false);
    }
  }, [results]);

  const handleImageLoad = (e) => {
    setImageLoading(false);
  };

  return (
    <div
      className="App"
      style={{
        width: "100%",
      }}>
      <header className="App-header">
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 55,
            flexDirection: "row",
            justifyContent: "space-around",
            position: "absolute",
            // backgroundColor: "green",
            alignItems: "center",
            top: 10,
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}>
            <b
              style={{
                color: "black",
                display: "flex",
                alignItems: "center",
                fontSize: 30,
              }}>
              URBAN OUTFITTERS
            </b>
            <p
              style={{
                marginLeft: 20,
                color: "black",
                fontSize: 25,
              }}>
              powered by Glaze
            </p>
          </div>
          <div
            style={{
              // width: "500px",
              display: "flex",
              flexDirection: "row",
              // backgroundColor: "blue",
              alignItems: "center",
              justifyContent: "space-between",
              height: 45,
              width: 500,
            }}>
            <form
              onSubmit={searchQuery}
              style={{
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                height: "100%",
                width: "100%",
              }}>
              <input
                className="Search-bar"
                key="search-bar"
                value={keyword}
                placeholder={"colorful graphic tshirt"}
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
              />
              {/* <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}> */}

              {/* </div> */}
            </form>
            <img
              src={require("./assets/search1.png")}
              alt={"wrong!"}
              loading="lazy"
              type="submit"
              style={{
                marginLeft: 10,
                width: 30,
                height: 30,
              }}
              onClick={(e) => {
                searchQuery(e); // Manually trigger form submission
              }}
            />
          </div>
        </div>
        <hr
          style={{
            width: "100%",
            position: "absolute",
            top: 60,
            color: "gainsboro",
          }}
        />
        {loading === null && (
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              fontSize: 25,
              color: "grey",
              // fontStyle: "italic",
            }}>
            First time loading can take up to 15 seconds, {"\n"}
            Thank you for waiting!
          </div>
        )}
        {!loading && results.length !== 0 && (
          <div
            style={{
              backgroundColor: "transparent",
            }}>
            {results.length > 0 && !loading && (
              <ImageList
                style={{
                  paddingTop: 60,
                  marginLeft: 40,
                  marginRight: 40,
                }}
                sx={{
                  "@media (max-width: 768px)": {
                    cols: 2,
                  },
                  "@media (max-width: 480px)": {
                    cols: 1,
                  },
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
                      onLoad={handleImageLoad}
                    />
                    {!imageLoading && (
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
                    )}
                  </ImageListItem>
                ))}
              </ImageList>
            )}
          </div>
        )}
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
