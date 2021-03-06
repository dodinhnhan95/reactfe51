// state của bài tập game xúc xắc
const stateDefault = {
  banChon: "Xỉu",
  mangXucXac: [
    { so: 1, hinhAnh: "./img/BaiTapGameXucXac/1.png" },
    { so: 1, hinhAnh: "./img/BaiTapGameXucXac/1.png" },
    { so: 1, hinhAnh: "./img/BaiTapGameXucXac/1.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};
const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon = action.taiXiu;
      return { ...state };
    }
    case "RANDOM_XUC_XAC": {
      // xử lý tạo ra 3 con xúc xắc ngẫu nghiên gửi lại cho mangXucXac
      let mangXucXacNgauNhien = [];
      // chạy vòng lập 3 lần
      for (var i = 0; i < 3; i++) {
        const soNgauNhien = Math.floor(Math.random() * 6) + 1;
        // từ số ngẫu nhiên tạo ra súc sắc ngẫu nhiên
        const xucXacNgauNhien = {
          so: soNgauNhien,
          hinhAnh: `./img/BaiTapGameXucXac/${soNgauNhien}.png`,
        };
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNgauNhien;
      return { ...state };
    }
    case "END_GAME": {
      console.log(action);
      // tính tổng điểm các số trong mảng xúc xắc
      let tongDiem = state.mangXucXac.reduce((tongDiemXX, xucXac, index) => {
        return (tongDiemXX += xucXac.so);
      }, 0);

      // cách 2
      // let tongDiem = 0;
      // for (let i=0; i<state.mangXucXac.length; i++)
      // { tongDiem +=state.mangXucXac[i].so}

      if (
        (tongDiem > 9 && state.banChon === "Tài") ||
        (tongDiem <= 9 && state.banChon === "Xỉu")
      ) {
        state.soBanThang += 1;
      }
      state.tongSoBanChoi += 1;
      return { ...state };
    }
  }
  return { ...state };
};
export default BaiTapGameXucXacReducer;
