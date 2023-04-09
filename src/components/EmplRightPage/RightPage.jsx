import React from "react";
import arr from "../../EmployeeData";
import Header from "../Header";
import Details from "./Details";
import Info from "./Info";

const RightPage = () => {
    return (
        <div className='col-lg-6 col-md-6'>
            <Header
                icon={<i className="fa-solid fa-angle-left" />}
                title='Employee'
            />
            <ul className='list-group'>
                <Info
                    src={arr[0].src}
                    alt={arr[0].alt}
                    name={arr[0].name}
                    job={arr[0].job}
                />
                <Details
                    typeContact='Call office'
                    office={arr[0].telOffice}
                />
                <Details
                    typeContact='Call Moblie'
                    office={arr[0].telMobile}
                />
                <Details
                    typeContact='SMS'
                    office={arr[0].sms}
                />
            </ul>
        </div>
    )
}

export default RightPage