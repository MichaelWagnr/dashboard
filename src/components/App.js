import React from 'react';

import Header from './Header';
import StoicQuote from './StoicQuote';

class App extends React.Component {



    render() {
        return (
            <div className="container">
                <Header />
                <StoicQuote />
            </div>
        )
    }
}

export default App;