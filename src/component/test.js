import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [1, 2, 3],
      positiv: ["-1", "-2", "-3"],
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.positiv.map((num) => (
            <li> {num} </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Test;
