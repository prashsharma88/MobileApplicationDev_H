import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigation from "./HomeStackNav";
import ProfileStackNavigation from "./ProfileStackNav";

const TabNav = createBottomTabNavigator();

function AppNavigation() : React.JSX.Element {
    return (
        <NavigationContainer>
            <TabNav.Navigator
            screenOptions={{
                headerShown: false,
            }}
            >
                <TabNav.Screen name="HomeTab" component={HomeStackNavigation} />
                <TabNav.Screen name="ProfileTab" component={ProfileStackNavigation} />
            </TabNav.Navigator>
        </NavigationContainer>
    );
}


export default AppNavigation;