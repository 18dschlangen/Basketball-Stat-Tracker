import React from "react";
import Player, { IPlayer } from "./Player";
import "./Stats.css";
const Stats = ({ players }: { players: IPlayer[] }) => {
  return (
    <div>
      <table className="table">
        <tr className="tablehead">
          <th>Players</th>
          <th>2pt FGA</th>
          <th>2pt FGM</th>
          <th>2pt FG%</th>
          <th>3pt FG</th>
          <th>3pt FGM</th>
          <th>3pt FG%</th>
          <th>FTA</th>
          <th>FTM</th>
          <th>FT%</th>
          <th>EFF FG%</th>
          <th>RB</th>
          <th>AS</th>
          <th>TO</th>
          <th>AS/TO</th>
          <th>ST</th>
          <th>BL</th>
          <th>Fouls</th>
          <th>PTS</th>
        </tr>

        {players.map((p, i) => (
          <tr key={i}>
            <td>{p.name}</td>
            <td>{p["2ptFGA"]}</td>
            <td>{p["2ptFGM"]}</td>
            <td>{(p["2ptFGM"] / p["2ptFGA"]).toFixed(2)}</td>
            <td>{p["3ptFGA"]}</td>
            <td>{p["3ptFGM"]}</td>
            <td>{(p["3ptFGM"] / p["3ptFGA"]).toFixed(2)}</td>
            <td>{p.FTA}</td>
            <td>{p.FTM}</td>
            <td>{(p.FTM / p.FTA).toFixed(2)}</td>
            <td>
              {(
                (p["2ptFGM"] + p["3ptFGM"] * 1.5) /
                (p["2ptFGA"] + p["3ptFGA"])
              ).toFixed(2)}
            </td>
            <td>{p.rebounds}</td>
            <td>{p.assists}</td>
            <td>{p.turnovers}</td>
            <td>{(p.assists / p.turnovers).toFixed(2)}</td>
            <td>{p.steals}</td>
            <td>{p.blocks}</td>
            <td>{p.fouls}</td>
            <td>{p["2ptFGM"] * 2 + p["3ptFGM"] * 3 + p.FTM}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Stats;
