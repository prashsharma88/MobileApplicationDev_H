import React from "react";
import { useState } from "react";
import {
    View,
    Button,
    StyleSheet,
    Text,
} from "react-native";
import TxtInput from "./components/TxtInput";

function Main() : React.JSX.Element {

    // const [state, method-to-update-state] = useState(initial-state);
    const [number, setNumber] = useState(0);


    function handlePress() {
        const newNumber = number === 3 ? 3 : number+1;
        setNumber(newNumber);
    }

    console.log("re-render");

    return (
        <View style={styles.appScreen}>
            <Text style={styles.txt}>
                {number}
            </Text>
            <Button onPress={handlePress} title="Increment" />

            <TxtInput placeHolder="User Name" isPassword={false} />
            <TxtInput placeHolder="Password" isPassword={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    appScreen:  {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    txt: {
        fontSize: 30,
        fontWeight: '600',
        padding: 20,
        margin: 10,
    }
});

export default Main;