import React, { Component } from "react";

export default class SanPham extends Component {
  handleDetail = () => {
    console.log("run");
    const currentProduct = this.props.product;
    this.props.xyLyChiTiet(currentProduct);
  };
  // NumberClick = () => {
  //   console.log("chạy");
  //   // this.props.UpcCick();
  // };

  render() {
    // console.log(this.props);
    return (
      <div>
        <div className="card">
          <img
            className="card-img-top"
            src={this.props.product.hinhAnh}
            alt="hinh dep"
          />
          <div className="card-body">
            <h4 className="card-title">{this.props.product.tenSP}</h4>
            <button className="btn btn-success" onClick={this.handleDetail}>
              Chi Tiết
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.handleCardList(this.props.product);
                // this.NumberClick();
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
