// This file will have app navigation container
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import TabBarIcon from "../components/TabBarIcon";
import { fileMapCacheDirectory } from "../../metro.config";

const Tabs = createBottomTabNavigator();

function Main() : React.JSX.Element {
    return (
        <NavigationContainer>
            <Tabs.Navigator
            screenOptions={({route}) => {
                return(
                    {
                        tabBarShowLabel: false,
                        tabBarActiveTintColor: '#FF9D3D',
                        tabBarInactiveTintColor: '#FFF',
                        // tabBarIcon takes a function which will be provided with 3 parameters and
                        // should return a React element.
                        tabBarIcon: ({focused, color, size} : {focused : boolean, color : string, size : number}) => {
                            return (
                                <TabBarIcon isFocused={focused} tintColor={color} iconSize={size} routeName={route.name} />
                            );
                        }
                    }
                );
            }}
            >
                <Tabs.Screen 
                name="Home" 
                component={Home} 
                options={{
                    title: 'Home Screen',
                    headerTitleAlign: 'center',
                }}
                />

                <Tabs.Screen 
                name="Profile" 
                component={Profile} 
                />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}

export default Main;