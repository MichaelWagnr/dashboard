import React from 'react';

import Header from './Header';
import Quote from './Quote';

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            quote: ""
        }
    }

    componentDidMount() {
        fetch('https://stoicquotesapi.com/v1/api/quotes/random')
            .then(data => data.json())
            .then(data => this.setState({
                quote: data
            }))
    }

    render() {
        return (
            <div className="container">
                <Header />
                <Quote quote={this.state.quote} />
            </div>
        )
    }
}

export default App;