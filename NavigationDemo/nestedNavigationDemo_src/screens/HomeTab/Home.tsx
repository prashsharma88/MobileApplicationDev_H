// Home Tab - Home Screen

import React from "react";
import Title from "../../components/Title";
import { Text, TouchableOpacity, View } from "react-native";

function HomeScreen({route, navigation} : {route : any, navigation : any}) : React.JSX.Element {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: 'center',
        }}>
            <Title titleTxt="Home" />

            <TouchableOpacity
            onPress={()=>{
                navigation.navigate("Feeds");
            }}
            >
                <Text
                style={{
                    fontSize: 25,
                    fontWeight: '400',
                    textAlign: 'center',
                    padding: 10,
                    backgroundColor: 'blue',
                    color: '#FFF',
                    margin: 10,
                    borderRadius: 10,
                }}
                >Go To Feeds</Text>
            </TouchableOpacity>
        </View>
        
    );
}

export default HomeScreen;