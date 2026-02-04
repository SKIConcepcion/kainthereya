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
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Message heading="NBA Players" />
      <ListGroup players={players} onSelectItem={handleBtnClick} />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => navigate("/about")}
      >
        press me
      </button>
    </div>
  );
};

export default Home;
