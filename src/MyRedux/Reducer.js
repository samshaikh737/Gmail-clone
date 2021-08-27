export const database = {
    user : null,
    showSendMail : false,
    mailPage : null,
}

export const Reducer = (state,action)=>{
    switch (action.type) {
        case "logout":
            return {
                ...state,
                'user': null
        }
        case 'update_user':
            return {
                ...state,
                'user': action.payload
            }
        case "update_showSendMail":
            return {
                ...state,
                "showSendMail" : action.value
            }    
        case "show_mail":
            return {
                ...state,
                'mailPage': action.payload
            }
        default:
            return state;
    }
};
