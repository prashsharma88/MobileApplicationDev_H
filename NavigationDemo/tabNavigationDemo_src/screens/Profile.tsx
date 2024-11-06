// Profile Screen
import React from "react";
import { 
    View,
    Text,
 } from "react-native";
import { CommonStyles } from "../utility/Styles";

function Profile() : React.JSX.Element {

    return (
        <View style={CommonStyles.screen}>
            <Text style={CommonStyles.TitleTxt}>Profile Screen</Text>
        </View>
    );
}

export default Profile;