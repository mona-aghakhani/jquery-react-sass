import React ,{ useState } from 'react';
import Link from './Link';
// import bread from "./bread.png";
// import restaurant from "./restaurant.png";
// import hotel from "./hotel.png";
// import supermarket from "./supermarket.png";
const Footer = () =>{
// const [selected, setselected] = useState("");
// const toggleClass= (e)=>{
//     setselected( e.target.id)
//        }
    return(
        <div className="footer">
            <h3 className="title-footer">بهترین همراهان ما</h3>
            <div >
                <Link />
            </div>
        </div>
    )
}
export default Footer;
{/* <Link selected={selected} onClick={toggleClass}/> */}
// import React ,{ useState } from 'react'
// import Link from './Link'
// import bread from "./bread.png";
// import restaurant from "./restaurant.png";
// import hotel from "./hotel.png";
// import supermarket from "./supermarket.png";



// const Footer = () => {
//     const [urls, setUrls] = useState([{imgUrl: bread,text:"نانوایی و قنادی"},{imgUrl:restaurant,text:"رستوران و کافه"},{imgUrl:hotel,text:"هتل"},{imgUrl:supermarket,text:" سوپر مارکت"}])
//    const [active, setActive] = useState(false)
//    const toggleClass= (e)=>{
//     setActive({active: e.target.index})
//    }
//     return (
//         <div className="footer">
//             <h3 className="title-footer">بهترین همراهان ما</h3>
//             <div  className="container-card">
//             {urls.map((url,index)=>(
//                 <Link classes={active} onClick={toggleClass}  key={index} url={url}/>
//             ))}
//             </div>
            
//         </div>
//     )
// }
// export default Footer;