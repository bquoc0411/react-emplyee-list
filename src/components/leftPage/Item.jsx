import React from "react";

const Item = (props) => {
    return (
        <li className="list-group-item employee-group">
            <div className="d-flex">
                <div className="p-2">
                    <img className="employee-img" src={props.src} alt={props.alt} />
                </div>
                <div className="p-2">
                    <h3 className="employee-name">{props.name}</h3>
                    <p className="employee-job">{props.job}</p>
                </div>
            </div>
        </li>
    )
}

export default Item;