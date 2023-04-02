import React from "react";
import { FaChevronRight } from 'react-icons/fa';

const Details = (props) => {
    return (
        <li className="list-group-item employee-group">
            <div className="d-flex align-items-center">
                <div className="p-2">
                    <h3>{props.typeContact}</h3>
                    <p>{props.office}</p>
                </div>
                <div className="p-2 ms-auto">
                    <h3>
                        <FaChevronRight />
                    </h3>
                </div>
            </div>
        </li>
    )
}

export default Details;