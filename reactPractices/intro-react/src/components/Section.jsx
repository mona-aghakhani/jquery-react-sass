import React ,{ useState } from "react";
import Box from "./Box";

import leaf from "./leaf.png";
import user from "./user.png";
import coins from "./coins.png";

const Section = () => {
    // images={
    //     imgurl: leaf
    // }
    const [urls, setUrls] = useState([{imgUrl: leaf ,text: "اسراف کمتر"},{imgUrl: user ,text: "مشتریان جدید"  },{imgUrl: coins, text: "درآمد بیشتر"  }])
    // const [urls, setUrls]= useState({imgUrl: leaf })
  return (
    <div className="section">
      {urls.map((url,index)=>(
        <Box  key={index} url={url} />
      ))}
      
    {/* <Box subTitle="مشتریان جدید" src={user} /> */}
    {/* <Box subTitle="درآمد بیشتر " src={coins} /> */}
{/* 
      <div className="card">
        <div className="circle">
          <img src="" alt="" />
        </div>
        <h4>اسراف کمتر</h4>
      </div>
      <div className="card">
        <div className="circle">
          <img src="" alt="" />
        </div>
        <h4>مشتریان جدید</h4>
      </div>
      <div className="card">
        <div className="circle">
          <img src="" alt="" />
        </div>
        <h4>درآمد بیشتر</h4>
      </div> */}
    </div>
  );
};
export default Section;
