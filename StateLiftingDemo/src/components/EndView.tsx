import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { CommonStyles } from "../utility/Styles";
import { gameStateValues } from "../utility/utils";

type endViewPropsType = {
    winnerName : string,
    updateGameState : (val : gameStateValues) => void,
};

function EndView(props : endViewPropsType) : React.JSX.Element {
    const winnerName = props.winnerName;
    const updateGameState = props.updateGameState;
    return (
        <View>
            <Text style={CommonStyles.txt}>
                Winner is {winnerName}!!!
            </Text>
            <TouchableOpacity 
            style={CommonStyles.border}
            onPress={() => updateGameState(gameStateValues.INIT)}
            >
                <Text style={CommonStyles.txt}>Restart</Text>
            </TouchableOpacity>
        </View>
    );
}


export default EndView;