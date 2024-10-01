import React, { useState } from "react";

export default function Card(props) {
    const [time, setTime] = useState("");
    const date = new Date();
    const [data, modifiedData] = useState(props.entry);
    const [isModify, modify] = useState(false);
    const finalDate = `${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`;
    setTimeout(() => {
        setTime(`${date.getHours()} : ${date.getMinutes()}`);    
    }, 1000);
    const modifying = () => {
        modify(!isModify);
    };
    return (
        <div className="mainCard">
            <div className="dateBox">
                <b>{finalDate}</b><br/>
                <p>{time}</p>
            </div>
            <div className="card">
                {
                    isModify ? (<><input
                        type="text"
                        name="task"
                        id="task"
                        className="taskField"
                        value={data}
                        onChange={(event) => {
                            modifiedData(event.target.value);
                            if (event.target.value !== "")
                                props.getData(event.target.value, props.index);
                            else
                                props.getData(props.entry, props.index);
                        }}
                    />
                        <button onClick={modifying}>Save</button></>
                    ) :
                        (<>
                            <div><p>{data}</p></div>
                            <button onClick={modifying}>Edit</button>
                        </>
                        )

                }
                <button onClick={props.delete}>Delete</button>
            </div>
        </div>
    )
}