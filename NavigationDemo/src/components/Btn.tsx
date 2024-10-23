import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View,
} from "react-native";

type BtnPropType = {
    title : string,
    onPress : () => void,
};

function Btn( props: BtnPropType ) : React.JSX.Element {

    const title = props.title;
    const handlePress = props.onPress;

    return (
        <View style={style.btnView}>
            <TouchableOpacity onPress={handlePress}>
                <Text style={style.btnTxt}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    btnView: {
        minWidth: 250,
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        alignItems: 'center',
    },
    
    btnTxt: {
        fontSize: 25,
        fontWeight: '400',
        color: '#FFF',
    }
});

export default Btn;