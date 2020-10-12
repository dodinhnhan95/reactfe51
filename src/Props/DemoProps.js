import React, { Component } from "react";
import FunctionProps from "./FunctionProps";
import ClassProps from "./ClassProps";

export default class DemoProps extends Component {
  state = {
    ten: "Đỗ Đình Nhân",
    lop: "FE51",
  };

  render() {
    return (
      <div>
        <h2>Props</h2>
        <FunctionProps
          // cách truyền props trong reactjs
          hovaTen={this.state.ten}
          lopHoc={this.state.lop}
        />
        <ClassProps hovaTen={this.state.ten} lopHoc={this.state.lop} />
      </div>
    );
  }
}
