import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";


type contactItemPropType = {
    fName: string,
    lName: string,
    mob: string,
    email: string,
}

function ContactListItem(prop : contactItemPropType) : React.JSX.Element {

    const name = prop.fName+" "+prop.lName;
    const mob = prop.mob;
    const email = prop.email;

    return (
        <View style={style.contactCardView}>
            <View style={style.imgView}>
                {/* Image View */}
                <Image
                source={require('../../assets/user.png')}
                />
            </View>

            <View style={style.detailView}>
                {/* Contact Details View */}
                <Text style={style.nameTxt}>{name}</Text>
                <Text style={style.detailTxt}>{mob}</Text>
                <Text style={style.detailTxt}>{email}</Text>
            </View>
        </View>
    );
}


const style = StyleSheet.create({

    contactCardView: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#DDDDDD',
        alignItems: 'center',
        height: 100,
        marginVertical: 5
    },

    imgView: {},

    detailView: {
        marginStart: 15,
    },

    nameTxt: {
        fontSize: 25,
        fontWeight: '400',
        color: '#000',

    },

    detailTxt: {
        fontSize: 20,
        color: '#000',
    }
});

export default ContactListItem;