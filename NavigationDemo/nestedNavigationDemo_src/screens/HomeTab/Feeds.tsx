// Home Tab - Feeds Screen

import React from "react";
import Title from "../../components/Title";
import { View } from "react-native";

function FeedsScreen() : React.JSX.Element {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: 'center',
        }}>
            <Title titleTxt="Feeds" />
        </View>
        
    );
}

export default FeedsScreen;