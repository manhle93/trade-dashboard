import "./App.css";
import Home from "./page/Home/Home";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import React from "react";
const App = () => {
  const homeRef = React.useRef();

  const addLayout = (tabName) => {
homeRef.current?.onAddLayout(tabName)
  }
  return (
    <div className='app-container'>
      <Header />
      <Sidebar addLayout={addLayout} />
      <Home ref={homeRef} />
    </div>
  );
}



export default App;

