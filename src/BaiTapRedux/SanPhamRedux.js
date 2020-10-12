import React, { Component } from "react";
import { connect } from "react-redux";
class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;

    return (
      <div classname="card text-left">
        <img
          style={{ width: "100%", height: 400 }}
          classname="card-img-top"
          src={sanPham.hinhAnh}
          alt={sanPham.hinhAnh}
        />
        <div classname="card-body">
          <h4 classname="card-title">{sanPham.tenSP}</h4>
          <p classname="card-text">{sanPham.giaBan}</p>
          <button
            onClick={() => {
              this.props.themGioHang(sanPham);
            }}
            className="btn btn-danger"
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
// hàm này dùng để láy giá trị về
const mapStatetoProps = (state) => {
  return {};
};
// hàm tạo ra 1 hàm xử lý để đưa giá trị lên redux
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      // từ sản phẩm được click => tạo ra sp giỏ hàng
      let spGH = { ...sanPhamClick, soLuong: 1 };
      // để gửi giá trị lên reducer cần 1 object có thuộc tính type để phân biệt state nào thay đổi

      // action là một object gồm 1 type và 1 spGH là giá trị gửi đi
      let action = {
        type: "THEM_GIO_HANG", // thuộc tính bắt buộc
        spGH: spGH, // giá trị gửi đi payload
      };
      // dùng hàm Dispatch mà redux cung cấp đưa action lên reducer
      dispatch(action);
      console.log(sanPhamClick);
    },
  };
};
// tham số 1 hàm connect là 1 hàm (callback): lấy giá trij từ reducer về
// tham số 2: hàm connect là 1 hàm (callback): đưa các giá trị lên reducer
export default connect(mapStatetoProps, mapDispatchToProps)(SanPhamRedux);
