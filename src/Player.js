import React from "react";
import Playerlist from "./Playerlist";

const Player = (props) => {
  console.log(props);
  return (
    <div>
      {props.user.map((el) => (
        <Playerlist list={el} />
      ))}
    </div>
  );
};

export default Player;
