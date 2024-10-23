import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import Btn from "./Btn";

function DetailScreen({route, navigation} : {route : any, navigation : any}) : React.JSX.Element {

    const descText = route.params.desc;
    const itemId = route.params.itemId;

    return (
        <View>
            <Text style={styles.txt}>Detail Screen Component</Text>
            <Btn title="Go To Details" onPress={() => {
                navigation.navigate("Details");
            }} />

            <Btn title="Push Details Screen" onPress={() => {
                navigation.push("Details");
            }} />

            <Btn title="Go Back" onPress={() => {
                navigation.goBack();
            }} />

            <Btn title="Navigate To Top" onPress={() => {
                navigation.popToTop();
            }} />

            <Text style={styles.txt}>{descText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 35,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
    }
});

export default DetailScreen;