import { useNavigate  } from 'react-router-dom'

import ListGroup from "../components/ListGroup";
import Message from "../components/Message";

function Home() {
const navigate = useNavigate();

  const players: string[] = [
    "LeBron James",
    "Victor Wembanyama",
    "Tyrese Haliburton",
  ];

  const handleBtnClick = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <Message heading="NBA Players" />
      <ListGroup players={players} onSelectItem={handleBtnClick} />
      <button onClick={() => {navigate(`/about`)}}> press me </button>
    </>
  );
};

export default Home;
