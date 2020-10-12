import React, { Component } from "react";
import SanPhamGHRedux from "./SanPhamGHRedux";

// improt thư viện kết nối react component và redux store
import { connect } from "react-redux";
class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGioHang, index) => {
      return (
        <tr>
          <td>{spGioHang.maSP}</td>
          <td>{spGioHang.tenSP}</td>
          <td>
            <img src={spGioHang.hinhAnh} width={50} />
          </td>
          <td>
            {" "}
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(spGioHang.maSP, true);
              }}
            >
              +
            </button>
            {spGioHang.soLuong}{" "}
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(spGioHang.maSP, false);
              }}
            >
              -
            </button>
          </td>
          <td>{spGioHang.giaBan}</td>
          <td>{spGioHang.soLuong * spGioHang.giaBan}</td>
          <td>
            <button
              onClick={() => {
                this.props.xoaGioHang(spGioHang.maSP);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
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
              <th> Số Lượng</th>
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
const mapDispatchTopProps = (dispatch) => {
  return {
    xoaGioHang: (maSPClick) => {
      console.log(maSPClick);
      // tạo ra action gửi len reducer
      const action = {
        type: "XOA_GIO_HANG",
        maSPClick,
      };
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, tangGiam) => {
      console.log(maSP, tangGiam);
      const action = {
        type: "TANG_GIAM_SOLUONG",
        maSP,
        tangGiam,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(GioHangRedux); // kết nối giữa gioHangRedux Component và redux store
