import React, {useState} from "react";
import {
    View,
} from "react-native";
import ScoreCard from "./ScoreCard";

type PlayViewPropsType = {
    P1Name : string,
    P2Name : string,
    MaxScore : number,
};


function PlayView(props : PlayViewPropsType) : React.JSX.Element {

    const P1Name = props.P1Name;
    const P2Name = props.P2Name;
    const MaxScore = props.MaxScore;

    // states for each player
    const [P1CurrentScore, updateP1CurrentScore] = useState(0);
    const [P2CurrentScore, updateP2CurrentScore] = useState(0);

    const [P1SetScore, updateP1SetScore] = useState([0,0,0]);
    const [P2SetScore, updateP2SetScore] = useState([0,0,0]);

    const [currentSet, updateCurrentSet] = useState(0);

    function handleWinner() {
        // function to handle Winner button click;

        let P1SetScores_new = [...P1SetScore];
        P1SetScores_new[currentSet] = P1CurrentScore;
        updateP1SetScore(P1SetScores_new);

        let P2SetScores_new = [...P2SetScore];
        P2SetScores_new[currentSet] = P2CurrentScore;
        updateP1SetScore(P2SetScores_new);

        updateCurrentSet(currentSet+1);

    }

    return (
        <View>
            <ScoreCard 
            playerName={P1Name} 
            maxScore={MaxScore}
            currentScore={P1CurrentScore}
            setScore={P1SetScore}
            updateCurrentScore={updateP1CurrentScore}
            />
            <ScoreCard 
            playerName={P2Name} 
            maxScore={MaxScore} 
            currentScore={P2CurrentScore}
            setScore={P2SetScore}
            updateCurrentScore={updateP2CurrentScore}
            />
        </View>
    );
}

export default PlayView;