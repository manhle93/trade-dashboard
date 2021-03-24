import React, { useState } from 'react'
import './Sidebar.style.scss'
import { createStructuredSelector } from "reselect";
import { selectLayoutComponents } from "../../redux/layout/layout.selector";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Sidebar = props => {
    const data = props.data;

    const [menu, setMenu] = useState(false)
    const showMenu = () => {
        setMenu(!menu)
    }
    const menulist = [
        {
            name: 'Thị trường',
            layoutName: 'Đồ thị nến',
            header: true
        },
        {
            name: 'Top tăng giá',
            layoutName: 'Đồ thị đường',
            header: false
        },
        {
            name: 'Top giảm giá',
            layoutName: 'Đồ thị đường',
            header: false
        },
        {
            name: 'Top vượt đỉnh',
            layoutName: 'Đồ thị nến',
            header: false
        },
        {
            name: 'Top thủng đáy',
            layoutName: 'Bảng biểu 2',
            header: false
        },
        {
            name: 'Link sự kiện',
            layoutName: 'Bảng biểu 1',
            header: false
        },
        {
            name: 'Xu hướng dòng tiền',
            layoutName: 'Đồ thị vùng',
            header: false
        },
        {
            name: 'Giá',
            layoutName: 'Đồ thị nến',
            header: true
        },
        {
            name: 'Time & Sale',
            layoutName: 'Bảng biểu 1',
            header: false
        },
        {
            name: 'Chi tiết bước giá',
            layoutName: 'Đồ thị miền',
            header: false
        },
        {
            name: 'Thống kê giá',
            layoutName: 'Đồ thị vùng',
            header: false
        },
        {
            name: 'PT kỹ thuật',
            layoutName: 'Đồ thị nến',
            header: true
        },
        {
            name: 'Biểu đồ kỹ thuật',
            layoutName: 'Đồ thị vùng',
            header: false
        },
        {
            name: 'Tín hiệu kỹ thuật',
            layoutName: 'Đồ thị miền',
            header: false
        },

        {
            name: 'Công cụ đầu tư',
            layoutName: 'Đồ thị nến',
            header: true
        },
        {
            name: 'Cảnh báo',
            layoutName: 'Đồ thị miền',
            header: false
        },
        {
            name: 'Bộ lọc cổ phiếu',
            layoutName: 'Đồ thị nến',
            header: false
        },
        {
            name: 'Mô hình định giá',
            layoutName: 'Đồ thị nến',
            header: false
        },
        {
            name: 'Chiến lược đầu tư',
            layoutName: 'Đồ thị nến',
            header: true
        },
        {
            name: 'Xếp hạng cổ phiếu',
            layoutName: 'Đồ thị nến',
            header: false
        },
        {
            name: 'Chiến lược',
            layoutName: 'Đồ thị nến',
            header: false
        },


    ]
    return (
        <div>
            <div className='sidebar-container'>
                <FontAwesomeIcon icon={faBars} className="sidebar-icon menu-icon" title='Chức năng' onMouseEnter={showMenu} />
                {data.map(el => (
                    <FontAwesomeIcon icon={el.icon} onClick={() => { props.addLayout(el.name) }} className="sidebar-icon" title={el.name} key={el.name} />
                ))}
            </div>
            <div onMouseLeave={showMenu}>
                {menu ? <div className='sidebar-submenu'>
                    {
                        menulist.map(el => <div className='submenu-item' style={{ color: el.header ? 'white' : '', fontWeight: el.header ? 'bold' : '', fontSize: el.header ? '15px' : '' }} onClick={() => { props.addLayout(el.layoutName) }}>{el.name}</div>)
                    }
                </div> : null}
            </div>

        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    data: selectLayoutComponents,
});
export default connect(mapStateToProps, null, null, { forwardRef: true })(Sidebar);