import React, { useState } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    Button,
    Clipboard,
} from "react-native";
import { colors, getPasswordStrength } from "../utility";

let parentWidth = 0;

function PasswordStrength() : React.JSX.Element {

    const [inputTxt, setInputTxt] = useState("");
    const [strength, setStrength] = useState(0);
    const [barWidth, setBarWidth] = useState(0);
 
    function handleTextChange(newText : string) {
        const s = getPasswordStrength(newText);
        setStrength(s);
        const width = (s * 20 * parentWidth) / 100;
        setBarWidth(width);
        setInputTxt(newText);
    }

    const onLayout = (event: any) => {
        
        const { width }  = event.nativeEvent.layout;

        parentWidth = width;

        console.log("parentWidth:  " + parentWidth);
      };

    return (
        <View>

            <TextInput
            placeholder="Enter Your Password"
            value={inputTxt}
            onChangeText={handleTextChange}
            style={styles.txtInput}
             />

             {/* Strength Bar */}
             <View style={styles.strengthBar} onLayout={onLayout}>
                <View style={[
                    styles.bar,
                    {
                        backgroundColor: colors[strength],
                        width: barWidth,
                    }
                    ]}>
                </View>
             </View>


             <Button title="Copy" onPress={() => Clipboard.setString(inputTxt)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    txtInput: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#000',
        margin: 10,
        width: '80%',
        padding: 10,
        fontSize: 25,
    },

    strengthBar: {
        height: 10,
        width: '80%',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
    },

    bar: {
        height: 10,
        width: '20%',
        borderRadius: 10,
    }
});

export default PasswordStrength;