import React, { StaticLifecycle, useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { CommonStyles } from "../utility/Styles";
import { gameStateValues } from "../Main";

type StartViewPropType = {
    changeStateFunction : (state : gameStateValues) => void,
    handleFormData : (val1 : string, val2 : string, val3 : number) => boolean,
};

function StartView(props : StartViewPropType) : React.JSX.Element {
    const changeGameState = props.changeStateFunction;
    const handleFormData = props.handleFormData;

    // local state to keep track of input data.
    const [p1, setP1] = useState("");
    const [p2, setP2] = useState("");
    const [ms, setMS] = useState("");




    return (
        <View>
            <View  style={styles.formView}>
                <Text style={CommonStyles.txt}>Player 1:</Text>
                <TextInput 
                style={[CommonStyles.border, styles.inputView, CommonStyles.txt]}
                maxLength={50}
                inputMode="text"
                value={p1}
                onChangeText={setP1}
                />
            </View>


            <View style={styles.formView}>
                <Text style={CommonStyles.txt}>Player 2:</Text>
                <TextInput 
                style={[CommonStyles.border, styles.inputView, CommonStyles.txt]}
                maxLength={50}
                inputMode="text"
                value={p2}
                onChangeText={setP2}
                />
            </View>

            <View style={styles.formView}>
                <Text style={CommonStyles.txt}>Max Score:</Text>
                <TextInput 
                style={[CommonStyles.border, styles.inputView, CommonStyles.txt]}
                maxLength={2}
                inputMode="numeric"
                value={ms}
                onChangeText={setMS}
                />
            </View>

            <TouchableOpacity
            style={[CommonStyles.border, CommonStyles.btn, styles.formView]}
            onPress={() => {
                console.log("Submit Pressed");
                if(handleFormData(p1,p2,Number(ms)))
                    changeGameState(gameStateValues.PLAY);
                }}>
                <Text style={CommonStyles.txt}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    formView:  {
        alignItems: 'center',
        marginHorizontal: 10,
    },

    inputView: {
        minWidth: '80%',
        padding: 10,
    }
});

export default StartView;