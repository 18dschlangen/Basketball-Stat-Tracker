import { useState } from "react";
import reactLogo from "./assets/react.svg";

import Player, { IPlayer } from "./Components/Player";
import Stats from "./Components/Stats";

function App() {
  const defaultPlayerValues = {
    name: "player",
    "2ptFGM": 0,
    "2ptFGA": 0,
    "3ptFGM": 0,
    "3ptFGA": 0,
    FTA: 0,
    FTM: 0,
    rebounds: 0,
    assists: 0,
    turnovers: 0,
    steals: 0,
    blocks: 0,
    fouls: 0,
  };
  const [player1, setPlayer1] = useState<IPlayer>(defaultPlayerValues);
  const [player2, setPlayer2] = useState<IPlayer>(defaultPlayerValues);
  const [player3, setPlayer3] = useState<IPlayer>(defaultPlayerValues);
  const [player4, setPlayer4] = useState<IPlayer>(defaultPlayerValues);
  const [player5, setPlayer5] = useState<IPlayer>(defaultPlayerValues);
  return (
    <div>
      <Player player={player1} setPlayer={setPlayer1} />
      <Player player={player2} setPlayer={setPlayer2} />
      <Player player={player3} setPlayer={setPlayer3} />
      <Player player={player4} setPlayer={setPlayer4} />
      <Player player={player5} setPlayer={setPlayer5} />

      <Stats players={[player1, player2, player3, player4, player5]} />
    </div>
  );
}

export default App;
