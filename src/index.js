/**
 * The entry point
 */

import App from "./components/app";
import { checkGameState } from "./checkGameState";

var turn = 1;
var gameState = ["", "", "", "", "", "", "", "", ""];
var isWinner;

window.addEventListener("load", () => {
  const app = new App(document.getElementById("app"));

  // A very simple component setup
  app.render();
});

document.addEventListener("click", function (e) {
  const id = e.target.id;
  const element = document.getElementById(id);

  if (element && gameState[id] === "" && isWinner === undefined) {
    const xoElement = document.createElement("span");
    xoElement.setAttribute("class", "xoItem");

    if (turn === 1) {
      xoElement.innerText = "❌";
      element.appendChild(xoElement);

      gameState[id] = "1";
      turn = 2;
    } else if (turn === 2) {
      xoElement.innerText = "⭕️";
      element.appendChild(xoElement);
      gameState[id] = "2";
      turn = 1;
    }

    isWinner = checkGameState(gameState);
    if (isWinner !== undefined) {
      const app = document.getElementById("app");
      const winnerMsg = document.createElement("p");
      winnerMsg.innerText = `Player ${isWinner} is the Winner!`;

      app.appendChild(winnerMsg);
    }
  }
});
