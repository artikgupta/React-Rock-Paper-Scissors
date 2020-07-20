import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerChoice: "",
      computerChoice: "",
      result: "",
    };
  }

  decideWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
      this.setState({
        result: "Draw",
      });
    } else if (userChoice === "rock" && compChoice === "paper") {
      this.setState({
        result: "Computer wins",
      });
    } else if (userChoice === "paper" && compChoice === "scissors") {
      this.setState({
        result: "Computer wins",
      });
    } else if (userChoice === "scissors" && compChoice === "rock") {
      this.setState({
        result: " Computer wins",
      });
    } else {
      this.setState({
        result: "Player wins",
      });
    }
  };

  computerChoice = () => {
    const random = Math.random();
    if (random < 0.35) {
      return "rock";
    } else if (random <= 0.67) {
      return "paper";
    } else {
      return "scissors";
    }
  };

  chooseRock = () => {
    const compChoice = this.computerChoice();
    this.decideWinner("rock", compChoice);
    this.setState({
      playerChoice: "rock",
      computerChoice: compChoice,
    });
  };

  choosePaper = () => {
    const compChoice = this.computerChoice();
    this.decideWinner("paper", compChoice);
    this.setState({
      playerChoice: "paper",
      computerChoice: compChoice,
    });
  };

  chooseScissors = () => {
    const compChoice = this.computerChoice();
    this.decideWinner("scissors", compChoice);
    this.setState({
      playerChoice: "scissors",
      computerChoice: compChoice,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.chooseRock}>
          <i className="fas fa-hand-rock fa-10x"></i>
        </button>
        <button onClick={this.choosePaper}>
          <i className="fas fa-hand-paper fa-10x"></i>
        </button>
        <button onClick={this.chooseScissors}>
          <i className="fas fa-hand-scissors fa-10x"></i>
        </button>
        <div>
          <h1>Players choice: {this.state.playerChoice}</h1>
          <h1>Computer choice :{this.state.computerChoice}</h1>
          <h2>Result: {this.state.result}</h2>
        </div>
      </div>
    );
  }
}

export default Game;
