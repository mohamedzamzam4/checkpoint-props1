import React from "react";
import Player from "./Player";
const players = [
    { "name": "Lamine Yamal", "team": "FC Barcelona","nationality" : "Spanish", "jerseyNumber": 19 ,"age":17,"photo":"https://dohanews.co/wp-content/uploads/2024/06/GROZmtbWcAAxyeR.jpeg"},
    { "name": "Lionel Messi","team" : "Inter Miami CF","nationality" : "Argentine", "jerseyNumber": 10 ,"age":37,"photo":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-a5RgBtzrpyEoYwIM3ErK3Zdx1BWAE9DMcNab1rDwYchCJkzh"},
    { "name": "cristiano Ronaldo", "team": "Al-Nassr FC","nationality" : "Portugal", "jerseyNumber": 7,"age":39,"photo":"https://media.npr.org/assets/img/2022/12/30/ap22364795346345-153c53713ce57b880428deae9fef9b9926961b6b.jpg" },
    { "name": "Hamza Jlassi", "team": "Etoile Sportive du Sahel", "nationality": "tunisia", "jerseyNumber": 20, "age":17,"photo":"https://i0.wp.com/lapresse.tn/wp-content/uploads/2023/10/Jelassi-.jpg?fit=850%2C491&ssl=1"},
    {"name": "Raki aouani", "team": "Etoile Sportive du Sahel", "nationality": "tunisia", "jerseyNumber": 11,"age":32,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0kSf_-IYWVDIwss3_yG0JfoWzeEJHhjffg&s"}
  
  ];
const Players = () => {
  return (
    <div>
      <Player user={players} />
    </div>
  );
};

export default Players;
