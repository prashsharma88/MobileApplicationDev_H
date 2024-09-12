import React from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    ScrollView,
} from "react-native";
import AppHeader from "./components/AppHeader";
import SimpleCard from "./components/SimpleCard";


function Main() : React.JSX.Element {
    return (
        <SafeAreaView style={style.appBG}>
            <View style={style.appHeader}>
                <AppHeader />
            </View>
            <View>

            <SimpleCard />


                
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    appHeader: {
        marginBottom: 10,
    },

    appBG: {
        flex: 1,
        backgroundColor: '#EAE4DD',
        paddingHorizontal: 10,
    },
});


export default Main;