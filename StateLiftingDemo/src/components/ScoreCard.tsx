import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { CommonStyles } from "../utility/Styles";

type ScoreCardPropType = {
    playerName : string,
    maxScore : number,
    currentScore : number,
    setScore : Array<number>,
    updateCurrentScore : (val : number) => void,
    handleWinner : () => void,
};

function ScoreCard( props : ScoreCardPropType) : React.JSX.Element {
    const playerName = props.playerName;
    const setScore = props.setScore;
    const maxScore = props.maxScore;
    const currentScore = props.currentScore;
    let isWinner = currentScore >=maxScore ? true : false ;
    const updateCurrentScore = props.updateCurrentScore;
    const handleWinner = props.handleWinner;


    function handleIncrementDecrement(op : number) {
        if(op > 0) {
            // increase current score
            if(currentScore < maxScore) 
                updateCurrentScore(currentScore+1);
        } else {
            // decrease current score
            if(currentScore>0) 
                updateCurrentScore(currentScore-1);
        }
    }

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
                onPress={() => {
                    console.log("Submit Pressed");
                    handleIncrementDecrement(-1)
                    }}>
                    <Text style={CommonStyles.txt}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={[CommonStyles.border, CommonStyles.btn]}
                onPress={() => {
                    console.log("Submit Pressed");
                    handleIncrementDecrement(1)
                    }}>
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
                onPress={() => {
                    console.log("Winner btn pressed")
                    handleWinner();
                    }}>
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