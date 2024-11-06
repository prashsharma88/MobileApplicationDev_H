import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import Btn from "./Btn";

// function HomeScreen(prop : any) : React.JSX.Element {
function HomeScreen({navigation} : {navigation : any}) : React.JSX.Element {
    return (
        <View>
            <Text style={styles.txt}>Home Screen Component</Text>

            <Btn title="Go To Details" onPress={() => {
                // Navigating to Details screen without any parameters.
                // navigation.navigate("Details");

                // Navigating to Details screen and passing some parameters.
                console.log("Pressed");
                navigation.navigate("Details", {
                    desc: "Some description",
                    itemId: "Some ID",
                });
            }} />
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

export default HomeScreen;