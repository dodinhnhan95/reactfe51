import React, { Component } from "react";
import SanPhamGHRedux from "./SanPhamGHRedux";

// improt thư viện kết nối react component và redux store
import { connect } from "react-redux";
class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGioHang, index) => {
      return <SanPhamGHRedux spGioHang={spGioHang} />;
    });
  };
  render() {
    console.log("props", this.props);
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th> Ten SP</th>
              <th> Hình Ảnh</th>
              <th>Đơn Giá</th>
              <th>Thành Tiền</th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}

// lấy state từ redux store biến thành props của component
// tham số state: đại diện cho rootReducer
const mapStateToProps = (state) => {
  return {
    gioHang: state.StateBaiTapGioHang.gioHang,
  };
};

export default connect(mapStateToProps)(GioHangRedux); // kết nối giữa gioHangRedux Component và redux store
