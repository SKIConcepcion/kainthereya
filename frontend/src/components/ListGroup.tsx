interface Props {
    players: string[];
    onSelectItem: (item: string) => void;
}

function ListGroup({players, onSelectItem}: Props) {

    return (
        <>
            { players.length === 0 && <p> Na da </p>}
            { players.map((player) => (
                <li key={player} onClick={() => onSelectItem(player)}> {player} </li>
            ))}
        </>
    );
}

export default ListGroup;