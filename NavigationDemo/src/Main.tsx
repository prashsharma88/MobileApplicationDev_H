import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import DetailScreen from "./components/DetailsScreen";

// get Navigartion Stack from native-stack library
const Stack = createNativeStackNavigator();

function Main() : React.JSX.Element {

    function getScreenOptions() : any{
        const options = {
            headerTintColor: 'orange',
                    headerStyle: {
                        backgroundColor: "blue"
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 30,
                        fontWeight: '600',
                        fontFamily: 'cursive',
                    }
        };

        return options;
    }

    function getInfoButton() : React.JSX.Element {
        return (
        <TouchableOpacity onPress={() => Alert.alert("App Info", "Version: 0.1")}>
            <Text style={{color: '#FFF', fontSize: 15}}>Info</Text>
        </TouchableOpacity>
    );}

    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={getScreenOptions}
            >
                <Stack.Screen 
                name="Home"
                component={HomeScreen}
                // options takes an object or a function that 
                // returns an object.
                options={{
                    title: "Home Screen",
                    headerRight: getInfoButton,
                    // headerLeft: () => <TouchableOpacity></TouchableOpacity>,
                }}
                />

                <Stack.Screen 
                name="Details"
                component={DetailScreen}
                initialParams={{
                    desc: "default Description",
                    itemId: "default Item ID",
                }}
                options={{
                    title: "Destails Screen",
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Main;