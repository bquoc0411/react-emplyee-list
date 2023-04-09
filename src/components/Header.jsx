import React from "react";

const Header = (props) => {
    return (
        <div className="header-group">
            <h1 className="position-absolute">{props.icon}</h1>
            <h1 className='text-center header'>{props.title}</h1>
        </div>
    )
}

export default Header; 