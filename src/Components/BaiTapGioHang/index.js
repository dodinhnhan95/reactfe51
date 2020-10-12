/**
 * Các bước thực hiện :
 * 1. dàn layout(html css) - done
 * 2. xác định dữ liệu thay đổi và lưu vào state
 * 3. lấy data trong state đi binding ra jsx
 * 4. render danh sách sản phầm
 * 5. xây dựng chức năng thêm vào giỏ hàng
 * 6. xây dựng chức năng chi tiết
 * 7. xây dựng chức năng tăng giảm số lượng
 * 8. xây dựng chức năng xóa sản phẩm khỏi dỏ hàng
 * 9. xây dựng chức năng hiển thị tổng số sản phẩm trong giỏ hàng
 */
import React, { Component } from "react";
import SanPham from "./SanPham";
import danhSachSanPham from "./data.json";
import Modal from "./Modal";

export default class BaiTapGioHang extends Component {
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    cardList: [],
    // soSP: 0,
  };
  //   chucNangCong = () => {
  //     // console.log("đã liên kết thành công");
  //     // let cardList = [...this.state.cardList];
  //     // for (let i in cardList)
  //     //   cardList[i].thanhTien =
  //     //     Number(cardList[i].soLuong) * Number(cardList[i].giaBan);
  //     this.setState({
  //       cardList,
  //     });
  //   };

  handleSanPhamChiTiet = (sanPhamChiTiet) => {
    this.setState({
      sanPhamChiTiet,
    });
  };
  // hàm này dùng để truyền vào trong props để đưa vào trong SanPham
  handleCardList = (sanPham) => {
    // sanPham là đối tượng mẫu trên màn hình ta click vào
    // tìm vị trí
    const index = this.state.cardList.findIndex((card) => {
      // là đối tượng trong danh sách đã chọn mà ta so sánh cùng với sanPham xem có trùng nhau không
      return card.maSP === sanPham.maSP;
    });
    let cardList = [...this.state.cardList];
    if (index !== -1) {
      // tìm thấy tăng số lượng
      cardList[index].soLuong += 1;
      //   cardList[index].thanhTien =
      //     Number(cardList[index].soLuong) * Number(cardList[index].giaBan);
    } else {
      // không tìm thấy thì thêm vào mảng và cập nhật số lượng
      const newCard = {
        ...sanPham,
        soLuong: 1,
        // thanhTien: sanPham.giaBan,
      };
      cardList = [...cardList, newCard];
    }
    this.setState({
      cardList,
    });
  };
  renderDanhSachSanPham = () => {
    return danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <SanPham
            // các props truyền vào
            product={sanPham}
            xyLyChiTiet={this.handleSanPhamChiTiet}
            handleCardList={this.handleCardList}
            UpcCick={this.upNumberproduct}
          />
        </div>
      );
    });
  };

  Delete = (sanPham) => {
    let cardListUpdate = [...this.state.cardList];
    let Update = cardListUpdate.filter((card) => card.maSP !== sanPham.maSP);
    this.setState({
      cardList: Update,
    });
  };

  handleUpDownQuantity = (sanPham, UpDown) => {
    let cardListUpdate = [...this.state.cardList];
    let index = cardListUpdate.findIndex((card) => card.maSP === sanPham.maSP);
    if (UpDown) {
      cardListUpdate[index].soLuong += 1;
    } else {
      if (cardListUpdate[index].soLuong > 1) {
        cardListUpdate[index].soLuong -= 1;
      }
    }
    this.setState({
      cardList: cardListUpdate,
    });
  };
  //   SanPhamChon = () => {
  //     for (let i in this.cardList) {
  //       let tongSP = 0;
  //       let soLuongChon = this.cardList[i].soLuong;
  //       tongSP += Number(soLuongChon);
  //       console.log("soLuong sp da chon", tongSP);
  //     }
  //   };
  render() {
    let totalQuantity = this.state.cardList.reduce((total, sanPham, index) => {
      return (total += sanPham.soLuong);
    }, 0);
    let tongTien = this.state.cardList.reduce((tongsoTien, sanPham, index) => {
      return (tongsoTien += sanPham.soLuong * sanPham.giaBan);
    }, 0);
    return (
      <div>
        <section className="container">
          <h3 className="title text-center">Bài tập giỏ hàng</h3>
          <div className="container text-center my-2">
            <button
              className="btn btn-danger "
              data-toggle="modal"
              data-target="#modelId"
            >
              Giỏ hàng ({totalQuantity} - {tongTien})
            </button>
          </div>
          <div className="container danh-sach-san-pham">
            <div className="row">{this.renderDanhSachSanPham()}</div>
          </div>
          <Modal
            cardList={this.state.cardList}
            soLuongSP={this.state.tongSP}
            XuLyChucNangTangGiam={this.handleUpDownQuantity}
            XuLyChucNangXoa={this.Delete}
          />
          <div className="row">
            <div className="col-sm-5">
              <img
                className="img-fluid"
                src={this.state.sanPhamChiTiet.hinhAnh}
                alt
              />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{this.state.sanPhamChiTiet.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{this.state.sanPhamChiTiet.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{this.state.sanPhamChiTiet.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
