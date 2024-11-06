// Profile Tab - Settings Screen

import React from "react";
import Title from "../../components/Title";
import { View } from "react-native";

function SettingScreen() : React.JSX.Element {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: 'center',
        }}>
            <Title titleTxt="Settings" />
        </View>
        
    );
}

export default SettingScreen;