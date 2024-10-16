import React from "react";
import {
    View,
} from "react-native";
import ScoreCard from "./ScoreCard";

function PlayView() : React.JSX.Element {
    return (
        <View>
            <ScoreCard />
            <ScoreCard />
        </View>
    );
}

export default PlayView;