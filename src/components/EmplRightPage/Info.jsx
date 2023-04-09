import React from "react";

const Info = (props) => {
    return (
        <li className="list-group-item" key={props.id}>
            <div className="d-flex justify-content-center align-items-center">
                <div className="p-2 info-group">
                    <img className="person-employee-img" src={props.src} alt={props.alt} />
                </div>
                <div className="p-2 info-group">
                    <h3 className="person-employee-name">{props.name}</h3>
                    <p className="person-employee-job">{props.job}</p>
                </div>
            </div>
        </li>
    )
}

export default Info;