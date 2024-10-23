import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import DetailScreen from "./components/DetailsScreen";

// get Navigartion Stack from native-stack library
const Stack = createNativeStackNavigator();

function Main() : React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                name="Home"
                component={HomeScreen}
                />

                <Stack.Screen 
                name="Details"
                component={DetailScreen}
                initialParams={{
                    desc: "default Description",
                    itemId: "default Item ID",
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Main;