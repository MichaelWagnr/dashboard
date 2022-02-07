import React from 'react';

import Header from './Header';
import Quote from './Quote';

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Header />
                <Quote />
            </div>
        )
    }
}

export default App;