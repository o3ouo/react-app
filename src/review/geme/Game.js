import React, { useState } from 'react';

const choices = ["Scissors", "Rock", "Paper"];

const Game = () => {
    // user state
    const [userChoice, setUserChoice] = useState(null);
    // computer state
    const [computerChoice, setComputerChoice] = useState(null);
    // result state
    const [result, setResult] = useState("");
    // user score state
    const [userScore, setUserScore] = useState(0);
    // computer score state
    const [computerScore, setComputerScore] = useState(0);


    // 컴퓨터가 랜덤하게 선택하는 함수
    const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];

    // 승패를 판별하는 함수 & 점수 시스템
    const determineWinenr = (user, computer) => {
        if (user === computer) return "Draw";
        if (
            (user === "Scissors" && computer === "Paper") ||
            (user === "Rock" && computer === "Scissors") ||
            (user === "Paper" && computer === "Rock")
        ) {
            setUserScore(userScore + 1);
            return "User Winner";
        }
        setComputerScore(computerScore + 1);
        return "Computer Winner";
    };

    // 사용자가 선택했을 때 실행되는 함수
    const handleChoice = (choice) => {
        const computer = getRandomChoice();
        setUserChoice(choice);
        setComputerChoice(computer);
        setResult(determineWinenr(choice, computer));
    };

    return (
        <div className="game-container">
            <h1>Rock! Scissors! Paper!</h1>
            {/* choice button */}
            <div className="choices">
                {choices.map((choice) => (
                    <button key={choice} onClick={() => handleChoice(choice)}>
                        {choice}
                    </button>
                ))}
            </div>
            {/* result */}
            {userChoice && (
                <div className="result">
                    <p>User Choice: {userChoice}</p>
                    <p>Computer Choice: {computerChoice}</p>
                    <h2>{result}</h2>
                </div>
            )}
            {/* score */}
            <div>
                <h2>User Score: {userScore} | Computer Score: {computerScore}</h2>
            </div>
        </div>
    );
}

export default Game;