import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { CommonStyles } from "../utility/Styles";


function ScoreCard() : React.JSX.Element {
    const playerName = "Max";
    const setScore = [10,20,30];
    let currentScore = 9;
    let isWinner = true;

    return (
        <View style={[CommonStyles.border, styles.center]}>
            <View>
                <Text style={CommonStyles.txt}>{playerName}</Text>
            </View>

            <View style={styles.horizontalView}>
                <Text style={CommonStyles.txt}>Sets:</Text>
                {setScore.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text style={CommonStyles.txt}> {item} </Text>
                        </View>
                    );
                })}
            </View>

            <View>
                <Text style={[CommonStyles.txt, {fontSize: 90,}]}>
                    {currentScore}
                </Text>
            </View>

            <View style={[styles.horizontalView, styles.btnView]}>
                <TouchableOpacity
                style={[CommonStyles.border, CommonStyles.btn]}
                onPress={() => {console.log("Submit Pressed")}}>
                    <Text style={CommonStyles.txt}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={[CommonStyles.border, CommonStyles.btn]}
                onPress={() => {console.log("Submit Pressed")}}>
                    <Text style={CommonStyles.txt}>+</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={
                    [
                        CommonStyles.border, 
                        CommonStyles.btn,
                        {
                            display: isWinner ? "flex" : "none",
                        }
                    ]
                }
                onPress={() => {console.log("Submit Pressed")}}>
                    <Text style={CommonStyles.txt}>Winner</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    horizontalView: {
        flexDirection: 'row',
    },

    center: {
        alignItems: 'center',
    },

    btnView: {
        gap: 50,
    }
});

export default ScoreCard;