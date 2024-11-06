// Profile Tab - Profile Screen

import React from "react";
import Title from "../../components/Title";
import { TouchableOpacity, View, Text } from "react-native";

function ProfileScreen({route, navigation} : {route : any, navigation : any}) : React.JSX.Element {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: 'center',
        }}>
            <Title titleTxt="Profile" />

            <TouchableOpacity
            onPress={()=>{
                navigation.navigate("Settings");
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
                >Go To Settings</Text>
            </TouchableOpacity>
        </View>
        
    );
}

export default ProfileScreen;