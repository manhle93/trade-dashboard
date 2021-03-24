import React from "react";
import "./Header.style.scss";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-item">
        <div className="header-title">Header</div>
        <div className='header-subtitle'>
          Chọn dữ liệu bên menu trái và di chuột đến khu vực cần hiển thị
        </div>
      </div>
    </div>
  );
};

export default Header;
