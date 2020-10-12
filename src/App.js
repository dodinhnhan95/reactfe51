import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DemoStateless from "./Components/DemoStateless";
import DemoStateFul from "./Components/DemoStateFul";
import BaiTaplayout1 from "./Components/BaiTapLayoutComponent/BaiTaplayout1";
import Databinding from "./Databinding/Databinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import DemoConditionalAndState from "./DemoLogin/DemoConditionalAndState";
import BaiTapChonMauXe from "./BaiTapChonMauXe";
// import DemolistAndKeys from "./listAndKeys/DemolistAndKeys";
import DemoProps from "./Props/DemoProps";
import Fix from "./Fix/Fix";
import BaiTapGioHang from "./Components/BaiTapGioHang";
import BaiTapGioHangRedux from "./BaiTapRedux/BaiTapGioHangRedux";
function App() {
  return (
    <div className="App">
      {/* <DemoStateless/>
      <DemoStateFul/> */}
      {/* <BaiTaplayout1/> */}
      {/* <Databinding/> */}
      {/* <HandleEvent />
      <DemoConditionalAndState />
      <BaiTapChonMauXe /> */}
      {/* <DemolistAndKeys /> */}
      {/* <Fix />
      <DemoProps /> */}
      {/* <BaiTapGioHang /> */}
      <BaiTapGioHangRedux />
    </div>
  );
}

export default App;
