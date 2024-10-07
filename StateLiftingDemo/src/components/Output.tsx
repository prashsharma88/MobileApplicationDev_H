import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

type outputPropsType = {
    userInputString : string,
    checkboxStatus : boolean,
};


function Output(props : outputPropsType) : React.JSX.Element {

    const userInputStr = props.userInputString;
    const checkboxStatus = props.checkboxStatus;

    console.log(checkboxStatus);
    return (
        <View style={style.outputView}>
            <Text style={style.outputTxt}>{userInputStr}</Text>
            <Text style={style.outputTxt}>Checkbox is checked : {checkboxStatus.toString()}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    outputView: {
        marginVertical: 20,
        marginHorizontal: 10,
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
    },

    outputTxt: {
        fontSize: 25,
        fontWeight: '600',
        marginVertical: 10,
        color: 'red',
    }
});

export default Output;