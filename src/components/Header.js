import React from 'react';

const Header = () => {

    const time = new Date();
    const hours = time.getHours();

    return (
        <h1>{(hours >= 18)
            ? "Good Evening"
            : (hours < 12)
                ? "Good Morning"
                : "Good Afternoon"} Michael</h1>
    )
}

export default Header;