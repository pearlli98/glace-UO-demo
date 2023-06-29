// // Listing.js
// import React from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
// import { useState } from "react";

// const Listing = () => {
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   console.log("state: ", state);
//   const [imageIndex, setInmageIndex] = useState(0);

//   const goBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div>
//       {/* <h2>{title}</h2> */}
//       {/* <Link to="/">Go back to Home</Link>
//        */}
//       {/* <button type="button" onClick={goBack}>
//         Go back
//       </button> */}

//       <div
//         style={{
//           backgroundColor: "grey",
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",
//         }}>
//         <ImageList
//           cols={1}
//           style={{
//             backgroundColor: "yellow",
//           }}>
//           {state.item.image_paths.map((item, index) => (
//             <ImageListItem key={item.title}>
//               <img
//                 style={{
//                   width: "100%",
//                   height: "50%",
//                 }}
//                 src={require(`.${item.slice(36)}`)}
//                 srcSet={require(`.${item.slice(36)}`)}
//                 alt={item.title}
//                 loading="lazy"
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>
//         {/* <img
//           // style={{
//           //   width: "50%",
//           //   height: "50%",
//           //   backgroundColor: "green",
//           // }}
//           src={require(`.${state.item.image_paths[imageIndex].slice(36)}`)}
//           srcSet={require(`.${state.item.image_paths[imageIndex].slice(36)}`)}
//           alt={state.item.title}
//         /> */}
//         <h3>{state.item.title}</h3>
//       </div>
//     </div>
//   );
// };

// export default Listing;
