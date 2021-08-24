type MessageType = {
    message: string
}

export function Message(props: MessageType) {
    return <div className="message">{props.message}</div>;
}