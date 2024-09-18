import React from "react";
import {
    FlatList,
    View,
} from "react-native";
import { contactList } from "../data";
import ContactListItem from "./ContactListItem";


function ContactListFlatlist() : React.JSX.Element {
    return (
        <View>
            <FlatList 
            data={contactList}
            keyExtractor={(item, index) => index+""}
            renderItem={ ({item}) => <ContactListItem 
                                    fName={item.firstName}
                                    lName={item.lastName}
                                    mob={item.mobileNumber}
                                    email={item.emailAddress}
                                    />}
            />
        </View>
    )
}

export default ContactListFlatlist;