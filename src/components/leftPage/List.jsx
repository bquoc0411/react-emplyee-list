import React from "react";
import Item from "./Item";
import arr from "../../EmployeeData";

const MappingData = arr.map(items => 
    <Item
        key={items.id}
        src={items.src}
        alt={items.alt}
        name={items.name}
        job={items.job}
    />
)

const List = () => {
    return (
        <ul className="list-group">
            {MappingData}
        </ul>
    )
}

export default List;
