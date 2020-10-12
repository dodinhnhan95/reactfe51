import React, { Component } from "react";

export default class Databinding extends Component {
  hocVien = {
    // thuộc tính của lớp đối tượng => Sử dụng được nhiều phương thức trong đối tượng
    ma: 1,
    avatar: "https://picsum.photos/200/200",
    tenHocVien: "NgUyễn Văn A",
  };
  // phương Thức => phương thức có thể gọi trong các phương thức hác của lớp đối tương

  renderHocVien = () => {
    return (
      <div className="card text-white bg-primary w-50">
        <img className="card-img-top" src={this.hocVien.avatar} alt />
        <div className="card-body">
          <h4 className="card-title">
            Tên học Viên: {this.hocVien.tenHocVien}
          </h4>
          <p className="card-text">Mã số: {this.hocVien.ma}</p>
        </div>
      </div>
    );
  };

  render() {
    // Binding data la bien
    let title = "CYBERSOFT";
    let imgSrc = `https://picsum.photos/200/200`;
    // biding data la ham
    const renderImg = () => {
      // giá trị hàm muốn render ra giao diện phải trả về chuỗi, số hoặc jsx
      return (
        <div className="card text-white bg-primary">
          <img className="card-img-top" src={imgSrc} alt />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
          </div>
        </div>
      );
    };

    return (
      <div>
        <div id="title">
          {title}
          <div className="w-25">
            <img src={imgSrc} />
          </div>
        </div>
        <input className="w-25 form-control" value={title} />
        databinding
        <div className="w-25">{renderImg()}</div>
        <ul>
          <li>Mã Học viên:{this.hocVien.ma}</li>
          <li>Tên Học Viên:{this.hocVien.tenHocVien}</li>
          <li>
            Hình ảnh: <img src={this.hocVien.avatar} width="200" height="200" />
          </li>
        </ul>
        <ul>{this.renderHocVien()}</ul>
      </div>
    );
  }
}
