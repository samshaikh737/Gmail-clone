import React from 'react';

//css
import "./components_css/EmailSection.css"

//components
import EmailSectionCard from './EmailSectionCard';

//materials
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

function EmailSection() {
    return (
        <div className="email-section" >
            <EmailSectionCard Icon={InboxIcon} title={"Primary"} color="red" selected={true} />
            <EmailSectionCard Icon={PeopleIcon} title={"Social"} color="#1A73E8"  />
            <EmailSectionCard Icon={LocalOfferIcon} title={"Promotions"} color="green"  />
        </div>
    )
}

export default EmailSection
