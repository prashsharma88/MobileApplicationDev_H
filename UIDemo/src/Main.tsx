import React from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    ScrollView,
} from "react-native";
import AppHeader from "./components/AppHeader";
import SimpleCard from "./components/SimpleCard";
import RichCard from "./components/RichCard";


function Main() : React.JSX.Element {
    return (
        <SafeAreaView style={style.appBG}>
            <View style={style.appHeader}>
                <AppHeader />
            </View>
            <View>
                <ScrollView horizontal>
                    <SimpleCard title="Card 1" txt="Card text for first card" />
                    <SimpleCard title="Card 2" txt="Card text for second card"/>
                    <SimpleCard title="Card 3" txt="Card text for third card" />
                    <SimpleCard title="Card 4" txt="Card text for fourth card" />
                    <SimpleCard title="Card 5" txt="Card text for fifth card" />
                    <SimpleCard title="Card 6" txt="Card text for sixth card" />
                </ScrollView>

                {/* Rich card */}
                <RichCard />
                
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