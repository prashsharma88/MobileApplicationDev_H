import React, { act, useState } from "react";
import { 
    StyleSheet,
    TextInput,
    View,
 } from "react-native";


type txtInputProps = {
    placeHolder : string,
    isPassword : boolean,
};

function TxtInput(props : txtInputProps) : React.JSX.Element {

    const placeHolderTxt = props.placeHolder;
    const isPassword = props.isPassword;

    // instead of managing the plain text and * string, which is very complex,
    // we can use secureTextEntry attribute of TextInput and a simple state to manage string
    const [inputValue, setInputValue] = useState({
        actualValue : "",
        displayValue: "",
    });

    // Simple string in useState hook.
    const [inVal, setInVal] = useState("");

    function onTxtChanged(newTxt : string) {
        // console.log(inputValue.actualValue);

        if(isPassword) {
            setInputValue({
                // password conversion logic is not working properly, Please fix it.
                actualValue: inputValue.actualValue + newTxt.charAt(newTxt.length-1),
                displayValue: "*".repeat(newTxt.length),
            });
        } else {
            setInputValue(
                {
                    actualValue : newTxt,
                    displayValue: newTxt,
                }
            );
        }
    }

    console.log(inVal);
    return (
        <View>
            <TextInput 
            style={style.txtInputView}
            placeholder={placeHolderTxt}
            value={inVal}
            onChangeText={setInVal}
            // using secureTextEntry attribute of TextInput component.
            secureTextEntry={isPassword}
            />
        </View>
    );
}

const style = StyleSheet.create({
    txtInputView: {
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 10,
        padding: 10,
        width: 250,
        fontSize: 25,
        marginVertical: 20,

    }
});

export default TxtInput;