import React ,{ useState } from 'react';
import bread from "./bread.png";
import restaurant from "./restaurant.png";
import hotel from "./hotel.png";
import supermarket from "./supermarket.png";

const Link =() =>{
  const [selected, setselected] = useState("");
// const toggleClass= (e)=>{
//     setselected( e.target.id)
//        }
   const divs = [
        { id: "d-1", imgUrl: bread, text: "نانوایی و قنادی" },
        { id: "d-2", imgUrl: restaurant, text: "رستوران و کافه" },
        { id: "d-3", imgUrl: hotel, text: "هتل" },
        { id: "d-4", imgUrl: supermarket, text: " سوپر مارکت" },
      ];
  return(
    <div className="container-card">
           {divs.map((el) => (
            <div
              key={el.id}
              onClick={()=>{
                setselected(el.id)
              }}
              id={el.id}
              className={`card ${selected === el.id ? "active" : ""}`}
            >
              <img className="img-card" src={el.imgUrl}/>
              <p className="text-card">{el.text}</p>
            </div>
          ))}
        </div>
  )
}

export default Link;


// import React, { useState } from "react";
// import bread from "./bread.png";
// import restaurant from "./restaurant.png";
// import hotel from "./hotel.png";
// import supermarket from "./supermarket.png";

// const Link = ({ key, url, onClick, selected }) => {
//   const divs = [
//     { id: "d-1", imgUrl: bread, text: "نانوایی و قنادی" },
//     { id: "d-2", imgUrl: restaurant, text: "رستوران و کافه" },
//     { id: "d-3", imgUrl: hotel, text: "هتل" },
//     { id: "d-4", imgUrl: supermarket, text: " سوپر مارکت" },
//   ];
//   return (
//     <div className="container-card">
//       {divs.map((el) => (
//         <div
//           key={el.id}
//           onClick={onClick}
//           id={el.id}
//           className={`card ${selected === el.id ? "active" : ""}`}
//         >
//           <img className="img-card" src={el.imgUrl}/>
//           <p className="text-card">{el.text}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Link;
{
  /* <div id="d-2" onClick={onClick} className={`card ${selected === "d-2" ? 'active' : null}`} > */
}
{
  /* <img className="img-card" src={url.imgUrl}/> */
}
{
  /* <p className="text-card">jsj</p>
        </div> */
}
// import React ,{ useState } from 'react'

//  const Link = ({url,onClick,classes,key}) => {
//     // const [active, setActive] = useState(false);
//     return (
//         // <div onClick={() => setActive(prev => !prev)} className={`card ${active ? 'active' : null}`}>
//             // <div className="card">
//             <div onClick={onClick} className={`card ${classes === key ? 'active' : null}`}>

//             {/* <a className="link-card" href="#"> */}
//             <img className="img-card" src={url.imgUrl}/>
//             <p className="text-card">{url.text}</p>
//             {/* </a> */}
//         </div>
//     )
// }
// export default Link;
// // onclick={toggleClass}
