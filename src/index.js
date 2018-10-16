import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class MyComp extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

ReactDOM.render(<MyComp />, document.getElementById("row1"));
