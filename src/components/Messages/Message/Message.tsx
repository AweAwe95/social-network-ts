type MessageTypes = {
    message: string
}

export function Message(props: MessageTypes) {
    return <div className="message">{props.message}</div>;
}