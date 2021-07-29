import m from "./Messages.module.css"
import {Friend} from "./Friend/Friend";
import {Message} from "./Message/Message";

export function Messages() {
    return (
        <div className={m.content}>
            <div className={m.friends}>
                <Friend id={1} name={'Vitali'}/>
                <Friend id={2} name={'Denis'}/>
                <Friend id={3} name={'Viktor'}/>
                <Friend id={4} name={'Jurek'}/>
                <Friend id={5} name={'Lika'}/>
                <Friend id={6} name={'Vladimir'}/>
            </div>
            <div>
                <Message message={'Hi'}/>
                <Message message={'Whats up?'}/>
                <Message message={'Lets play'}/>
                <Message message={'Are you dumb?'}/>
                <Message message={'Bye'}/>
            </div>
        </div>
    )
}