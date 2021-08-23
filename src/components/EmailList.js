import React from 'react';

//css
import "./components_css/EmailList.css";

//components
import EmailSettingHeader from './EmailSettingHeader';
import EmailSection from './EmailSection';


function EmailList() {
    return (
        <div className="email-list" >
            <EmailSettingHeader />
            <EmailSection />
        </div>
    )
}

export default EmailList;
