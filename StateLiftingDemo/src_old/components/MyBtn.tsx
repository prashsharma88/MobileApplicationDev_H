import React from "react";
import {
    Button,
    View,
} from "react-native";

type mybtnPropsType = {
    pressHandler : () => void
};

function MyBtn(props : mybtnPropsType) : React.JSX.Element {

    const pressHandler = props.pressHandler;
    return (
        <View>
            <Button 
            title="Submit"
            onPress={pressHandler}
            />
        </View>
    )
}

export default MyBtn;
