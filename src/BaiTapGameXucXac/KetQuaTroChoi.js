import React, { Component } from "react";
import { connect } from "react-redux";
import DanhSachXucXac from "./DanhSachXucXac";
class KetQuaTroChoi extends Component {
  renderKetQua = () => {
    // sử udngj thuộc tính this.props.mangXucXac để hiển thị kết quả
    let tongDiem = this.props.mangXucXac.reduce((tongDiemXX, xucXac, index) => {
      return (tongDiemXX += xucXac.so);
    }, 0);
    let ketQua = tongDiem > 9 ? "Tài" : "Xỉu";
    return (
      <div>
        <span className="display-4 text-dark">
          {tongDiem} - {ketQua}
        </span>
      </div>
    );
  };
  render() {
    return (
      <div className="container text-center mt-5">
        <div className="display-4">Kết Quả :{this.renderKetQua()}</div>
        <div className="display-4">
          Bạn chọn: <span className="text-danger">{this.props.banChon}</span>
        </div>
        <div className="display-4">
          Số bàn thắng :
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          Tổng số bàn chơi :
          <span className="text-primary">{this.props.tongSoBanChoi}</span>
        </div>
        <div className="display-4">
          <button
            onClick={() => {
              this.props.playGame();
            }}
            className="btn btn-success p-2 mt-2 "
          >
            Xốc đĩa
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let n = 0;
      // setInterval là hàm thực thi liên tục theo thời gian quy định => thực thi cho đến khi ta cọi clearInterval
      let ranDomXucXac = setInterval(() => {
        const action = {
          type: "RANDOM_XUC_XAC",
        };
        n++;
        if (n == 10) {
          clearInterval(ranDomXucXac);
          // xử lý kết quả
          const actionXLKQ = {
            type: "END_GAME",
          };
          dispatch(actionXLKQ);
        }
        dispatch(action);
      }, 50);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    banChon: state.stateBaiTapGameXucXac.banChon,
    soBanThang: state.stateBaiTapGameXucXac.soBanThang,
    tongSoBanChoi: state.stateBaiTapGameXucXac.tongSoBanChoi,
    mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);
