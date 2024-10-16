import React, { useState } from "react";
import { 
    View,
    StyleSheet,
 } from "react-native";
import StartView from "./components/StartView";
import PlayView from "./components/PlayView";
import EndView from "./components/EndView";

export enum gameStateValues {
    INIT = 0,
    PLAY,
    END,
};

function Main() : React.JSX.Element {
    const [GameState, UpdateGameState] = useState(gameStateValues.INIT);

    const [P1Name, setP1Name] = useState("");
    const [P2Name, setP2Name] = useState("");
    const [MaxScore, setMaxScore] = useState(0);

    const Screens : Array<React.JSX.Element> = [
        <StartView changeStateFunction={handleGameStateChange} handleFormData={handleDataFromStartForm}/>, 
        <PlayView P1Name={P1Name} P2Name={P2Name} MaxScore={MaxScore} />, 
        <EndView />
    ];

    function handleGameStateChange(state : gameStateValues) {
        UpdateGameState(state);
    }

    function handleDataFromStartForm(p1 : string, p2 : string, ms : number) : boolean {

        if(isNaN(ms)) return false;

        setP1Name(p1);
        setP2Name(p2);
        setMaxScore(ms);
        // adding a boolean return value, in future we can implement some validation logic.
        return true;
    }

    return (
        <View style={styles.app}>
            {Screens[GameState]}
        </View>
    );
}

const styles = StyleSheet.create({
    app: {
        backgroundColor: '#4A4947',
        flex: 1,
        justifyContent: 'center',
    }
});

export default Main;