import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>ClassProps</h3>
        <p>tên: {this.props.hovaTen}</p>
        <p>lớp: {this.props.lopHoc}</p>
      </div>
    );
  }
}
