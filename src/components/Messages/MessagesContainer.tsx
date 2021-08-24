import {addMessageAC, updateNewMessageTextAC} from "../../redux/messages-reducer";
import {Messages} from "./Messages";
import {connect} from "react-redux";
import {AppDispatchType, AppStateType} from "../../redux/redux-store";


let mapStateToProps = (state: AppStateType) => {
    return {
        messagesPageData: state.messagesPageData
    }
}
let mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        addMessage:() => {
            dispatch(addMessageAC())
        },
        textAreaHandler: (newMessage: string) => {
            dispatch(updateNewMessageTextAC(newMessage))
        }
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)