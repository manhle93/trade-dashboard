import "./App.css";
import Home from "./page/Home/Home";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const App = () => {
  const homeRef = React.useRef();

  const addLayout = (tabName) => {
    homeRef.current?.onAddLayout(tabName);
    NotificationManager.info(
      "Di chuột đến khu vực cần thêm, nhấn ESC để thoát",
      "Thêm giao diện"
    );
  };
  return (
    <div className="app-container">
      <NotificationContainer />

      <Header />
      <Sidebar addLayout={addLayout} />
      <Home ref={homeRef} />
    </div>
  );
};

export default App;
