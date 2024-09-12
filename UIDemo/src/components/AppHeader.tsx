import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";



function AppHeader():React.JSX.Element {
    return (
        <View style={style.headerArea}>
            <Text style={style.headerTxt}>UI Demo...!!!</Text>
        </View>
    );
}

const style = StyleSheet.create({
    headerTxt:  {
        fontSize: 35,
        fontWeight: '800',
        color: '#E85C0D',
        borderColor: '#E85C0D',
        borderBottomWidth: 2,
    },

    headerArea: {
        alignItems:'center'
    }
});

export default AppHeader;