// Stack Navigation fro Profile Tab

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileTab/Profile";
import SettingScreen from "../screens/ProfileTab/Settings";

const ProfileStack = createNativeStackNavigator();

function ProfileStackNavigation() : React.JSX.Element {
    return (
        <ProfileStack.Navigator initialRouteName="Profile">
            <ProfileStack.Screen name="Profile" component={ProfileScreen} />
            <ProfileStack.Screen name="Settings" component={SettingScreen} />
        </ProfileStack.Navigator>
    );
}


export default ProfileStackNavigation;
