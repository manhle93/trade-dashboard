import React from 'react'
import './Sidebar.style.scss'
import { createStructuredSelector } from "reselect";
import { selectLayoutComponents } from "../../redux/layout/layout.selector";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Sidebar = props => {
    const data = props.data
    return (<div className='sidebar-container'>
        {data.map(el => (
            <FontAwesomeIcon icon={el.icon} onClick={() => { props.addLayout(el.name) }} className="sidebar-icon" title={el.name} key={el.name}/>
        ))}
    </div>)
}


const mapStateToProps = createStructuredSelector({
    data: selectLayoutComponents,
});
export default connect(mapStateToProps, null, null, { forwardRef: true })(Sidebar);