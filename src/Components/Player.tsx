import React from "react";
import { useState } from "react";
import "./Player.css";

export interface IPlayer {
  name: string;
  "2ptFGM": number;
  "2ptFGA": number;
  "3ptFGM": number;
  "3ptFGA": number;
  FTA: number;
  FTM: number;
  rebounds: number;
  assists: number;
  turnovers: number;
  steals: number;
  blocks: number;
  fouls: number;
}

interface playerprops {
  player: IPlayer;
  setPlayer: (player: IPlayer) => void;
}

const Player = ({ player, setPlayer }: playerprops) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <input
            type="text"
            onChange={(e) => setPlayer({ ...player, name: e.target.value })}
          />
          <p style={{ fontWeight: "bold" }}>{player.name}</p>
        </div>
        <div>
          <p>2pt Field Goal</p>
          <button
            onClick={() =>
              setPlayer({
                ...player,
                "2ptFGM": player["2ptFGM"] + 1,
                "2ptFGA": player["2ptFGA"] + 1,
              })
            }
          >
            Make
          </button>
          <button
            onClick={() =>
              setPlayer({ ...player, "2ptFGA": player["2ptFGA"] + 1 })
            }
            style={{ backgroundColor: "red" }}
          >
            Miss
          </button>
        </div>
        <div>
          <p>3pt Field Goal</p>
          <button
            onClick={() =>
              setPlayer({
                ...player,
                "3ptFGM": player["3ptFGM"] + 1,
                "3ptFGA": player["3ptFGA"] + 1,
              })
            }
          >
            Make
          </button>
          <button
            onClick={() =>
              setPlayer({ ...player, "3ptFGA": player["3ptFGA"] + 1 })
            }
            style={{ backgroundColor: "red" }}
          >
            Miss
          </button>
        </div>
        <div>
          <p>Free Throw</p>
          <button
            onClick={() =>
              setPlayer({
                ...player,
                FTA: player.FTA + 1,
                FTM: player.FTM + 1,
              })
            }
          >
            Make
          </button>
          <button
            onClick={() => setPlayer({ ...player, FTA: player.FTA + 1 })}
            style={{ backgroundColor: "red" }}
          >
            Miss
          </button>
        </div>
        <div>
          <p>Rebound</p>
          <button
            onClick={() =>
              setPlayer({ ...player, rebounds: player.rebounds + 1 })
            }
          >
            +1
          </button>
        </div>
        <div>
          <p>Assist</p>
          <button
            onClick={() =>
              setPlayer({ ...player, assists: player.assists + 1 })
            }
          >
            +1
          </button>
        </div>
        <div>
          <p>Turnover</p>
          <button
            onClick={() =>
              setPlayer({ ...player, turnovers: player.turnovers + 1 })
            }
          >
            +1
          </button>
        </div>
        <div>
          <p>Steal</p>
          <button
            onClick={() => setPlayer({ ...player, steals: player.steals + 1 })}
          >
            +1
          </button>
        </div>
        <div>
          <p>Block</p>
          <button
            onClick={() => setPlayer({ ...player, blocks: player.blocks + 1 })}
          >
            +1
          </button>
        </div>
        <div>
          <p>Foul</p>
          <button
            onClick={() => setPlayer({ ...player, fouls: player.fouls + 1 })}
          >
            +1
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Player;
