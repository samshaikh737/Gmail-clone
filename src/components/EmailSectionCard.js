import React from 'react';

//css
import "./components_css/EmailSectionCard.css"

function EmailSectionCard({Icon,title,color,selected}) {
    return (
        <div className={`emailSectionCard ${selected ? "emailSectionCard-active" : "" } `}
        style={{
            borderBottom: `3px solid ${color}`,
            color: `${selected && color}`
        }}
        >
            <Icon />
            <h4>{title}</h4>
        </div>
    )
}

export default EmailSectionCard;
