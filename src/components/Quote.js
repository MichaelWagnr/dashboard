import React from 'react';

const Quote = () => {

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Different API endpoints to try

    // const endPointA = 'https://api.themotivate365.com/stoic-quote';
    //CORS issue

    const endPointB = 'https://stoicquotesapi.com/v1/api/quotes/random';
    //Returns single quote

    // const endPointC = 'https://stoic-quotes.com/api/quotes';
    //Returns 10 quotes

    // const endPointD = 'https://randomstoicquotesapi.herokuapp.com';
    //Throws JSON error

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    // Change argument to correspond to desired endpoint
    fetch(endPointB)
        .then(data => data.json())
        .then(data => console.log(data));

    return (
        <p>quote</p>
    )
}

export default Quote;