import React from "react";
import {
    View,
    StyleSheet,
    Text,
} from "react-native";

type AppLayoutParamTypes = {
    children : React.JSX.Element,
}

function AppLayout( params : AppLayoutParamTypes ) : React.JSX.Element {
    return(
        <View style={style.container}>
            <View style={style.childrenArea}>
                { params.children }
            </View>
            <View style={style.footerArea}>
                <Text style={style.footerTxt}>Powered by {"{"}JSON{"}"} Placeholder</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create(
    {
        footerArea: {
            padding: 5,
            backgroundColor: '#FAB12F',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            alignItems: 'center',
        },
        footerTxt: {
            fontSize: 20,
            color: '#FFF',
        },
        childrenArea: {
            flex: 1,
        },
        container: {
            flex: 1
        },
    }
);

export default AppLayout;