import React from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import PasswordStrength from "./components/PasswordStrength";


function Main() : React.JSX.Element {
    return (
        <View>
            <PasswordStrength />
        </View>
    );
}


export default Main;