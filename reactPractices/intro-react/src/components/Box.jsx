import React from 'react';

// import user from "./user.png";
import leaf from "./leaf.png";
// import coins from "./coins.png";
const Box = ({subTitle,url,...props}) => {
    return (
        <div className="box">
        <div className="circle">
            <img className="img" src={url.imgUrl} />
        </div>
        <p className="headBox">{url.text}</p>
        </div>
    )

}
export default Box;
 {/* <div className="card">
        <div className="circle">
            <img src="" alt=""/>
        </div>
        <h4>اسراف کمتر</h4>
    </div>
    <div className="card">
        <div className="circle">
            <img src="" alt=""/>
        </div>
        <h4>مشتریان جدید</h4>
    </div>
    <div className="card">
        <div className="circle">
            <img src="" alt=""/>
        </div>
        <h4>درآمد بیشتر</h4>
    </div> */}
