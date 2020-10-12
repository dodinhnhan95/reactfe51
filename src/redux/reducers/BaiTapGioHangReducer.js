const stateDefaut = {
  gioHang: [],
};

// hàm reducer trả về state của ứng dụng
const BaiTapGioHangReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      // xử lý cập nhật lại state
      let gioHangUpdate = [...state.gioHang];
      // tìm sp có trong giỏ hàng hay không
      const index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSP === action.spGH.maSP
      );
      if (index !== -1) {
        gioHangUpdate[index].soLuong += 1;
      } else {
        gioHangUpdate.push(action.spGH);
      }
      // gán lại state cũ = giá trị mới tương đương với viêc setState tại component
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangUpdate = [...state.gioHang];
      // xử lý xóa giỏ hàng dựa vào action type: "XOA_GIO_HANG",maSPClick,
      const index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSP === action.maSPClick
      );
      if (index !== -1) {
        gioHangUpdate.splice(index, 1);
      }
      // cập nhật lại state.gioHang
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case "TANG_GIAM_SOLUONG": {
      let giohangUpdate = [...state.gioHang];
      let spGioHang = giohangUpdate.find((sp) => sp.maSP === action.maSP);
      if (spGioHang) {
        if (action.tangGiam) {
          spGioHang.soLuong += 1;
        } else {
          if (spGioHang.soLuong > 1) {
            spGioHang.soLuong -= 1;
          }
        }
      }
      // cập nhật lại giỏ hàng
      state.gioHang = giohangUpdate;
      return { ...state };
    }
  }

  return { ...state };
};
export default BaiTapGioHangReducer;
