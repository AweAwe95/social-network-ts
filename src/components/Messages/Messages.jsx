import m from "./Messages.module.css"
import {Friend} from "./Friend/Friend";
import {Message} from "./Message/Message";


export function Messages(props) {
    const textAreaHandler = (e) => {
        props.textAreaHandler(e)
    }
    const addMessage = () => {
        props.addMessage()
    }
    return (
        <div className={m.content}>
            <div className={m.friends}>
                {props.messagesPageData.friendsData.map(f => <Friend key={f.id} id={f.id} name={f.name}/>)}
            </div>
            <div>
                {props.messagesPageData.messagesData.map(m => <Message key={m.id} message={m.message}/>)}
                <input value={props.messagesPageData.newMessageText} onChange={textAreaHandler}/>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    )
}