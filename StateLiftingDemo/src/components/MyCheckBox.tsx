import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

// importing bouncy checkbox.
import BouncyCheckbox from "react-native-bouncy-checkbox";

type mycheckboxPropType = {
    checkedStatus : boolean,
    updateCheckedStatus : (status : boolean) => void,
};


function MyCheckBox(props : mycheckboxPropType) : React.JSX.Element {

    // local state to keep tract of the checked status of MyCheckBox.
    // const [checked, setChecked] = useState(false);

    const checked = props.checkedStatus;
    const setChecked = props.updateCheckedStatus;

    return (
        <View style={styles.checkboxView}>
            <BouncyCheckbox
            isChecked={checked}
            size={25}
            fillColor="red"
            unFillColor="#FFFFFF"
            // text="Custom Checkbox"
            iconStyle={{ borderColor: "red" }}
            innerIconStyle={{ borderWidth: 2 }}
            // textStyle={{ fontFamily: "JosefinSans-Regular" }}
            onPress={(isChecked: boolean) => {
                // console.log(isChecked);
                setChecked(isChecked);
            }}
            />

            <Text style={styles.checkbox}>Checkbox Label</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    checkboxView: {
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    checkbox: {
        fontSize: 25,
        fontWeight: '600',
    }
});

export default MyCheckBox;