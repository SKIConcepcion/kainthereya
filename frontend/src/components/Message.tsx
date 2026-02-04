import { useState } from "react";

interface Props {
    heading: string;
}

function Message({heading}: Props) {

    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="text-blue-500"> {heading} </h1>

            <button onClick={() => setCount(count + 1)}>
                count is now {count}
            </button>

        </>
    );
}

export default Message;