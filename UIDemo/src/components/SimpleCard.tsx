import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";


// Every UI component in react/react-native receive a object named 'prop'
// This 'prop' object can be used to pass initialization values to the UI component


// Defining the prop type using a type object. This is usefull for complex props.
type simpleCardProp ={
    title : string,
    txt : string,
}

// function SimpleCard(prop : simpleCardProp) : React.JSX.Element {

// Another way of defining props, if you have simple props to define.
// destructuring the prop object into individual attributes.
function SimpleCard({title,txt} : {title: string, txt: string}) : React.JSX.Element {

    // const titleTxt = prop.title;
    // const cardTxt = prop.txt;

    const titleTxt = title;
    const cardTxt = txt;

    return (
        <View style={style.card}>
            {/* card title */}
            <Text style={[style.cardTitle, style.txtColor]}>
                {titleTxt}
            </Text>

            {/* divider */}
            <View style={style.div}></View>

            {/* card text */}
            <Text style={[style.cardTxt, style.txtColor]} numberOfLines={7}>
                {cardTxt}
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
        height: 178,
    },

    txtColor: {
        color: '#FFF',
    }
});

export default SimpleCard;