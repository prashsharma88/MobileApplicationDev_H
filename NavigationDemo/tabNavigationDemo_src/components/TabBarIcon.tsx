/* Tab bar icon component should accept 4 properties, 
1. routeName : string,
2. iconSize: number,
3. isFocused: boolean,
4. tintColor: string,

It should return an react component that display an image.
*/
import React from "react";
import {
    View,
    Image,
    StyleSheet,
} from "react-native";

type TabBarIconPropType = {
    routeName : string,
    iconSize : number,
    isFocused : boolean,
    tintColor: string,
}

function TabBarIcon( props : TabBarIconPropType ) : React.JSX.Element {
    const routeName = props.routeName;
    const isFocused = props.isFocused;
    const tintColor = props.tintColor;
    const iconSize = props.iconSize;
    return (
        <View 
        style={{
            borderWidth: 1,
            borderColor: tintColor,
            padding: 5,
            borderRadius: 10,
        }}
        >
            <Image 
            style={ {
                height: iconSize,
                width: iconSize,
                resizeMode: 'contain'
            } }
            source={
                routeName=="Home" ? 
                require("../assets/icon/ic_home.png") :
                require("../assets/icon/ic_profile.png")
                } 
            alt="Tab Icon"
            />
        </View>
    );
}

export default TabBarIcon;