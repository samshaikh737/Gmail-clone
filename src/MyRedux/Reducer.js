export const database = {
    showSendMail : true
}

export const Reducer = (state,action)=>{
    switch (action.type) {
        case "update_showSendMail":
            return {
                ...state,
                "showSendMail" : action.value
            }    
        default:
            return state;
    }
};
