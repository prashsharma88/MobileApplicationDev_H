import React from "react";
import {
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

type MyBtnParamType = {
    title : string,
    onPress : () => void,
}

function MyBtn( params : MyBtnParamType ) : React.JSX.Element {
    return(
        <TouchableOpacity style={style.btnView} onPress={params.onPress}>
            <Text style={style.btnTxt}>
                {params.title}
            </Text>
        </TouchableOpacity>
    );
}


const style = StyleSheet.create({
    btnView: {
        backgroundColor: '#000',
        padding: 10,
        minWidth: 150,
        margin: 5,
        alignItems: 'center'
    },
    btnTxt: {
        fontSize: 20,
        color: "#FFF",
    }
});

export default MyBtn;