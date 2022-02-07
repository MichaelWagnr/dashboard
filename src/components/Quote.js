import React from 'react';

const Quote = () => {

    const endPoint = 'https://api.themotivate365.com/stoic-quote';

    let response = {}

    fetch(endPoint)
        .then(response => {
            // console.log(response);
            response.json();
        })
        .then(data => {
            console.log(data)
            response = data;
        }
        );

    return (
        <p>{response}</p>
    )
}

export default Quote;