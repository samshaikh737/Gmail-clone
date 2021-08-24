import React from 'react';
import EmailListComponent from './EmailListComponent';

function EmailListRow() {
 
    return (
        <div className="EmailListRow">
            {
            [1,2,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((d)=>{
                return <EmailListComponent id={d} subject="Web development" title="hello you want to learn progremming" desc="we er if you want to learn anything you want please ome and say" time="25 aug" />
            })
            } 
        </div>
    )
}

export default EmailListRow
