import React, { useState } from "react";


export default function Head(){
    const [time, setTime] = useState("");
    const date = new Date();
    const finalDate = `${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`;
    setTimeout(() => {
        setTime(`${date.getHours()} : ${date.getMinutes()}`);    
    }, 1000);
    return(
        <div className="head">
            <div className="heading">
                <img src="/images/to-do-list.png" alt="" />
                <h2>ToDo App</h2>
            </div>
            <div className="dateAndTime">
                <div className="time"><h2>{time}</h2></div>
                <div className="date"><h4>{finalDate}</h4></div>
            </div>
        </div>
    );
}