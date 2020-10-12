import React, { Component } from "react";

export default class extends Component {
  danhSachKhoaHoc = ["NodeJS", "ReactJS", "VueJS"];
  renderDanhSachKhoaHoc = () => {
    this.danhSachKhoaHoc.map((khoaHoc, index) => {
      return this.danhSachKhoaHoc.map((khoaHoc, index) => {
        return <li>{khoaHoc}</li>;
      });
    });
  };
  render() {
    return (
      <div>
        <h2>List And Keys</h2>
        <h3> Danh Sách khóa học</h3>
        <ul>
          <li>NodeJS</li>
          <li>ReactJS</li>
          <li>VueJS</li>
        </ul>
      </div>
    );
  }
}
