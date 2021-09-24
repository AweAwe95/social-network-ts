import {addMessageAC, updateNewMessageTextAC} from "../../redux/messages-reducer";
import {Messages} from "./Messages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagesPageData: state.messagesPageData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage:() => {
            dispatch(addMessageAC())
        },
        textAreaHandler: (e) => {
            dispatch(updateNewMessageTextAC(e))
        }
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)