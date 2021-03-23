import React from 'react'
import './Sidebar.style.scss'

const Sidebar = props => {
    return (<div className='sidebar-container'>
        <div><button onClick={() => {props.addLayout('Đồ thị nến')}}>Test</button></div>
    </div>)
}

export default Sidebar