// khai baó tất cả các state của ứng dụng
import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";

// state tổng của ứng dụng

export const rootReducer = combineReducers({
  // nơi khái báo các state theo từng nghiệp vụ
  StateBaiTapGioHang: BaiTapGioHangReducer,
});
