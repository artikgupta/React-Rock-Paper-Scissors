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
  displayIcon = (choice) => {
    if (choice === "rock") {
      return <i className="fas fa-hand-rock fa-3x"></i>;
    } else if (choice === "paper") {
      return <i className="fas fa-hand-paper fa-3x"></i>;
    } else {
      return <i className="fas fa-hand-scissors fa-3x"></i>;
    }
  };
  render() {
    return (
      <div className="container">
        <h1 className="option">Rock Paper Scissors</h1>
        <h1 className="option-2">Please select an option</h1>
        <div className="icon-hands">
          <button className="btns" onClick={this.chooseRock}>
            <i className="fas fa-hand-rock "></i>
          </button>
          <button className="btns" onClick={this.choosePaper}>
            <i className="fas fa-hand-paper "></i>
          </button>
          <button className="btns" onClick={this.chooseScissors}>
            <i className="fas fa-hand-scissors "></i>
          </button>
        </div>

        {this.state.result ? (
          <div className="choice-container">
            <div className="choices">
              <h1>
                Player's choice: {this.displayIcon(this.state.playerChoice)}
              </h1>
              <h1>
                Computer's choice :{this.displayIcon(this.state.computerChoice)}
              </h1>
            </div>
            <div>
              <h2>
                <span className="result">Result:</span>
                <span className="winner">{this.state.result}</span>
              </h2>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Game;
