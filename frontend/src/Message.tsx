
interface Props {
    heading: string;
}

function Message({heading}: Props) {
    return (
        <>
            <h1> {heading} </h1>
        </>
    );
}

export default Message;