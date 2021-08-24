import React from 'react';

//css
import "./components_css/EmailList.css";

//components
import EmailSettingHeader from './EmailSettingHeader';
import EmailSection from './EmailSection';
import EmailListRow from './EmailListRow';


function EmailList() {
    return (
        <div className="email-list" >
            <EmailSettingHeader />
            <EmailSection />
            <EmailListRow />
        </div>
    )
}

export default EmailList;
