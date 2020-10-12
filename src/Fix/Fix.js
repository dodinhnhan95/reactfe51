import React, { Component } from "react";

export default class Fix extends Component {
  danhSachKhoaHoc = ["NodeJS", "ReactJS", "VueJS"];
  renderDanhSachKhoaHoc = () => {
    return this.danhSachKhoaHoc.map((khoaHoc, index) => {
      return <li key={index}>{khoaHoc}</li>;
    });
  };
  render() {
    return (
      <div>
        <h2>List And Keys</h2>
        <h3> Danh Sách khóa học</h3>
        <ul>{this.renderDanhSachKhoaHoc()}</ul>
      </div>
    );
  }
}
