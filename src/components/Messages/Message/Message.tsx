type MessagePropsTypes = {
    message: string
}

export function Message(props: MessagePropsTypes) {
    return <div className="message">{props.message}</div>;
}