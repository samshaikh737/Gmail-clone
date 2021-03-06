import React from 'react';
import firebase from "firebase";

//css
import "./components_css/SendMail.css"

//materials
import { IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

import { useStateValue } from '../MyRedux/Provider';

import { useForm } from "react-hook-form";
import { db } from '../firebaseConfig';

function SendMail() {

    const [data, updateData] = useStateValue();

    const handleCloseBtn = () => {
        updateData({ "type": "update_showSendMail", 'value': false });
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onFormSubmitFun = (data) => {
        db.collection("emails").add({
            "to": data.to,
            "subject": data.subject,
            "message": data.message,
            'time': firebase.firestore.FieldValue.serverTimestamp()
        });


        handleCloseBtn();
    }

    return (
        <div className="sendMail" >
            <div className="send-mail-header">
                <h4>Send a Mail</h4>
                <IconButton onClick={handleCloseBtn} >
                    <CloseIcon />
                </IconButton>
            </div>

            <div className="send-mail-body">
                <form onSubmit={handleSubmit(onFormSubmitFun)} >
                    <input required={true} type="email" placeholder="To" name="to" {...register('to', { required: true })} />
                    <input required={true} type="text" placeholder="Subject" name="subject" {...register('subject', { required: true })} />
                    <textarea required={true} placeholder='Message' name="message" id="" cols="20" rows="15" {...register('message', { required: true })} />

                    <div className="send-mail-form-btn-container">
                        <button id="sendMailBtn">Send</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default SendMail
