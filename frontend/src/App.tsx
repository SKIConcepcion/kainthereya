import ListGroup from "./ListGroup";
import Message from "./Message";

function App() {
  let players = ["LeBron James", "Victor Wemby", "Tyrese Haliburton"]

  return (
    <>
      <Message heading={"NBA Players"}/>
      <ListGroup players={players}/>
    </>
  );
}

export default App;
