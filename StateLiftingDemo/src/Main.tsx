import React from "react";
import { 
    View,
    StyleSheet,
 } from "react-native";
import StartView from "./components/StartView";
import PlayView from "./components/PlayView";


function Main() : React.JSX.Element {
    return (
        <View style={styles.app}>
            <StartView />
            {/* <PlayView /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    app: {
        backgroundColor: '#4A4947',
        flex: 1,
        justifyContent: 'center',
    }
});

export default Main;