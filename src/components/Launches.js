import React from 'react';

const Launches = props => {
    return (
        <div className='launch-data'>
            <p>FLIGHT NUMBER: {props.launch.flight_number}</p>
            <p>LAUNCH YEAR: {props.launch.launch_year}</p>
            <p>LAUNCH DATE: {props.launch.launch_date_utc}</p>
        </div>
    )
}

export default Launches;