import React, { Component } from "react";
import DanhSachXucXac from "./DanhSachXucXac";
import KetQuaTroChoi from "./KetQuaTroChoi";
import style from "./BaiTapGameXucXac.module.css";
export default class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div
        className={`${style.fontGameXucXac}`}
        style={{
          backgroundImage: "url(./img/baiTapGameXucXac/bgGame.png)",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <h1 className="display-4 text-center">Bài Tập Game Xúc Xắc </h1>
        <DanhSachXucXac />
        <KetQuaTroChoi />
      </div>
    );
  }
}

// xác đinhn nguồn dữ liệu thay đổi của ứng dụng state . Tổ chức lưu trữ
// + biến tài xỉu : string
// + mảng xúc xắc : [{ma: '', hinhAnh
