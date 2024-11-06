// Home Screen
import React from "react";
import { 
    View,
    Text,
    Button,
 } from "react-native";
import { CommonStyles } from "../utility/Styles";

function Home({ route, navigation} : {route : any, navigation : any }) : React.JSX.Element {

    return (
        <View style={CommonStyles.screen}>
            <Text style={CommonStyles.TitleTxt}>Home Screen</Text>
            <Button title="Profile" onPress={() => {
                navigation.navigate("Profile")
            }} />
        </View>
    );
}

export default Home;