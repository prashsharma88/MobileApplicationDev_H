// Stack navigation file for Home Tab.

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeTab/Home";
import FeedsScreen from "../screens/HomeTab/Feeds";

const HomeStack = createNativeStackNavigator();

function HomeStackNavigation() : React.JSX.Element {
    return (
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Feeds" component={FeedsScreen} />
        </HomeStack.Navigator>
    );
}


export default HomeStackNavigation;
