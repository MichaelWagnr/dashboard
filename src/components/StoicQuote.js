import React from 'react';

const StoicQuote = () => {

    // const endPoint = 'https://justcors.com/tl_e2be2d9/https://api.themotivate365.com/stoic-quote';
    const endPoint = 'https://api.themotivate365.com/stoic-quote';

    // console.log(endPoint);

    fetch(endPoint)
        .then(response => {
            // console.log(response);
            response.json();
        })
        .then(data => console.log(data));

    return (
        <p>Quote</p>
    )
}

export default StoicQuote;