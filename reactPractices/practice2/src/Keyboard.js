import React from 'react'

 function Keyboard ({addInput , calculate}) {
    return (
        <div className="container-keyboard">
            <div style={{display:"flex", flex:1}}>
                <div className="parent-btn">
                    <div className="btn" onClick={()=>{addInput("7")}}>7</div>
                </div>
                <div className="parent-btn">
                    <div className="btn" onClick={()=>{addInput("8")}}>8</div>
                </div>
                <div className="parent-btn">
                    <div className="btn" onClick={()=>{addInput("9")}}>9</div>
                </div>
                <div className="parent-btn">
                    <div className="btn" onClick={()=>{addInput("/")}}>÷</div>
                </div>
            </div>
            <div style={{display:"flex", flex:1}}>
                <div className="parent-btn">
                    <div className="btn" onClick={()=>{addInput("4")}}>4</div>
                </div>
                <div className="parent-btn">
                    <div className="btn" onClick={()=>{addInput("5")}}>5</div>
                </div>
                <div className="parent-btn">
                    <div className="btn" onClick={()=>{addInput("6")}}>6</div>
                </div>
                <div className="parent-btn">
                    <div className="btn" onClick={()=>{addInput("*")}}>×</div>
                </div>
            </div>
            <div style={{display:"flex", flex:1}}>
                <div className="parent-btn">
                    <div className="btn" onClick={()=>{addInput("1")}}>1</div>
                </div>
                <div className="parent-btn">
                    <div className="btn" onClick={()=>{addInput("2")}}>2</div>
                </div>
                <div className="parent-btn">
                    <div className="btn" onClick={()=>{addInput("3")}}>3</div>
                </div>
                <div className="parent-btn">
                    <div className="btn" onClick={()=>{addInput("-")}}>-</div>
                </div>
            </div>
            <div style={{display:"flex", flex:1}}>
                <div className="parent-btn">
                    <div className="btn" onClick={()=>{addInput("0")}}>0</div>
                </div>
                <div className="parent-btn">
                    <div className="btn" onClick={()=>{addInput(".")}}>.</div>
                </div>
                <div className="parent-btn">
                    <div className="btn" onClick={()=>{calculate()}}>=</div>
                </div>
                <div className="parent-btn">
                    <div className="btn" onClick={()=>{addInput("+")}}>+</div>
                </div>
            </div>
                
                   
        </div>
    )
}
export default Keyboard