import React, { useState } from "react";
import {
    TextInput,
    View,
    StyleSheet,
} from "react-native";

type myinputboxPropType = {
    userInput : string,
    setUserInput : (txt : string) => void,
};


function MyInputBox(props : myinputboxPropType) : React.JSX.Element {

    // add a local state to keep track of input from user.
    // const [userInput, setUserInput] = useState('');

    const userInput = props.userInput;
    const setUserInput = props.setUserInput;

    return (
        <View>
            <TextInput
            style={styles.inputBox}
            placeholder="Input Text"
            value={userInput}
            onChangeText={setUserInput}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputBox: {
        padding: 10,
        margin: 10,
        fontSize: 25,
        fontWeight: '600',
        borderWidth: 2,
        borderRadius: 10,
    }
});

export default MyInputBox;