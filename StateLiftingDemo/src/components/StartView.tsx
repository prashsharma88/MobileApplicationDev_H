import React from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { CommonStyles } from "../utility/Styles";


function StartView() : React.JSX.Element {
    return (
        <View>
            <View  style={styles.formView}>
                <Text style={CommonStyles.txt}>Player 1:</Text>
                <TextInput 
                style={[CommonStyles.border, styles.inputView]}
                maxLength={50}
                inputMode="text"
                onChangeText={(txt) => {console.log(txt)}}
                />
            </View>


            <View style={styles.formView}>
                <Text style={CommonStyles.txt}>Player 2:</Text>
                <TextInput 
                style={[CommonStyles.border, styles.inputView]}
                maxLength={50}
                inputMode="text"
                onChangeText={(txt) => {console.log(txt)}}
                />
            </View>

            <View style={styles.formView}>
                <Text style={CommonStyles.txt}>Max Score:</Text>
                <TextInput 
                style={[CommonStyles.border, styles.inputView]}
                maxLength={2}
                inputMode="numeric"
                onChangeText={(txt) => {console.log(txt)}}
                />
            </View>

            <TouchableOpacity
            style={[CommonStyles.border, CommonStyles.btn, styles.formView]}
            onPress={() => {console.log("Submit Pressed")}}>
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