import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import Btn from "./Btn";

function DetailScreen({route, navigation} : {route : any, navigation : any}) : React.JSX.Element {

    const descText = route.params.desc;
    const itemId = route.params.itemId;

    const [count, updateCount] = useState(0);

    // What is useEffect hook and when should we use it ?
    // How is it different form useState hook?
    // takes 2 parameters,
    // first is effect function.
    // second is dependency array.
    // dependency array tells the hook when to call the effect function.

    useEffect(()=> {
        // do synchronization with external system.
        navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity
                    onPress={()=> updateCount(count+1)}
                    >
                        <Text style={{
                            fontSize: 25,
                            fontWeight: '400',
                            color: '#FFF',
                        }}> + </Text>
                    </TouchableOpacity>
                );
            }
        });
    }, [count]);
    

    

    return (
        <View>
            <Text style={styles.txt}>Detail Screen Component</Text>
            <Btn title="Go To Details" onPress={() => {
                navigation.navigate("Details");
            }} />

            <Btn title="Push Details Screen" onPress={() => {
                navigation.push("Details");
            }} />

            <Btn title="Go Back" onPress={() => {
                navigation.goBack();
            }} />

            <Btn title="Navigate To Top" onPress={() => {
                navigation.popToTop();
            }} />

            <Text style={styles.txt}>{descText}</Text>


            <View>
                <Text style={[styles.txt, {fontSize: 25, color: 'orange'}]}>Current Value is : {count}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 35,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
    }
});

export default DetailScreen;