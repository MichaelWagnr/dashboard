import React from 'react';

const Quote = (props) => {
    return (
        <p>{props.quote.body} - {props.quote.author}</p>
    )
}

export default Quote;