import React, { Component } from "react";
import danhSachSanPham from "../Components/BaiTapGioHang/data.json";
import GioHangRedux from "./GioHangRedux";
import SanPhamRedux from "./SanPhamRedux";
import SanPhamGHRedux from "./SanPhamGHRedux";

export default class BaiTapGioHangRedux extends Component {
  renderSanPham = () => {
    return danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPhamRedux sanPham={sanPham} />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <h3 className="text-center">Bài tập giỏ hàng Redux</h3>
          <div className="text-right">Giỏ hàng(0)</div>
          <GioHangRedux />
        </div>
        <div className="row">{this.renderSanPham()}</div>
        <div className="giohang"></div>
      </div>
    );
  }
}
