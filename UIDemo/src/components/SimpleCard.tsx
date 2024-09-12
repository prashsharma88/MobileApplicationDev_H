import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";



function SimpleCard():React.JSX.Element {
    return (
        <View style={style.card}>
            <Text style={style.cardTitle}>Card Title</Text>
            <View style={style.div}></View>
            <Text style={style.cardTxt} numberOfLines={7}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quia omnis veniam eos dicta aspernatur quas nam pariatur accusamus esse, 
                error molestias reprehenderit neque, hic, ullam repudiandae atque quaerat 
                delectus illo.
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    card:  {
        width: 250,
        height: 250,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#7695FF',
        margin: 10,
        alignItems: 'center',
        overflow: 'hidden'
    },

    cardTitle: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: '600',
        height: 40,
    },

    div: {
        height: 2,
        width: '100%',
        backgroundColor: '#FFF',
        marginVertical: 5,
    },

    cardTxt: {
        fontSize: 20,
        color: '#FFF',
        height: 178,
    },
});

export default SimpleCard;