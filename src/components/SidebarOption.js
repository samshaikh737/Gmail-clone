import React from 'react';
import "./components_css/SidebarOption.css"

function SidebarOption({ selected, Icon, title , number , click }) {
    return (
        <div className={`sidebar-option ${selected && "active"}`} onClick={ click ? click : null } >
            {Icon ? <Icon /> : "Icon Not found" } 
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption
