import React, { Component, Suspense } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      total: "",
    };
  }

  sum() {
    console.log("Num1: ", this.state.num1, " - Num2: ", this.state.num2);
    this.setState({
      total: parseInt(this.state.num1) + parseInt(this.state.num2),
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Add Two Numbers</h1>
        <input
          type="text"
          value={this.state.num1}
          onChange={(e) => {
            this.setState({ num1: e.target.value });
          }}
        />
        <input
          type="text"
          value={this.state.num2}
          onChange={(e) => {
            this.setState({ num2: e.target.value });
          }}
        />

        <button
          onClick={() => {
            this.sum();
          }}
        >
          Click Me!
        </button>

        <p>{this.state.total}</p>
      </div>
    );
  }
}

export default App;
