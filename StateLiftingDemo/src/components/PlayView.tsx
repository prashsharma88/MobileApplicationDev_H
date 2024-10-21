import React, {useState} from "react";
import {
    View,
} from "react-native";
import ScoreCard from "./ScoreCard";
import { gameStateValues } from "../utility/utils";

type PlayViewPropsType = {
    P1Name : string,
    P2Name : string,
    MaxScore : number,
    setWinnerName : (val : string) => void,
    updateGameState : (val : gameStateValues) => void;
};


function PlayView(props : PlayViewPropsType) : React.JSX.Element {

    const P1Name = props.P1Name;
    const P2Name = props.P2Name;
    const MaxScore = props.MaxScore;
    const setWinnerName = props.setWinnerName;
    const updateGameState = props.updateGameState;


    // states for each player
    const [P1CurrentScore, updateP1CurrentScore] = useState(0);
    const [P2CurrentScore, updateP2CurrentScore] = useState(0);

    const [P1SetScore, updateP1SetScore] = useState([0,0,0]);
    const [P2SetScore, updateP2SetScore] = useState([0,0,0]);

    const [currentSet, updateCurrentSet] = useState(0);

    function handleWinner() {
        // function to handle Winner button click;

        console.log("handle winner function");

        // Updating set score for Player 1
        let P1SetScores_new = [...P1SetScore];
        P1SetScores_new[currentSet] = P1CurrentScore;
        console.log(`p1 new score : ${P1SetScores_new}`)
        updateP1SetScore(P1SetScores_new);


        // Updating set score for Player 2
        let P2SetScores_new = [...P2SetScore];
        P2SetScores_new[currentSet] = P2CurrentScore;
        console.log(`p2 new score : ${P2SetScores_new}`)
        updateP2SetScore(P2SetScores_new);

        // Updating current score for Player 1 and Player 2.
        updateP1CurrentScore(0);
        updateP2CurrentScore(0);

        updateCurrentSet(currentSet+1);

        // if currentSet is the last set, 
        // then identify the winner and move to end game screen

        if(currentSet >= 2) { // hard coding the last set value.
            // Identify winner: check the set score for each player and count number of win.
            let p1_wins = 0;
            let p2_wins = 0;
            for (let x=0; x<3; x++) {
                if(P1SetScores_new[x] >= MaxScore) {
                    p1_wins++;
                } else {
                    p2_wins++;
                }
            }

            // winner player = p1_wins > p2_wins ? P1 won : P2 won.
            const winnerPlayerName = p1_wins > p2_wins ? P1Name : P2Name;
            setWinnerName(winnerPlayerName);
            // update game state to END;
            updateGameState(gameStateValues.END);
        }
    }

    return (
        <View>
            <ScoreCard 
            playerName={P1Name} 
            maxScore={MaxScore}
            currentScore={P1CurrentScore}
            setScore={P1SetScore}
            updateCurrentScore={updateP1CurrentScore}
            handleWinner={handleWinner}
            />
            <ScoreCard 
            playerName={P2Name} 
            maxScore={MaxScore} 
            currentScore={P2CurrentScore}
            setScore={P2SetScore}
            updateCurrentScore={updateP2CurrentScore}
            handleWinner={handleWinner}
            />
        </View>
    );
}

export default PlayView;
