import React, { Component } from "react";
import {connect} from 'react-redux';


class Doggy extends Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Dog Saga</h1>
          <img src={dog} className="App-logo" alt="logo" />
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      fetching: state.dogs.fetching,
      dog: state.dogs.dog,
      error: state.dogs.error
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
    };
  };

const Dogs = connect(mapStateToProps, mapDispatchToProps)(Doggy);

export default Dogs;