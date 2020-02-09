import React, { Component } from 'react';
import Quote from './components/Quote/Quote'

import API from './utils/API'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      quote: ""
    }
  }

  componentDidMount = () => {
    this.refreshQuote()
  }

  refreshQuote = (e) => {

    this.setState({ isLoading: true })

    API.get("https://api.kanye.rest/")
    .then(res => {
      let quote = res.data.quote
      this.setState({
        isLoading: false,
        quote: quote
      })
    })
    .catch( e => {
      console.log(`😱 Axios request failed: ${e}`)
    })

  }

  render = () => {

    const { isLoading, quote } = this.state

    return (
      <span className="kanypress">
        <Quote isLoading={isLoading} quote={quote}></Quote>
        <button onClick={this.refreshQuote}></button>
      </span>
    );
  }

}

export default App;
