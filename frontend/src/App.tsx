import ListGroup from "./ListGroup";
import Message from "./Message";

function App() {
  let players = ["LeBron James", "Victor Wemby", "Tyrese Haliburton"]

  const handleBtnClick = (item: string) => {
    console.log(item);
  }

  return (
    <>
      <Message heading={"NBA Players"}/>
      <ListGroup players={players} onSelectItem={handleBtnClick}/>
    </>
  );
}

export default App;
