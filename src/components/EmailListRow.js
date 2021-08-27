import React from 'react';
import EmailListComponent from './EmailListComponent';

//firebase
import { db } from '../firebaseConfig';

function EmailListRow() {
    const [emailList,setemailList] = React.useState([]);

    const getEmail = ()=>{        
        db.collection('emails').orderBy('time','desc').onSnapshot((data)=>{
            setemailList(
                data.docs.map((d)=>({"id":d.id,"data":d.data()}))
            )
        });
    }
    
    React.useEffect(()=>{
        getEmail();
    },[])
 
    return (
        <div className="EmailListRow">
            {
            emailList &&  emailList.map(({id, data: { to , subject , message, time }})=>{
                return <EmailListComponent 
                    id={id}
                     key={id}
                    title={to}
                    subject={subject}
                    desc={message}
                    time={new Date(time?.seconds * 1000).toUTCString() } 
                    
                />
            })
            } 
        </div>
    )
}

export default EmailListRow
