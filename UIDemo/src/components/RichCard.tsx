import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
} from "react-native";


/**
 * Rich Card:
 * height: 400, width: 400
 * Card image
 * Divider
 * Card Title
 * Card txt
 * action button
 */

function RichCard() : React.JSX.Element {

    return (
        <View style={style.cardView}>

            {/* Card image view */}
            <View style={style.cardImgView}>
                <Image 
                style={style.cardImg}
                source={require("../../assest/dog_1.png")}
                />
            </View>

            {/* Divider */}
            <View style={style.div}/>

            {/* Card Title and text */}
            <View style={style.txtView}>
                <Text style={[style.cardTitle, style.txtColor]}>Card Title</Text>
                <Text style={[style.cardTxt, style.txtColor]}>Card text</Text>
            </View>

            {/* Card Action */}
            <Pressable style={style.actionBtnView}>
                <Text style={style.actionBtn}>Action Button</Text>
            </Pressable>

        </View>
    );
}
const style = StyleSheet.create({
    cardView: {
        height: 400,
        width: '80%', // it adjust the width of the view according to screen size.
        maxWidth: 400,  // limiting the maximum widht of view.
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        padding: 10,
    },

    cardImgView: {
        height: 180,
        width: '100%',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardImg: {
        resizeMode: 'center'
    },

    cardTitle: {
        fontSize: 25,
        fontWeight: '600',
        height: 40,
    },

    div: {
        height: 2,
        width: '100%',
        backgroundColor: '#000',
        marginVertical: 5,
    },

    cardTxt: {
        fontSize: 20,
    },

    txtColor: {
        color: '#000',
    },

    txtView: {
        alignItems: 'center',
    },

    actionBtnView: {

    },

    actionBtn: {
        fontSize: 20,
        fontWeight: '600',
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: '#4379F2',
        borderRadius: 10,
        color: '#FFF',
        textAlign: 'center'
    },
});

export default RichCard;