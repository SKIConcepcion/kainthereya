import { useState, type SetStateAction } from "react";

interface Props {
    players: string[];
}

function ListGroup({players}: Props) {

    const [selectedIndex, setSelectedIndex] = useState(-1);
    const handleBtnClick = (index: SetStateAction<number>) => {
        console.log(index);
        setSelectedIndex(index);
    }

    return (
        <>
            { players.length === 0 && <p> Na da </p>}
            {players.map((player, index) => (
                <li key={player} onClick={() => handleBtnClick(index)}> {player} </li>
            ))}
        </>
    );
}

export default ListGroup;