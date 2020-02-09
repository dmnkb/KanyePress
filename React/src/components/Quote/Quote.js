import React, { Component } from 'react';

export default class Quote extends Component {

  render = () => {

    const { quote, isLoading } = this.props;
    const loadingMessage = "..."

    return (
      <span className="kanypress--quote">{isLoading ? loadingMessage : quote}</span>
    )
  }

}
