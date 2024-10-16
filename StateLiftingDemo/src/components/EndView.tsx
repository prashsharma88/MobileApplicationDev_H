import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { CommonStyles } from "../utility/Styles";

function EndView() : React.JSX.Element {
    const winnerName = "Max";
    return (
        <View>
            <Text style={CommonStyles.txt}>
                Winner is {winnerName}!!!
            </Text>
            <TouchableOpacity style={CommonStyles.border}>
                <Text style={CommonStyles.txt}>Restart</Text>
            </TouchableOpacity>
        </View>
    );
}


export default EndView;